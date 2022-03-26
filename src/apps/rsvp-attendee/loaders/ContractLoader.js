import React, { useEffect, useState } from "react";
import { somethingFromSome } from "../../../functions.js";
import { useReach } from "../../../hooks/useReach.js";
import * as backend from "../build/index.main.mjs";
const ContractLoader = ({ acc, appId, children }) => {
  const reach = useReach();
  const views = {
    token: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    balance: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    name: (v) => somethingFromSome((v) => v, "")(v),
    price: (v) => somethingFromSome((v) => reach.formatCurrency(v), 0)(v),
    admin: (v) => somethingFromSome((v) => reach.formatAddress(v), "")(v),
    attendee: (v) => somethingFromSome((v) => reach.formatAddress(v), "")(v),
    attending: (v) => somethingFromSome((v) => (v ? "yes" : "no"), "no")(v),
    granted: (v) => somethingFromSome((v) => (v ? "yes" : "no"), "no")(v),
  };
  const getView = async (ctc) => {
    const ticket = views.token(await ctc.v.ticket());
    const balance = views.token(await ctc.v.balance());
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
      balance
    };
  };
  const [state, setState] = useState(null);
  useEffect(() => {
    const ctc = acc.contract(backend, parseInt(appId));
    getView(ctc).then((view) => {
      setState({
        ctc,
        view,
        appId,
      });
    });
  }, []);
  return state
    ? React.Children.map(children, (child, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...state,
            key: appId,
          });
        }
        return child;
      })
    : "Loading ...";
};
export default ContractLoader;
