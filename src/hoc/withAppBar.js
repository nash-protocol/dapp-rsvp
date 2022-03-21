import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useReach } from "../hooks/useReach";
import useCopy from "../hooks/useCopy";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import { formatCompactAddress, getAccountInfo } from "../functions";
import Icon from "react-crypto-icons";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useLocalStorage from "../hooks/useLocalStorage";

const { REACT_APP_BRAND_NAME } = process.env;
const brandNameEnv = REACT_APP_BRAND_NAME || "lite";

const ConnectButton = ({ onConnect, onDisconnect, addr, bal }) => {
  const copy = useCopy();
  const providerEnv = "TestNet";
  const handleProviderSelect = (providerEnv) => {
    localStorage.setItem("providerEnv", providerEnv);
    window.location.reload();
  };
  return (
    <>
      {!addr && (
        <ButtonGroup>
          <Dropdown as={ButtonGroup}>
            <Button
              style={{
                background: "inherit",
                borderColor: providerEnv === "MainNet" ? "magenta" : "green",
              }}
              onClick={onConnect}
            >
              Connect
            </Button>
            <Dropdown.Toggle
              style={{
                background: "inherit",
                borderColor: providerEnv === "MainNet" ? "magenta" : "green",
              }}
              split
              id="dropdown-basic"
            />
            <Dropdown.Menu>
              {false && (
                <Dropdown.Item
                  onClick={() => {
                    localStorage.setItem("walletFallback", "Mnemonic");
                    window.location.reload();
                  }}
                >
                  {localStorage.getItem("walletFallback") === "Mnemonic" && (
                    <CheckIcon />
                  )}
                  Mnemonic
                </Dropdown.Item>
              )}
              <Dropdown.Item
                onClick={() => {
                  localStorage.setItem("walletFallback", "MyAlgoConnect");
                  window.location.reload();
                }}
              >
                {localStorage.getItem("walletFallback") === "MyAlgoConnect" && (
                  <CheckIcon />
                )}
                My Algo Connect
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  localStorage.setItem("walletFallback", "WalletConnect");
                  window.location.reload();
                }}
              >
                {localStorage.getItem("walletFallback") === "WalletConnect" && (
                  <CheckIcon />
                )}
                Wallet Connect
              </Dropdown.Item>
              <Dropdown.Divider />
              {["MainNet", "TestNet"].map((el) => (
                <Dropdown.Item onClick={() => handleProviderSelect(el)}>
                  {providerEnv === el && <CheckIcon />}
                  {el}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      )}
      {addr && (
        <Dropdown as={ButtonGroup}>
          <Button
            style={{ fill: "white" }}
            variant="dark"
            onClick={() => copy(addr)}
          >
            {formatCompactAddress(addr)} |{" "}
            <Icon style={{ verticalAlign: "baseline" }} size={11} name="algo" />{" "}
            {bal}
          </Button>
          <Dropdown.Toggle variant="dark" split id="dropdown-basic" />
          <Dropdown.Menu>
            <Dropdown.Item onClick={onDisconnect}>Disconnect</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

const ButtonAppBar = (props) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="bg-dark" position="static">
        <Toolbar>
          {false && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span onClick={() => navigate("/")}><span>{String(brandNameEnv).toUpperCase()}</span></span>
          </Typography>
          <ConnectButton {...props} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export const withAppBar = (Component) => {
  return (props) => {
    const reach = useReach();
    const [addr, setAddr] = useLocalStorage("addr", null);
    const navigate = useNavigate();
    const initialState = {
      acc: null,
    };
    const [state, setState] = React.useState(initialState);
    React.useEffect(() => {
      if (addr) {
        handleConnect();
      }
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
    return (
      <>
        <ButtonAppBar
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
          addr={state.addr}
          bal={state.bal}
        />
        <Component {...props} acc={state.acc} />
      </>
    );
  };
};
