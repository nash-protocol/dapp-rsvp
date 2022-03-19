import React, { useEffect, useState } from "react";
import * as backend from "./build/index.main.mjs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { getAccountInfo } from "./functions";
import appService from "./services/appService";
import { useReach } from "./hooks/useReach";
import useLocalStorage from "./hooks/useLocalStorage";
import { Spinner } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./App.css";

function App() {
  const reach = useReach();
  const [addr, setAddr] = useLocalStorage("addr", null);
  const initialState = {
    acc: null,
  };
  const [state, setState] = useState(initialState);
  const [loadingCreation, setLoadingCreation] = useState(false);
  const [loadingActivation, setLoadingActivation] = useState(false);
  const [apps, setApps] = useState(null);
  const [app, setApp] = useState(null);

  useEffect(() => {
    if (addr) {
      handleConnect();
    }
  }, []);

  useEffect(() => {
    if (apps) return;
    appService
      .getApps({ planId: appService.APP_PLAN_LITE, deleted: false })
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
    const { info } = await appService.createApp(appService.APP_PLAN_LITE);
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
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container className="p-5">
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
        {apps && (
          <Box sx={{ m: 5 }}>
            <Grid container spacing={2}>
              {apps.map((el) => (
                <Grid item xs={4}>
                  <Item
                    style={{ fontWeight: el.appId === app ? "bold" : "normal" }}
                    onClick={() => setApp(el.appId)}
                  >
                    {el.appId}
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
}

export default App;
