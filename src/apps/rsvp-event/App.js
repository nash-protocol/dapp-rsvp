import React, { useEffect, useState } from "react";
import * as backend from "./build/index.main.mjs";
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
import configAttendee from "../rsvp-attendee/config";
import ContractLoader from "./loaders/ContractLoader.js";
import { TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SelectInput from "@mui/material/Select/SelectInput";

function App() {
  const reach = useReach();
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [addr, setAddr] = useLocalStorage("addr", null);
  const initialState = {
    acc: null,
  };
  const [state, setState] = useState(initialState);
  const [loadingCreation, setLoadingCreation] = useState(false);
  const [loadingActivation, setLoadingActivation] = useState(false);
  const [apps, setApps] = useState(null);
  const [app, setApp] = useState(null);

  const [count, setCount] = useState(null);

  useEffect(() => {
    if (addr) {
      handleConnect();
    }
  }, []);

  /*
  useEffect(() => {
    if(eventId) return;
    appService
      .getApps({ planId: configAttendee.PLAN_ID, deleted: false })
      .then((app) => app.length)
      .then(setCount);
  }, []);
  */

  useEffect(() => {
    if (apps || !state.acc) return;
    appService
      .getApps({ planId: config.PLAN_ID, deleted: false })
      .then(async (apps) => {
        let views = [];
        apps.forEach(async (el) => {
          const key = `event-${el.appId}`;
          const stored = localStorage.getItem(key);
          let value;
          if (stored && JSON.parse(stored).name != "") {
            value = JSON.parse(stored);
          } else {
            const ctc = state.acc.contract(backend, el.appId);
            const view = await getView(ctc);
            localStorage.setItem(key, JSON.stringify(view));
            value = view;
          }
          views.push({ ...el, ...value });
        });
        console.log({ apps, views });
        return views;
      })
      .then(setApps);
  }, [state.acc]);

  const handleReload = async () => {
    if (!state.acc) return;
    await appService
      .getApps({ planId: config.PLAN_ID, deleted: false })
      .then(async (apps) => {
        let views = [];
        apps.forEach(async (el) => {
          const key = `event-${el.appId}`;
          const stored = localStorage.getItem(key);
          const ctc = state.acc.contract(backend, el.appId);
          const view = await getView(ctc);
          localStorage.setItem(key, JSON.stringify(view));
          const value = view;
          views.push({ ...el, ...value });
        });
        console.log({ apps, views });
        return views;
      })
      .then(() => window.location.reload());
  };

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

  const handleCreateEvent = async () => {
    if (!state.acc) return;
    setLoadingCreation(true);
    const { info: appId } = await appService.createApp(config.PLAN_ID);
    navigate(`/event/${appId}`);
  };


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));



  const inputs = [
    {
      type: "TEXT",
      name: "ASSETID",
      label: "Token",
    },
    {
      type: "TEXT",
      name: "AMOUNT",
      label: "Price",
    },
    {
      type: "TEXT",
      name: "NAME",
      label: "Name",
    },
  ];

  /*
  const interact = {
    Contractee: {},
    Admin: {
      getParams: () => ({
        admin: query.ADDR,
        token: parseInt(query.ASSETID),
        price: reach.parseCurrency(1),
        name: query.NAME,
      }),
    },
  };
  */

  const apis = {
    incr: {
      call: () => {},
      render: <span>incr</span>,
      visible: () => false,
    },
    destroy: {
      call: (v) => v()
        .then(() => appService.deleteApp(eventId))
        .then(() => {
          navigate('/event');
          window.location.reload();
        }),
      render: <span>destroy</span>,
      visible: ({ admin }) =>
        state.acc.networkAccount.addr === admin 
    },
  };

  const views = {
    token: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    count: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    name: (v) => somethingFromSome((v) => v, "")(v),
    price: (v) => somethingFromSome((v) => reach.formatCurrency(v), 0)(v),
    admin: (v) => somethingFromSome((v) => reach.formatAddress(v), 0)(v),
  };

  /*
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
  */

  const API = ({ id, ctc, view }) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Actions
        </Grid>
        {Object.entries(ctc.a).filter(([k,v]) => ['destroy'].includes(k)).map(([k, v]) => (
          apis[k].visible(view) && <Grid item>
            <Button onClick={() => apis[k].call(v)}>
              {apis[k].render || k}
            </Button>
          </Grid>
        ))}
      </Grid>
    );
  };

  const Header = ({ view }) => {
    const [query, setQuery] = useState({});
    const handleSubmit = async () => {
      if (!state.acc) return;
      setLoadingActivation(true);
      const ctc = state.acc.contract(backend, parseInt(eventId));
      Promise.all([
        ctc.p.Contractee({}),
        ctc.p.Admin({
          getParams: () => ({
            admin: query.ADDR,
            token: parseInt(query.ASSETID),
            price: reach.parseCurrency(query.AMOUNT),
            name: query.NAME,
          }),
          signal: () => {
            window.location.reload();
          },
        }),
      ]);
    };
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
    return (
      <>
        <h1 style={{ textAlign: "center" }}>{view.name}</h1>
        {view.name == "" && (
          <>
            <h2>Setup</h2>
            {inputs.map((el) => renderInput(el))}
            <button onClick={handleSubmit}>Submit</button>
          </>
        )}
      </>
    );
  };

  const getView = async (ctc) => {
    const token = views.token(await ctc.v.token());
    const count = views.count(await ctc.v.count());
    const name = views.name(await ctc.v.name());
    const price = views.price(await ctc.v.price());
    const admin = views.admin(await ctc.v.admin());
    console.log({ token, name, price, admin, count });
    return {
      token,
      name,
      price,
      admin,
      count,
    };
  };

  const View = ({ ctc }) => {
    const [state, setState] = useState(null);
    useEffect(() => {
      if (state) return;
      getView(ctc).then(setState);
    });
    return state ? (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Info
        </Grid>
        {Object.entries(state).map(([k, v]) => (
          <Grid item>
            <Item>
              {k}: {v}
            </Item>
          </Grid>
        ))}
      </Grid>
    ) : (
      "Loading view..."
    );
  };

  return (
    <>
      {!eventId && <button onClick={handleReload}>Reload</button>}
      <Container className="p-5">
        {false && (
          <>
            {" "}
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
        {!eventId && apps && (
          <Box sx={{ m: 5 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <>
                    Your event <br />
                    <hr />
                    Your ALGO <br />
                    <br />
                    {!loadingCreation ? (
                      <button onClick={handleCreateEvent}>Create Event</button>
                    ) : (
                      <button disabled>Loading...</button>
                    )}
                  </>
                </Item>
              </Grid>
              {apps.map(
                (el) =>
                  el.name && (
                    <Grid item xs={4}>
                      <Item
                        style={{
                          fontWeight: el.appId === app ? "bold" : "normal",
                        }}
                        onClick={() => setApp(el.appId)}
                      >
                        <>
                          {el.name}
                          <br />
                          <hr />
                          {el.price} ALGO <br />
                          <br />
                          <button
                            onClick={() => navigate(`/attend/${el.appId}`)}
                          >
                            RSVP
                          </button>
                          <button
                           onClick={() => navigate(`/event/${el.appId}`)}
                          >
                            INFO
                          </button>
                        </>
                      </Item>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
        )}
        {eventId && state.acc && (
          <>
            <ContractLoader acc={state.acc} stdlib={reach} appId={eventId}>
              <Header />
              <hr />
              <API />
              <hr />
              <View />
            </ContractLoader>
          </>
        )}
      </Container>
    </>
  );
}

export default App;
