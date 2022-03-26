import React, { useEffect, useState } from "react";
import { somethingFromSome } from "../../../functions.js";
import { useReach } from "../../../hooks/useReach.js";
import * as backend from '../build/index.main.mjs'
const ContractLoader = ({
  acc,
  appId,
  children,
}) => {
  const reach = useReach()
  const views = {
    token: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    count: (v) => somethingFromSome((v) => reach.bigNumberToNumber(v), 0)(v),
    name: (v) => somethingFromSome((v) => v, "")(v),
    price: (v) => somethingFromSome((v) => reach.formatCurrency(v), 0)(v),
    admin: (v) => somethingFromSome((v) => reach.formatAddress(v), 0)(v),
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
  const [state, setState] = useState(null);
  useEffect(() => {
    let ctc = acc.contract(backend, parseInt(appId));
    console.log(ctc)
    getView(ctc)
      .then(view => 
    setState({
      view,
      ctc,
      appId,
    }))
  }, [appId]);
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
    : "Loading...";
};
export default ContractLoader;
