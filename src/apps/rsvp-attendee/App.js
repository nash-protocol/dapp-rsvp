import React, { useEffect, useState } from "react";
import * as backend from "./build/index.main.mjs";
import * as eventBackend from "../rsvp-event/build/index.main.mjs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getAccountInfo, somethingFromSome } from "../../functions";
import appService from "../../services/appService";
import { useReach } from "../../hooks/useReach";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Spinner } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import config from "./config";
import ContractLoader from "./loaders/ContractLoader.js";
import { TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import QRCode from "qrcode.react";

function App() {
  const reach = useReach();
  const navigate = useNavigate();
  const { eventId, attendId } = useParams();
  console.log({ eventId, attendId });
  const [addr, setAddr] = useLocalStorage("addr", null);
  const initialState = {
    acc: null,
  };
  const [state, setState] = useState(initialState);
  const [loadingCreation, setLoadingCreation] = useState(false);
  const [loadingActivation, setLoadingActivation] = useState(false);
  const [apps, setApps] = useState(null);
  const [app, setApp] = useState(attendId);
  const [query, setQuery] = useState({});

  useEffect(() => {
    if (!state.acc) return;
    (async () => {
      const ctc = state.acc.contract(eventBackend, parseInt(eventId));
      const token = somethingFromSome(
        (v) => reach.bigNumberToNumber(v),
        0
      )(await ctc.v.token());
      const count = somethingFromSome(
        (v) => reach.bigNumberToNumber(v),
        0
      )(await ctc.v.count());
      const price = somethingFromSome(
        (v) => reach.formatCurrency(v),
        0
      )(await ctc.v.price());
      const admin = somethingFromSome(
        (v) => reach.formatAddress(v),
        0
      )(await ctc.v.admin());
      const name = somethingFromSome((v) => v, "")(await ctc.v.name());
      setState({ ...state, count, token, admin, name, price });
    })();
  }, [state.acc]);

  useEffect(() => {
    if (addr) {
      handleConnect();
    }
  }, []);

  useEffect(() => {
    if (apps) return;
    appService
      .getApps({ planId: config.PLAN_ID, deleted: false })
      .then(setApps);
  }, []);

  const handleConnect = async () => {
    try {
      console.log("Connecting ...");
      let acc;
      if (addr) {
        acc = await reach.connectAccount({ addr });
      } else {
        acc = await reach.getDefaultAccount();
        setAddr(acc.networkAccount.addr);
      }
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      const accInfo = await getAccountInfo(acc.networkAccount.addr);
      setState({
        ...state,
        acc: {
          ...acc,
          ...accInfo,
        },
        addr,
        balAtomic,
        bal,
      });
    } catch (e) {
      alert(e);
    }
  };

  const handleDisconnect = () => setState(initialState);

  const handleCreation = async () => {
    setLoadingCreation(true);
    const { info } = await appService.createApp(config.PLAN_ID);
    setApps([...apps, { appId: info }]);
    setApp(info);
    setLoadingCreation(false);
    //navigate(`/${info}`);
  };

  const handleActivation = async () => {
    if (!state.acc) return;
    setLoadingActivation(true);
    const ctc = await state.acc.contract(backend, app);
    await Promise.all([backend.Contractee(ctc, {})]);
    await appService.deleteApp(app);
    setApps(apps.filter(({ appId }) => appId !== app)); // refresh apps
    setLoadingActivation(false);
    console.log("DONE");
  };

  const handleDeletion = async () => {
    if (!app) return;
    await appService.deleteApp(app);
    setApps(apps.filter(({ appId }) => appId !== app)); // refresh apps
    console.log("DONE");
  };

  const handleRSVP = async () => {
    if (!state.acc || !state.token || !state.admin) return;
    const { info: appId } = await appService.createApp(config.PLAN_ID);
    navigate(`/attend/${eventId}/${appId}`);
    window.location.reload();
  };

  const handleRSVP2 = async () => {
    if (!state.acc || !state.token || !state.admin) return;
    const ctc = state.acc.contract(backend, parseInt(attendId));
    Promise.all([
      ctc.p.Contractee({}),
      ctc.p.Attendee({
        getParams: () => ({
          admin: state.admin,
          token: state.token,
          price: reach.parseCurrency(state.price),
          ctcEvent: parseInt(eventId),
        }),
        signal: () => {
          window.location.reload()
        }
      }),
    ]);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const renderInput = (input) => {
    switch (input.type) {
      case "TEXT":
        return (
          <TextField
            name={input.name}
            id={input.name}
            label={input.label}
            onChange={({ target }) =>
              setQuery({ ...query, [input.name]: target.value })
            }
            variant="outlined"
          />
        );
    }
  };

  const inputs = [
    {
      type: "TEXT",
      name: "ASSETID",
      label: "Token",
    },
    {
      type: "TEXT",
      name: "ADDR",
      label: "Admin",
    },
  ];

  const interact = {
    Contractee: {},
    Attendee: {
      getParams: () => ({
        admin: query.ADDR,
        token: parseInt(query.ASSETID),
      }),
    },
    Relay: {},
  };

  const apis = {
    check: {
      call: (v) => v().then(() => window.location.reload()),
      render: <span>Check</span>,
      visible: ({ admin, attending }) =>
        state.acc.networkAccount.addr === admin && attending === "no",
    },
    peerCheck: {
      call: (v) => v().then(() => window.location.reload()),
      render: <span>Peer Check</span>,
      visible: ({ granted, attending }) =>
        granted === "yes" && attending === "no",
    },
    touch: {
      call: (v) => v().then(() => window.location.reload()),
      render: <span>Touch</span>,
      visible: ({ attendee, attending, granted }) =>
        state.acc.networkAccount.addr === attendee &&
        attending === "yes" &&
        granted === "no",
    },
    grant: {
      call: (v) => v().then(() => window.location.reload()),
      render: <span>Grant</span>,
      visible: ({ attendee, granted, attending }) =>
        state.acc.networkAccount.addr === attendee &&
        granted !== "yes" &&
        attending === "no",
    },
    destroy: {
      call: (v) => v().then(() => window.location.reload()),
      render: <span>Destroy</span>,
      visible: ({ attendee }) =>
        true && state.acc.networkAccount.addr === attendee,
    },
  };

  const views = {
    token: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    name: (v) => somethingFromSome((v) => v, "")(v),
    price: (v) => somethingFromSome((v) => reach.formatCurrency(v), 0)(v),
    admin: (v) => somethingFromSome((v) => reach.formatAddress(v), "")(v),
    attendee: (v) => somethingFromSome((v) => reach.formatAddress(v), "")(v),
    attending: (v) => somethingFromSome((v) => (v ? "yes" : "no"), false)(v),
    granted: (v) => somethingFromSome((v) => (v ? "yes" : "no"), false)(v),
  };

  const Participants = ({ id, ctc }) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Participants
        </Grid>
        {Object.entries(ctc.p)
          .filter(([k]) => !["Constructor", "Verifier"].includes(k))
          .map(([k, v]) => (
            <Grid item>
              <Button onClick={() => v(interact[k])}>{k}</Button>
            </Grid>
          ))}
      </Grid>
    );
  };

  const API = ({ ctc, view }) => {
    return (
      view.ticket > 0 && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            Action
          </Grid>
          {Object.entries(ctc.a).map(
            ([k, v]) =>
              apis[k].visible(view) && (
                <Grid item>
                  <Button onClick={() => apis[k].call(v)}>
                    {apis[k].render || k}
                  </Button>
                </Grid>
              )
          )}
        </Grid>
      )
    );
  };

  const getView = async (ctc) => {
    const ticket = views.token(await ctc.v.ticket());
    const admin = views.admin(await ctc.v.admin());
    const attendee = views.attendee(await ctc.v.attendee());
    const attending = views.attending(await ctc.v.attending());
    const granted = views.granted(await ctc.v.granted());
    console.log({ ticket, admin, attending, granted });
    return {
      ticket,
      admin,
      attending,
      granted,
      attendee,
    };
  };

  const View = ({ view }) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Info
        </Grid>
        {Object.entries(view).map(([k, v]) => (
          <Grid item>
            <Item>
              {k}: {v}
            </Item>
          </Grid>
        ))}
      </Grid>
    );
  };

  const Code = ({ view }) => {
    return (
      view.ticket > 0 && <Box>
        <p>QR Code</p>
        <QRCode
          fgColor={view.attending === "yes" ? "green" : "black"}
          size={300}
          value={window.location.href}
        />
        <br />
        <div>Attending: {view.attending}</div>
      </Box>
    );
  };

  const RSVP = ({ view }) => {
    console.log({ view });
    return (
      attendId &&
      view.ticket === 0 && (
        <Box sx={{ m: 5 }}>
          <button onClick={handleRSVP2}>Stake Self</button>
        </Box>
      )
    );
  };
  return (
    <>
      <button onClick={() => navigate(`/event`)}>Event</button>
      {state.name ? (
        <Container className="p-5">
          <Box sx={{ m: 5 }}>
            <h1>{state.name}</h1>
            <p>{state.count} attending</p>
          </Box>
          {!attendId && (
            <Box sx={{ m: 5 }}>
              <button onClick={handleRSVP}>RSVP</button>
            </Box>
          )}
          {false && (
            <>
              <Box sx={{ m: 5 }}>
                {!loadingCreation ? (
                  <Button onClick={handleCreation} className="w-100">
                    Create
                  </Button>
                ) : (
                  <Button disabled className="w-100">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Creating...
                  </Button>
                )}
              </Box>
              <Box sx={{ m: 5 }}>
                <Button onClick={handleActivation} className="w-100">
                  Activate
                </Button>
              </Box>
              <Box sx={{ m: 5 }}>
                <Button onClick={handleDeletion} className="w-100">
                  Delete
                </Button>
              </Box>
            </>
          )}
          {false && !attendId && apps && (
            <Box sx={{ m: 5 }}>
              <Grid container spacing={2}>
                {apps.map((el) => (
                  <Grid item xs={4}>
                    <Item
                      style={{
                        fontWeight: el.appId === app ? "bold" : "normal",
                      }}
                      onClick={() => setApp(el.appId)}
                    >
                      {el.appId}
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {app && state.acc && attendId && (
            <>
              {false && inputs.map((el) => renderInput(el))}
              <ContractLoader acc={state.acc} stdlib={reach} appId={app}>
                <RSVP />
                <View />
                <API />
                <Code />
              </ContractLoader>
            </>
          )}
        </Container>
      ) : (
        <Container className="p-5">
          <h1>Loading...</h1>
        </Container>
      )}
    </>
  );
}

export default App;
