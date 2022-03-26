// Automatically generated with Reach 0.1.9 (78dbf873)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (78dbf873)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Tuple([ctc0, ctc0, ctc1]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc6 = stdlib.T_Address;
  
  return {
    infos: {
      admin: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1377, v1378, v1387, v1388, v1391] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v1377, v1378, v1426] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = svs;
            return (await ((async () => {
              
              
              return v1437;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      attendee: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1377, v1378, v1387, v1388, v1391] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v1377, v1378, v1426] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = svs;
            return (await ((async () => {
              
              
              return v1436;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        },
      attending: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1377, v1378, v1387, v1388, v1391] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v1377, v1378, v1426] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = svs;
            return (await ((async () => {
              
              
              return v1463;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      balance: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1377, v1378, v1387, v1388, v1391] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v1377, v1378, v1426] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = svs;
            return (await ((async () => {
              
              
              return v1464;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      granted: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1377, v1378, v1387, v1388, v1391] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v1377, v1378, v1426] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = svs;
            return (await ((async () => {
              
              
              return v1462;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        },
      ticket: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v1377, v1378, v1387, v1388, v1391] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v1377, v1378, v1426] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6))) {
            const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = svs;
            return (await ((async () => {
              
              
              return v1438;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        }
      },
    views: {
      1: [ctc3, ctc5, ctc6, ctc0, ctc6],
      2: [ctc3, ctc5, ctc0],
      6: [ctc6, ctc6, ctc4, ctc5, ctc1, ctc1, ctc0, ctc3, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Attendee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attendee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attendee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    Contractee0_41: ctc1,
    Verifier0_41: ctc1
    });
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    admin: ctc0,
    ctcEvent: ctc3,
    price: ctc1,
    token: ctc4
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    check0_164: ctc8,
    destroy0_164: ctc8,
    grant0_164: ctc8,
    peerCheck0_164: ctc8,
    touch0_164: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc13 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v1376 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1377 = [v1376];
  const v1378 = [stdlib.Token_zero];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1387, v1388], secs: v1390, time: v1389, didSend: v37, from: v1386 } = txn1;
  ;
  const v1391 = v1387;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1409], secs: v1411, time: v1410, didSend: v100, from: v1408 } = txn2;
  switch (v1409[0]) {
    case 'Contractee0_41': {
      const v1412 = v1409[1];
      ;
      v1408;
      const v1422 = stdlib.eq(v1412, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v1422, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Attendee'
        });
      const v1426 = stdlib.sub(v1388, v1388);
      ;
      const v1431 = stdlib.protect(ctc5, await interact.getParams(), {
        at: './interface.rsh:46:76:application',
        fs: ['at ./interface.rsh:45:16:application call to [unknown function] (defined at: ./interface.rsh:45:20:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: 'getParams',
        who: 'Attendee'
        });
      const v1432 = v1431.admin;
      const v1433 = v1431.token;
      const v1434 = v1431.ctcEvent;
      const v1435 = v1431.price;
      
      const txn3 = await (ctc.sendrecv({
        args: [v1377, v1378, v1426, v1432, v1433, v1434, v1435],
        evt_cnt: 4,
        funcNum: 2,
        lct: v1410,
        onlyIf: true,
        out_tys: [ctc0, ctc4, ctc3, ctc1],
        pay: [v1435, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1437, v1438, v1439, v1440], secs: v1442, time: v1441, didSend: v133, from: v1436 } = txn3;
          
          const v1443 = v1377[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0)];
          const v1445 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 1)];
          const v1446 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 2)];
          const v1447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1445, v1446];
          const v1448 = stdlib.Array_set(v1377, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1447);
          const v1449 = stdlib.Array_set(v1378, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1438);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'init',
            tok: v1438
            });
          const v1451 = stdlib.add(v1426, v1440);
          sim_r.txns.push({
            amt: v1440,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          
          const v1455 = [stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0), [], (sim_r.txns.push({
            bills: stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0),
            kind: 'remote',
            obj: v1439,
            pays: stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0),
            toks: []
            })), undefined];
          const v1456 = await txn3.getOutput('internal', 'v1455', ctc7, v1455);
          const v1457 = v1456[stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0)];
          const v1460 = stdlib.add(v1451, v1457);
          const v1461 = stdlib.eq(stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0), v1457);
          ;
          const v1462 = false;
          const v1463 = false;
          const v1464 = stdlib.checkedBigNumberify('./interface.rsh:60:91:decimal', stdlib.UInt_max, 0);
          const v1465 = true;
          const v1466 = v1441;
          const v1472 = v1448;
          const v1473 = v1460;
          
          if (await (async () => {
            
            return v1465;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v2418 = v1472[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
            const v2419 = v2418[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
            const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
            if (v2420) {
              const v2422 = stdlib.sub(v1473, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
              sim_r.txns.push({
                amt: v2422,
                kind: 'from',
                to: v1436,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./interface.rsh:123:14:decimal', stdlib.UInt_max, 100000),
                kind: 'from',
                to: v1437,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v2419,
                kind: 'from',
                to: v1437,
                tok: v1438
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v1438
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                amt: v1473,
                kind: 'from',
                to: v1436,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                amt: v2419,
                kind: 'from',
                to: v1437,
                tok: v1438
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v1438
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc12, ctc13, ctc1, ctc0, ctc4, ctc3, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v1437, v1438, v1439, v1440], secs: v1442, time: v1441, didSend: v133, from: v1436 } = txn3;
      const v1443 = v1377[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0)];
      const v1445 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 1)];
      const v1446 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 2)];
      const v1447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1445, v1446];
      const v1448 = stdlib.Array_set(v1377, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1447);
      const v1449 = stdlib.Array_set(v1378, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1438);
      ;
      const v1451 = stdlib.add(v1426, v1440);
      ;
      stdlib.protect(ctc6, await interact.signal(), {
        at: './interface.rsh:49:27:application',
        fs: ['at ./interface.rsh:49:27:application call to [unknown function] (defined at: ./interface.rsh:49:27:function exp)', 'at ./interface.rsh:49:27:application call to "liftedInteract" (defined at: ./interface.rsh:49:27:application)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: 'signal',
        who: 'Attendee'
        });
      
      const v1455 = undefined /* Remote */;
      const v1456 = await txn3.getOutput('internal', 'v1455', ctc7, v1455);
      const v1457 = v1456[stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0)];
      const v1460 = stdlib.add(v1451, v1457);
      const v1461 = stdlib.eq(stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0), v1457);
      stdlib.assert(v1461, {
        at: './interface.rsh:53:9:application',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: 'remote bill check',
        who: 'Attendee'
        });
      let v1462 = false;
      let v1463 = false;
      let v1464 = stdlib.checkedBigNumberify('./interface.rsh:60:91:decimal', stdlib.UInt_max, 0);
      let v1465 = true;
      let v1466 = v1441;
      let v1472 = v1448;
      let v1473 = v1460;
      
      while (await (async () => {
        
        return v1465;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc9],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn4;
        switch (v1570[0]) {
          case 'check0_164': {
            const v1573 = v1570[1];
            undefined /* setApiDetails */;
            ;
            const v3550 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3556 = stdlib.tokenEq(v3550, v1438);
            const v3559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3561 = v3556 ? v3560 : v3559;
            const v1631 = v3561[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1633 = v1472[v1631];
            const v1634 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1635 = stdlib.add(v1634, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v1653 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1654 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1655 = [v1635, v1653, v1654];
            const v1656 = stdlib.Array_set(v1472, v1631, v1655);
            ;
            const v1658 = stdlib.addressEq(v1569, v1437);
            const v1659 = v1463 ? false : true;
            const v1660 = v1658 ? v1659 : false;
            stdlib.assert(v1660, {
              at: './interface.rsh:73:16:application',
              fs: ['at ./interface.rsh:72:11:application call to [unknown function] (defined at: ./interface.rsh:72:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Attendee'
              });
            const v1661 = null;
            await txn4.getOutput('check', 'v1661', ctc6, v1661);
            const cv1462 = v1462;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:75:45:decimal', stdlib.UInt_max, 1);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1656;
            const cv1473 = v1473;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'destroy0_164': {
            const v1742 = v1570[1];
            undefined /* setApiDetails */;
            const v1786 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3574 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3580 = stdlib.tokenEq(v3574, v1438);
            const v3583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3585 = v3580 ? v3584 : v3583;
            const v1800 = v3585[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1802 = v1472[v1800];
            const v1803 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1822 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1823 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1824 = [v1803, v1822, v1823];
            const v1825 = stdlib.Array_set(v1472, v1800, v1824);
            ;
            const v1838 = stdlib.addressEq(v1569, v1436);
            stdlib.assert(v1838, {
              at: './interface.rsh:115:16:application',
              fs: ['at ./interface.rsh:114:11:application call to [unknown function] (defined at: ./interface.rsh:114:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Attendee'
              });
            const v1839 = null;
            await txn4.getOutput('destroy', 'v1839', ctc6, v1839);
            const cv1462 = v1462;
            const cv1463 = v1463;
            const cv1464 = v1464;
            const cv1465 = false;
            const cv1466 = v1571;
            const cv1472 = v1825;
            const cv1473 = v1786;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'grant0_164': {
            const v1911 = v1570[1];
            undefined /* setApiDetails */;
            const v1955 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3598 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3604 = stdlib.tokenEq(v3598, v1438);
            const v3607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3609 = v3604 ? v3608 : v3607;
            const v1969 = v3609[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1971 = v1472[v1969];
            const v1972 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1991 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1992 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1993 = [v1972, v1991, v1992];
            const v1994 = stdlib.Array_set(v1472, v1969, v1993);
            ;
            const v2016 = stdlib.addressEq(v1569, v1436);
            const v2017 = v1994[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2018 = v2017[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2019 = stdlib.eq(v2018, stdlib.checkedBigNumberify('./interface.rsh:94:55:decimal', stdlib.UInt_max, 0));
            const v2020 = v2016 ? v2019 : false;
            const v2021 = v1463 ? false : true;
            const v2022 = v2020 ? v2021 : false;
            stdlib.assert(v2022, {
              at: './interface.rsh:94:16:application',
              fs: ['at ./interface.rsh:93:11:application call to [unknown function] (defined at: ./interface.rsh:93:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Attendee'
              });
            const v2023 = null;
            await txn4.getOutput('grant', 'v2023', ctc6, v2023);
            const cv1462 = true;
            const cv1463 = false;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:96:36:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1994;
            const cv1473 = v1955;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'peerCheck0_164': {
            const v2080 = v1570[1];
            undefined /* setApiDetails */;
            const v2124 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3622 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3628 = stdlib.tokenEq(v3622, v1438);
            const v3631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3633 = v3628 ? v3632 : v3631;
            const v2138 = v3633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2140 = v1472[v2138];
            const v2141 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2142 = stdlib.add(v2141, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v2160 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2161 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2162 = [v2142, v2160, v2161];
            const v2163 = stdlib.Array_set(v1472, v2138, v2162);
            ;
            stdlib.assert(v1462, {
              at: './interface.rsh:83:16:application',
              fs: ['at ./interface.rsh:82:11:application call to [unknown function] (defined at: ./interface.rsh:82:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Attendee'
              });
            const v2201 = v2163[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2202 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2208 = stdlib.sub(v2202, v2202);
            const v2211 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 1)];
            const v2212 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 2)];
            const v2213 = [v2208, v2211, v2212];
            const v2214 = stdlib.Array_set(v2163, stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 0), v2213);
            ;
            const v2215 = null;
            await txn4.getOutput('peerCheck', 'v2215', ctc6, v2215);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:86:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2214;
            const cv1473 = v2124;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'touch0_164': {
            const v2249 = v1570[1];
            undefined /* setApiDetails */;
            const v2293 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3646 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3652 = stdlib.tokenEq(v3646, v1438);
            const v3655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3657 = v3652 ? v3656 : v3655;
            const v2307 = v3657[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2309 = v1472[v2307];
            const v2310 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2329 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2330 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2331 = [v2310, v2329, v2330];
            const v2332 = stdlib.Array_set(v1472, v2307, v2331);
            ;
            const v2392 = stdlib.addressEq(v1569, v1436);
            const v2393 = v2332[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2394 = v2393[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2395 = stdlib.gt(v2394, stdlib.checkedBigNumberify('./interface.rsh:104:54:decimal', stdlib.UInt_max, 0));
            const v2396 = v2392 ? v2395 : false;
            const v2398 = v2396 ? v1463 : false;
            stdlib.assert(v2398, {
              at: './interface.rsh:104:16:application',
              fs: ['at ./interface.rsh:103:11:application call to [unknown function] (defined at: ./interface.rsh:103:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Attendee'
              });
            const v2404 = stdlib.sub(v2394, stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1));
            const v2407 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 1)];
            const v2408 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 2)];
            const v2409 = [v2404, v2407, v2408];
            const v2410 = stdlib.Array_set(v2332, stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 0), v2409);
            ;
            const v2411 = null;
            await txn4.getOutput('touch', 'v2411', ctc6, v2411);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:107:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2410;
            const cv1473 = v2293;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          }
        
        }
      const v2418 = v1472[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2419 = v2418[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
      if (v2420) {
        const v2422 = stdlib.sub(v1473, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
        ;
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      break;
      }
    case 'Verifier0_41': {
      const v2481 = v1409[1];
      ;
      const v3544 = stdlib.addressEq(v1408, v1391);
      stdlib.assert(v3544, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Attendee'
        });
      const v3545 = stdlib.eq(v2481, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v3546 = stdlib.addressEq(v1408, v1387);
      const v3547 = v3545 ? v3546 : false;
      stdlib.assert(v3547, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Attendee'
        });
      return;
      
      break;
      }
    }
  
  
  
  };
export async function Constructor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Constructor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Constructor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    addr: ctc0,
    amt: ctc1
    });
  const ctc3 = stdlib.T_Data({
    Contractee0_41: ctc1,
    Verifier0_41: ctc1
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    check0_164: ctc8,
    destroy0_164: ctc8,
    grant0_164: ctc8,
    peerCheck0_164: ctc8,
    touch0_164: ctc8
    });
  
  
  const v1376 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1377 = [v1376];
  const v1378 = [stdlib.Token_zero];
  const v1383 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:28:56:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:27:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:27:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:76:34:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:26:50:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v1384 = v1383.addr;
  const v1385 = v1383.amt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1384, v1385],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:31:15:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:31:15:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1387, v1388], secs: v1390, time: v1389, didSend: v37, from: v1386 } = txn1;
      
      ;
      const v1391 = v1387;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1387, v1388], secs: v1390, time: v1389, didSend: v37, from: v1386 } = txn1;
  ;
  const v1391 = v1387;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1409], secs: v1411, time: v1410, didSend: v100, from: v1408 } = txn2;
  switch (v1409[0]) {
    case 'Contractee0_41': {
      const v1412 = v1409[1];
      ;
      v1408;
      const v1422 = stdlib.eq(v1412, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v1422, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      const v1426 = stdlib.sub(v1388, v1388);
      ;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 4,
        funcNum: 2,
        out_tys: [ctc0, ctc4, ctc5, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1437, v1438, v1439, v1440], secs: v1442, time: v1441, didSend: v133, from: v1436 } = txn3;
      const v1443 = v1377[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0)];
      const v1445 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 1)];
      const v1446 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 2)];
      const v1447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1445, v1446];
      const v1448 = stdlib.Array_set(v1377, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1447);
      const v1449 = stdlib.Array_set(v1378, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1438);
      ;
      const v1451 = stdlib.add(v1426, v1440);
      ;
      const v1455 = undefined /* Remote */;
      const v1456 = await txn3.getOutput('internal', 'v1455', ctc7, v1455);
      const v1457 = v1456[stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0)];
      const v1460 = stdlib.add(v1451, v1457);
      const v1461 = stdlib.eq(stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0), v1457);
      stdlib.assert(v1461, {
        at: './interface.rsh:53:9:application',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: 'remote bill check',
        who: 'Constructor'
        });
      let v1462 = false;
      let v1463 = false;
      let v1464 = stdlib.checkedBigNumberify('./interface.rsh:60:91:decimal', stdlib.UInt_max, 0);
      let v1465 = true;
      let v1466 = v1441;
      let v1472 = v1448;
      let v1473 = v1460;
      
      while (await (async () => {
        
        return v1465;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc9],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn4;
        switch (v1570[0]) {
          case 'check0_164': {
            const v1573 = v1570[1];
            undefined /* setApiDetails */;
            ;
            const v3550 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3556 = stdlib.tokenEq(v3550, v1438);
            const v3559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3561 = v3556 ? v3560 : v3559;
            const v1631 = v3561[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1633 = v1472[v1631];
            const v1634 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1635 = stdlib.add(v1634, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v1653 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1654 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1655 = [v1635, v1653, v1654];
            const v1656 = stdlib.Array_set(v1472, v1631, v1655);
            ;
            const v1658 = stdlib.addressEq(v1569, v1437);
            const v1659 = v1463 ? false : true;
            const v1660 = v1658 ? v1659 : false;
            stdlib.assert(v1660, {
              at: './interface.rsh:73:16:application',
              fs: ['at ./interface.rsh:72:11:application call to [unknown function] (defined at: ./interface.rsh:72:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Constructor'
              });
            const v1661 = null;
            await txn4.getOutput('check', 'v1661', ctc6, v1661);
            const cv1462 = v1462;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:75:45:decimal', stdlib.UInt_max, 1);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1656;
            const cv1473 = v1473;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'destroy0_164': {
            const v1742 = v1570[1];
            undefined /* setApiDetails */;
            const v1786 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3574 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3580 = stdlib.tokenEq(v3574, v1438);
            const v3583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3585 = v3580 ? v3584 : v3583;
            const v1800 = v3585[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1802 = v1472[v1800];
            const v1803 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1822 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1823 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1824 = [v1803, v1822, v1823];
            const v1825 = stdlib.Array_set(v1472, v1800, v1824);
            ;
            const v1838 = stdlib.addressEq(v1569, v1436);
            stdlib.assert(v1838, {
              at: './interface.rsh:115:16:application',
              fs: ['at ./interface.rsh:114:11:application call to [unknown function] (defined at: ./interface.rsh:114:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Constructor'
              });
            const v1839 = null;
            await txn4.getOutput('destroy', 'v1839', ctc6, v1839);
            const cv1462 = v1462;
            const cv1463 = v1463;
            const cv1464 = v1464;
            const cv1465 = false;
            const cv1466 = v1571;
            const cv1472 = v1825;
            const cv1473 = v1786;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'grant0_164': {
            const v1911 = v1570[1];
            undefined /* setApiDetails */;
            const v1955 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3598 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3604 = stdlib.tokenEq(v3598, v1438);
            const v3607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3609 = v3604 ? v3608 : v3607;
            const v1969 = v3609[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1971 = v1472[v1969];
            const v1972 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1991 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1992 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1993 = [v1972, v1991, v1992];
            const v1994 = stdlib.Array_set(v1472, v1969, v1993);
            ;
            const v2016 = stdlib.addressEq(v1569, v1436);
            const v2017 = v1994[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2018 = v2017[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2019 = stdlib.eq(v2018, stdlib.checkedBigNumberify('./interface.rsh:94:55:decimal', stdlib.UInt_max, 0));
            const v2020 = v2016 ? v2019 : false;
            const v2021 = v1463 ? false : true;
            const v2022 = v2020 ? v2021 : false;
            stdlib.assert(v2022, {
              at: './interface.rsh:94:16:application',
              fs: ['at ./interface.rsh:93:11:application call to [unknown function] (defined at: ./interface.rsh:93:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Constructor'
              });
            const v2023 = null;
            await txn4.getOutput('grant', 'v2023', ctc6, v2023);
            const cv1462 = true;
            const cv1463 = false;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:96:36:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1994;
            const cv1473 = v1955;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'peerCheck0_164': {
            const v2080 = v1570[1];
            undefined /* setApiDetails */;
            const v2124 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3622 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3628 = stdlib.tokenEq(v3622, v1438);
            const v3631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3633 = v3628 ? v3632 : v3631;
            const v2138 = v3633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2140 = v1472[v2138];
            const v2141 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2142 = stdlib.add(v2141, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v2160 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2161 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2162 = [v2142, v2160, v2161];
            const v2163 = stdlib.Array_set(v1472, v2138, v2162);
            ;
            stdlib.assert(v1462, {
              at: './interface.rsh:83:16:application',
              fs: ['at ./interface.rsh:82:11:application call to [unknown function] (defined at: ./interface.rsh:82:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Constructor'
              });
            const v2201 = v2163[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2202 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2208 = stdlib.sub(v2202, v2202);
            const v2211 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 1)];
            const v2212 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 2)];
            const v2213 = [v2208, v2211, v2212];
            const v2214 = stdlib.Array_set(v2163, stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 0), v2213);
            ;
            const v2215 = null;
            await txn4.getOutput('peerCheck', 'v2215', ctc6, v2215);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:86:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2214;
            const cv1473 = v2124;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'touch0_164': {
            const v2249 = v1570[1];
            undefined /* setApiDetails */;
            const v2293 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3646 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3652 = stdlib.tokenEq(v3646, v1438);
            const v3655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3657 = v3652 ? v3656 : v3655;
            const v2307 = v3657[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2309 = v1472[v2307];
            const v2310 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2329 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2330 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2331 = [v2310, v2329, v2330];
            const v2332 = stdlib.Array_set(v1472, v2307, v2331);
            ;
            const v2392 = stdlib.addressEq(v1569, v1436);
            const v2393 = v2332[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2394 = v2393[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2395 = stdlib.gt(v2394, stdlib.checkedBigNumberify('./interface.rsh:104:54:decimal', stdlib.UInt_max, 0));
            const v2396 = v2392 ? v2395 : false;
            const v2398 = v2396 ? v1463 : false;
            stdlib.assert(v2398, {
              at: './interface.rsh:104:16:application',
              fs: ['at ./interface.rsh:103:11:application call to [unknown function] (defined at: ./interface.rsh:103:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Constructor'
              });
            const v2404 = stdlib.sub(v2394, stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1));
            const v2407 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 1)];
            const v2408 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 2)];
            const v2409 = [v2404, v2407, v2408];
            const v2410 = stdlib.Array_set(v2332, stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 0), v2409);
            ;
            const v2411 = null;
            await txn4.getOutput('touch', 'v2411', ctc6, v2411);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:107:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2410;
            const cv1473 = v2293;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          }
        
        }
      const v2418 = v1472[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2419 = v2418[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
      if (v2420) {
        const v2422 = stdlib.sub(v1473, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
        ;
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      break;
      }
    case 'Verifier0_41': {
      const v2481 = v1409[1];
      ;
      const v3544 = stdlib.addressEq(v1408, v1391);
      stdlib.assert(v3544, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      const v3545 = stdlib.eq(v2481, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v3546 = stdlib.addressEq(v1408, v1387);
      const v3547 = v3545 ? v3546 : false;
      stdlib.assert(v3547, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      return;
      
      break;
      }
    }
  
  
  
  };
export async function Contractee(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Contractee expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Contractee expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    Contractee0_41: ctc1,
    Verifier0_41: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc12 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v1376 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1377 = [v1376];
  const v1378 = [stdlib.Token_zero];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1387, v1388], secs: v1390, time: v1389, didSend: v37, from: v1386 } = txn1;
  ;
  const v1391 = v1387;
  const v1404 = ['Contractee0_41', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  
  const txn2 = await (ctc.sendrecv({
    args: [v1377, v1378, v1387, v1388, v1391, v1404],
    evt_cnt: 1,
    funcNum: 1,
    lct: v1389,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v1388, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1409], secs: v1411, time: v1410, didSend: v100, from: v1408 } = txn2;
      
      switch (v1409[0]) {
        case 'Contractee0_41': {
          const v1412 = v1409[1];
          sim_r.txns.push({
            amt: v1388,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ctc.iam(v1408);
          const v1422 = stdlib.eq(v1412, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
          ;
          const v1426 = stdlib.sub(v1388, v1388);
          sim_r.txns.push({
            amt: v1388,
            kind: 'from',
            to: v1387,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Verifier0_41': {
          const v2481 = v1409[1];
          ;
          const v3544 = stdlib.addressEq(v1408, v1391);
          ;
          const v3545 = stdlib.eq(v2481, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
          const v3546 = stdlib.addressEq(v1408, v1387);
          const v3547 = v3545 ? v3546 : false;
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1409], secs: v1411, time: v1410, didSend: v100, from: v1408 } = txn2;
  switch (v1409[0]) {
    case 'Contractee0_41': {
      const v1412 = v1409[1];
      ;
      ctc.iam(v1408);
      const v1422 = stdlib.eq(v1412, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v1422, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      const v1426 = stdlib.sub(v1388, v1388);
      ;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 4,
        funcNum: 2,
        out_tys: [ctc0, ctc3, ctc4, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1437, v1438, v1439, v1440], secs: v1442, time: v1441, didSend: v133, from: v1436 } = txn3;
      const v1443 = v1377[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0)];
      const v1445 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 1)];
      const v1446 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 2)];
      const v1447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1445, v1446];
      const v1448 = stdlib.Array_set(v1377, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1447);
      const v1449 = stdlib.Array_set(v1378, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1438);
      ;
      const v1451 = stdlib.add(v1426, v1440);
      ;
      const v1455 = undefined /* Remote */;
      const v1456 = await txn3.getOutput('internal', 'v1455', ctc6, v1455);
      const v1457 = v1456[stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0)];
      const v1460 = stdlib.add(v1451, v1457);
      const v1461 = stdlib.eq(stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0), v1457);
      stdlib.assert(v1461, {
        at: './interface.rsh:53:9:application',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: 'remote bill check',
        who: 'Contractee'
        });
      let v1462 = false;
      let v1463 = false;
      let v1464 = stdlib.checkedBigNumberify('./interface.rsh:60:91:decimal', stdlib.UInt_max, 0);
      let v1465 = true;
      let v1466 = v1441;
      let v1472 = v1448;
      let v1473 = v1460;
      
      while (await (async () => {
        
        return v1465;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc8],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn4;
        switch (v1570[0]) {
          case 'check0_164': {
            const v1573 = v1570[1];
            undefined /* setApiDetails */;
            ;
            const v3550 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3556 = stdlib.tokenEq(v3550, v1438);
            const v3559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3561 = v3556 ? v3560 : v3559;
            const v1631 = v3561[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1633 = v1472[v1631];
            const v1634 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1635 = stdlib.add(v1634, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v1653 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1654 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1655 = [v1635, v1653, v1654];
            const v1656 = stdlib.Array_set(v1472, v1631, v1655);
            ;
            const v1658 = stdlib.addressEq(v1569, v1437);
            const v1659 = v1463 ? false : true;
            const v1660 = v1658 ? v1659 : false;
            stdlib.assert(v1660, {
              at: './interface.rsh:73:16:application',
              fs: ['at ./interface.rsh:72:11:application call to [unknown function] (defined at: ./interface.rsh:72:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Contractee'
              });
            const v1661 = null;
            await txn4.getOutput('check', 'v1661', ctc5, v1661);
            const cv1462 = v1462;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:75:45:decimal', stdlib.UInt_max, 1);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1656;
            const cv1473 = v1473;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'destroy0_164': {
            const v1742 = v1570[1];
            undefined /* setApiDetails */;
            const v1786 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3574 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3580 = stdlib.tokenEq(v3574, v1438);
            const v3583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3585 = v3580 ? v3584 : v3583;
            const v1800 = v3585[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1802 = v1472[v1800];
            const v1803 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1822 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1823 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1824 = [v1803, v1822, v1823];
            const v1825 = stdlib.Array_set(v1472, v1800, v1824);
            ;
            const v1838 = stdlib.addressEq(v1569, v1436);
            stdlib.assert(v1838, {
              at: './interface.rsh:115:16:application',
              fs: ['at ./interface.rsh:114:11:application call to [unknown function] (defined at: ./interface.rsh:114:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Contractee'
              });
            const v1839 = null;
            await txn4.getOutput('destroy', 'v1839', ctc5, v1839);
            const cv1462 = v1462;
            const cv1463 = v1463;
            const cv1464 = v1464;
            const cv1465 = false;
            const cv1466 = v1571;
            const cv1472 = v1825;
            const cv1473 = v1786;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'grant0_164': {
            const v1911 = v1570[1];
            undefined /* setApiDetails */;
            const v1955 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3598 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3604 = stdlib.tokenEq(v3598, v1438);
            const v3607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3609 = v3604 ? v3608 : v3607;
            const v1969 = v3609[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1971 = v1472[v1969];
            const v1972 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1991 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1992 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1993 = [v1972, v1991, v1992];
            const v1994 = stdlib.Array_set(v1472, v1969, v1993);
            ;
            const v2016 = stdlib.addressEq(v1569, v1436);
            const v2017 = v1994[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2018 = v2017[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2019 = stdlib.eq(v2018, stdlib.checkedBigNumberify('./interface.rsh:94:55:decimal', stdlib.UInt_max, 0));
            const v2020 = v2016 ? v2019 : false;
            const v2021 = v1463 ? false : true;
            const v2022 = v2020 ? v2021 : false;
            stdlib.assert(v2022, {
              at: './interface.rsh:94:16:application',
              fs: ['at ./interface.rsh:93:11:application call to [unknown function] (defined at: ./interface.rsh:93:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Contractee'
              });
            const v2023 = null;
            await txn4.getOutput('grant', 'v2023', ctc5, v2023);
            const cv1462 = true;
            const cv1463 = false;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:96:36:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1994;
            const cv1473 = v1955;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'peerCheck0_164': {
            const v2080 = v1570[1];
            undefined /* setApiDetails */;
            const v2124 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3622 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3628 = stdlib.tokenEq(v3622, v1438);
            const v3631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3633 = v3628 ? v3632 : v3631;
            const v2138 = v3633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2140 = v1472[v2138];
            const v2141 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2142 = stdlib.add(v2141, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v2160 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2161 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2162 = [v2142, v2160, v2161];
            const v2163 = stdlib.Array_set(v1472, v2138, v2162);
            ;
            stdlib.assert(v1462, {
              at: './interface.rsh:83:16:application',
              fs: ['at ./interface.rsh:82:11:application call to [unknown function] (defined at: ./interface.rsh:82:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Contractee'
              });
            const v2201 = v2163[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2202 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2208 = stdlib.sub(v2202, v2202);
            const v2211 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 1)];
            const v2212 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 2)];
            const v2213 = [v2208, v2211, v2212];
            const v2214 = stdlib.Array_set(v2163, stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 0), v2213);
            ;
            const v2215 = null;
            await txn4.getOutput('peerCheck', 'v2215', ctc5, v2215);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:86:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2214;
            const cv1473 = v2124;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'touch0_164': {
            const v2249 = v1570[1];
            undefined /* setApiDetails */;
            const v2293 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3646 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3652 = stdlib.tokenEq(v3646, v1438);
            const v3655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3657 = v3652 ? v3656 : v3655;
            const v2307 = v3657[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2309 = v1472[v2307];
            const v2310 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2329 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2330 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2331 = [v2310, v2329, v2330];
            const v2332 = stdlib.Array_set(v1472, v2307, v2331);
            ;
            const v2392 = stdlib.addressEq(v1569, v1436);
            const v2393 = v2332[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2394 = v2393[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2395 = stdlib.gt(v2394, stdlib.checkedBigNumberify('./interface.rsh:104:54:decimal', stdlib.UInt_max, 0));
            const v2396 = v2392 ? v2395 : false;
            const v2398 = v2396 ? v1463 : false;
            stdlib.assert(v2398, {
              at: './interface.rsh:104:16:application',
              fs: ['at ./interface.rsh:103:11:application call to [unknown function] (defined at: ./interface.rsh:103:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Contractee'
              });
            const v2404 = stdlib.sub(v2394, stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1));
            const v2407 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 1)];
            const v2408 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 2)];
            const v2409 = [v2404, v2407, v2408];
            const v2410 = stdlib.Array_set(v2332, stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 0), v2409);
            ;
            const v2411 = null;
            await txn4.getOutput('touch', 'v2411', ctc5, v2411);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:107:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2410;
            const cv1473 = v2293;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          }
        
        }
      const v2418 = v1472[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2419 = v2418[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
      if (v2420) {
        const v2422 = stdlib.sub(v1473, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
        ;
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      break;
      }
    case 'Verifier0_41': {
      const v2481 = v1409[1];
      ;
      const v3544 = stdlib.addressEq(v1408, v1391);
      stdlib.assert(v3544, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      const v3545 = stdlib.eq(v2481, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v3546 = stdlib.addressEq(v1408, v1387);
      const v3547 = v3545 ? v3546 : false;
      stdlib.assert(v3547, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      return;
      
      break;
      }
    }
  
  
  
  };
export async function Verifier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Verifier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Verifier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    Contractee0_41: ctc1,
    Verifier0_41: ctc1
    });
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc5]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc12 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v1376 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v1377 = [v1376];
  const v1378 = [stdlib.Token_zero];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1387, v1388], secs: v1390, time: v1389, didSend: v37, from: v1386 } = txn1;
  ;
  const v1391 = ctc.iam(v1387);
  const v1398 = ['Verifier0_41', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  
  const txn2 = await (ctc.sendrecv({
    args: [v1377, v1378, v1387, v1388, v1391, v1398],
    evt_cnt: 1,
    funcNum: 1,
    lct: v1389,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:48:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1409], secs: v1411, time: v1410, didSend: v100, from: v1408 } = txn2;
      
      switch (v1409[0]) {
        case 'Contractee0_41': {
          const v1412 = v1409[1];
          sim_r.txns.push({
            amt: v1388,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          v1408;
          const v1422 = stdlib.eq(v1412, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
          ;
          const v1426 = stdlib.sub(v1388, v1388);
          sim_r.txns.push({
            amt: v1388,
            kind: 'from',
            to: v1387,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Verifier0_41': {
          const v2481 = v1409[1];
          ;
          const v3544 = stdlib.addressEq(v1408, v1391);
          ;
          const v3545 = stdlib.eq(v2481, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
          const v3546 = stdlib.addressEq(v1408, v1387);
          const v3547 = v3545 ? v3546 : false;
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc12, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v1409], secs: v1411, time: v1410, didSend: v100, from: v1408 } = txn2;
  switch (v1409[0]) {
    case 'Contractee0_41': {
      const v1412 = v1409[1];
      ;
      v1408;
      const v1422 = stdlib.eq(v1412, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v1422, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      const v1426 = stdlib.sub(v1388, v1388);
      ;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 4,
        funcNum: 2,
        out_tys: [ctc0, ctc3, ctc4, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1437, v1438, v1439, v1440], secs: v1442, time: v1441, didSend: v133, from: v1436 } = txn3;
      const v1443 = v1377[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0)];
      const v1445 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 1)];
      const v1446 = v1443[stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 2)];
      const v1447 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v1445, v1446];
      const v1448 = stdlib.Array_set(v1377, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1447);
      const v1449 = stdlib.Array_set(v1378, stdlib.checkedBigNumberify('./interface.rsh:48:12:dot', stdlib.UInt_max, 0), v1438);
      ;
      const v1451 = stdlib.add(v1426, v1440);
      ;
      const v1455 = undefined /* Remote */;
      const v1456 = await txn3.getOutput('internal', 'v1455', ctc6, v1455);
      const v1457 = v1456[stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0)];
      const v1460 = stdlib.add(v1451, v1457);
      const v1461 = stdlib.eq(stdlib.checkedBigNumberify('./interface.rsh:53:9:application', stdlib.UInt_max, 0), v1457);
      stdlib.assert(v1461, {
        at: './interface.rsh:53:9:application',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: 'remote bill check',
        who: 'Verifier'
        });
      let v1462 = false;
      let v1463 = false;
      let v1464 = stdlib.checkedBigNumberify('./interface.rsh:60:91:decimal', stdlib.UInt_max, 0);
      let v1465 = true;
      let v1466 = v1441;
      let v1472 = v1448;
      let v1473 = v1460;
      
      while (await (async () => {
        
        return v1465;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc8],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn4;
        switch (v1570[0]) {
          case 'check0_164': {
            const v1573 = v1570[1];
            undefined /* setApiDetails */;
            ;
            const v3550 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3556 = stdlib.tokenEq(v3550, v1438);
            const v3559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3561 = v3556 ? v3560 : v3559;
            const v1631 = v3561[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1633 = v1472[v1631];
            const v1634 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1635 = stdlib.add(v1634, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v1653 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1654 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1655 = [v1635, v1653, v1654];
            const v1656 = stdlib.Array_set(v1472, v1631, v1655);
            ;
            const v1658 = stdlib.addressEq(v1569, v1437);
            const v1659 = v1463 ? false : true;
            const v1660 = v1658 ? v1659 : false;
            stdlib.assert(v1660, {
              at: './interface.rsh:73:16:application',
              fs: ['at ./interface.rsh:72:11:application call to [unknown function] (defined at: ./interface.rsh:72:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Verifier'
              });
            const v1661 = null;
            await txn4.getOutput('check', 'v1661', ctc5, v1661);
            const cv1462 = v1462;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:75:45:decimal', stdlib.UInt_max, 1);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1656;
            const cv1473 = v1473;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'destroy0_164': {
            const v1742 = v1570[1];
            undefined /* setApiDetails */;
            const v1786 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3574 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3580 = stdlib.tokenEq(v3574, v1438);
            const v3583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3585 = v3580 ? v3584 : v3583;
            const v1800 = v3585[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1802 = v1472[v1800];
            const v1803 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1822 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1823 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1824 = [v1803, v1822, v1823];
            const v1825 = stdlib.Array_set(v1472, v1800, v1824);
            ;
            const v1838 = stdlib.addressEq(v1569, v1436);
            stdlib.assert(v1838, {
              at: './interface.rsh:115:16:application',
              fs: ['at ./interface.rsh:114:11:application call to [unknown function] (defined at: ./interface.rsh:114:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Verifier'
              });
            const v1839 = null;
            await txn4.getOutput('destroy', 'v1839', ctc5, v1839);
            const cv1462 = v1462;
            const cv1463 = v1463;
            const cv1464 = v1464;
            const cv1465 = false;
            const cv1466 = v1571;
            const cv1472 = v1825;
            const cv1473 = v1786;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'grant0_164': {
            const v1911 = v1570[1];
            undefined /* setApiDetails */;
            const v1955 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3598 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3604 = stdlib.tokenEq(v3598, v1438);
            const v3607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3609 = v3604 ? v3608 : v3607;
            const v1969 = v3609[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1971 = v1472[v1969];
            const v1972 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v1991 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v1992 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v1993 = [v1972, v1991, v1992];
            const v1994 = stdlib.Array_set(v1472, v1969, v1993);
            ;
            const v2016 = stdlib.addressEq(v1569, v1436);
            const v2017 = v1994[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2018 = v2017[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
            const v2019 = stdlib.eq(v2018, stdlib.checkedBigNumberify('./interface.rsh:94:55:decimal', stdlib.UInt_max, 0));
            const v2020 = v2016 ? v2019 : false;
            const v2021 = v1463 ? false : true;
            const v2022 = v2020 ? v2021 : false;
            stdlib.assert(v2022, {
              at: './interface.rsh:94:16:application',
              fs: ['at ./interface.rsh:93:11:application call to [unknown function] (defined at: ./interface.rsh:93:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Verifier'
              });
            const v2023 = null;
            await txn4.getOutput('grant', 'v2023', ctc5, v2023);
            const cv1462 = true;
            const cv1463 = false;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:96:36:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v1994;
            const cv1473 = v1955;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'peerCheck0_164': {
            const v2080 = v1570[1];
            undefined /* setApiDetails */;
            const v2124 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3622 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3628 = stdlib.tokenEq(v3622, v1438);
            const v3631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3633 = v3628 ? v3632 : v3631;
            const v2138 = v3633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2140 = v1472[v2138];
            const v2141 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2142 = stdlib.add(v2141, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
            const v2160 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2161 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2162 = [v2142, v2160, v2161];
            const v2163 = stdlib.Array_set(v1472, v2138, v2162);
            ;
            stdlib.assert(v1462, {
              at: './interface.rsh:83:16:application',
              fs: ['at ./interface.rsh:82:11:application call to [unknown function] (defined at: ./interface.rsh:82:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Verifier'
              });
            const v2201 = v2163[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2202 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
            const v2208 = stdlib.sub(v2202, v2202);
            const v2211 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 1)];
            const v2212 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 2)];
            const v2213 = [v2208, v2211, v2212];
            const v2214 = stdlib.Array_set(v2163, stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 0), v2213);
            ;
            const v2215 = null;
            await txn4.getOutput('peerCheck', 'v2215', ctc5, v2215);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:86:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2214;
            const cv1473 = v2124;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          case 'touch0_164': {
            const v2249 = v1570[1];
            undefined /* setApiDetails */;
            const v2293 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
            ;
            const v3646 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v3652 = stdlib.tokenEq(v3646, v1438);
            const v3655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
            const v3656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
            const v3657 = v3652 ? v3656 : v3655;
            const v2307 = v3657[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2309 = v1472[v2307];
            const v2310 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
            const v2329 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
            const v2330 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
            const v2331 = [v2310, v2329, v2330];
            const v2332 = stdlib.Array_set(v1472, v2307, v2331);
            ;
            const v2392 = stdlib.addressEq(v1569, v1436);
            const v2393 = v2332[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2394 = v2393[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
            const v2395 = stdlib.gt(v2394, stdlib.checkedBigNumberify('./interface.rsh:104:54:decimal', stdlib.UInt_max, 0));
            const v2396 = v2392 ? v2395 : false;
            const v2398 = v2396 ? v1463 : false;
            stdlib.assert(v2398, {
              at: './interface.rsh:104:16:application',
              fs: ['at ./interface.rsh:103:11:application call to [unknown function] (defined at: ./interface.rsh:103:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
              msg: null,
              who: 'Verifier'
              });
            const v2404 = stdlib.sub(v2394, stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1));
            const v2407 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 1)];
            const v2408 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 2)];
            const v2409 = [v2404, v2407, v2408];
            const v2410 = stdlib.Array_set(v2332, stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 0), v2409);
            ;
            const v2411 = null;
            await txn4.getOutput('touch', 'v2411', ctc5, v2411);
            const cv1462 = true;
            const cv1463 = true;
            const cv1464 = stdlib.checkedBigNumberify('./interface.rsh:107:35:decimal', stdlib.UInt_max, 0);
            const cv1465 = true;
            const cv1466 = v1571;
            const cv1472 = v2410;
            const cv1473 = v2293;
            
            v1462 = cv1462;
            v1463 = cv1463;
            v1464 = cv1464;
            v1465 = cv1465;
            v1466 = cv1466;
            v1472 = cv1472;
            v1473 = cv1473;
            
            continue;
            break;
            }
          }
        
        }
      const v2418 = v1472[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2419 = v2418[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v2420 = stdlib.eq(v2419, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
      if (v2420) {
        const v2422 = stdlib.sub(v1473, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
        ;
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      
      
      break;
      }
    case 'Verifier0_41': {
      const v2481 = v1409[1];
      ;
      const v3544 = stdlib.addressEq(v1408, v1391);
      stdlib.assert(v3544, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      const v3545 = stdlib.eq(v2481, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v3546 = stdlib.addressEq(v1408, v1387);
      const v3547 = v3545 ? v3546 : false;
      stdlib.assert(v3547, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      return;
      
      break;
      }
    }
  
  
  
  };
export async function check(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for check expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for check expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4]);
  const v1480 = ctc.selfAddress();
  const v1482 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:70:10:application call to [unknown function] (defined at: ./interface.rsh:70:10:function exp)', 'at ./interface.rsh:60:69:application call to "runcheck0_164" (defined at: ./interface.rsh:68:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: 'in',
    who: 'check'
    });
  const v1483 = stdlib.addressEq(v1480, v1437);
  const v1484 = v1463 ? false : true;
  const v1485 = v1483 ? v1484 : false;
  stdlib.assert(v1485, {
    at: './interface.rsh:70:19:application',
    fs: ['at ./interface.rsh:70:10:application call to [unknown function] (defined at: ./interface.rsh:70:10:function exp)', 'at ./interface.rsh:70:10:application call to [unknown function] (defined at: ./interface.rsh:70:10:function exp)', 'at ./interface.rsh:60:69:application call to "runcheck0_164" (defined at: ./interface.rsh:68:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'check'
    });
  const v1488 = ['check0_164', v1482];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473, v1488],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:71:14:decimal', stdlib.UInt_max, 0), [[stdlib.checkedBigNumberify('./interface.rsh:71:18:decimal', stdlib.UInt_max, 1), v1438]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
      
      switch (v1570[0]) {
        case 'check0_164': {
          const v1573 = v1570[1];
          sim_r.txns.push({
            kind: 'api',
            who: "check"
            });
          ;
          const v3550 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v3556 = stdlib.tokenEq(v3550, v1438);
          const v3559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
          const v3560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v3561 = v3556 ? v3560 : v3559;
          const v1631 = v3561[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v1633 = v1472[v1631];
          const v1634 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v1635 = stdlib.add(v1634, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
          const v1653 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v1654 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
          const v1655 = [v1635, v1653, v1654];
          const v1656 = stdlib.Array_set(v1472, v1631, v1655);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1),
            kind: 'to',
            tok: v1438
            });
          const v1658 = stdlib.addressEq(v1569, v1437);
          const v1659 = v1463 ? false : true;
          const v1660 = v1658 ? v1659 : false;
          ;
          const v1661 = null;
          const v1662 = await txn1.getOutput('check', 'v1661', ctc9, v1661);
          
          const v6180 = v1462;
          const v6181 = true;
          const v6182 = stdlib.checkedBigNumberify('./interface.rsh:75:45:decimal', stdlib.UInt_max, 1);
          const v6185 = v1656;
          const v6186 = v1473;
          sim_r.isHalt = false;
          
          break;
          }
        case 'destroy0_164': {
          const v1742 = v1570[1];
          
          break;
          }
        case 'grant0_164': {
          const v1911 = v1570[1];
          
          break;
          }
        case 'peerCheck0_164': {
          const v2080 = v1570[1];
          
          break;
          }
        case 'touch0_164': {
          const v2249 = v1570[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
  switch (v1570[0]) {
    case 'check0_164': {
      const v1573 = v1570[1];
      undefined /* setApiDetails */;
      ;
      const v3550 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v3556 = stdlib.tokenEq(v3550, v1438);
      const v3559 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v3560 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v3561 = v3556 ? v3560 : v3559;
      const v1631 = v3561[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v1633 = v1472[v1631];
      const v1634 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v1635 = stdlib.add(v1634, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
      const v1653 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v1654 = v1633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
      const v1655 = [v1635, v1653, v1654];
      const v1656 = stdlib.Array_set(v1472, v1631, v1655);
      ;
      const v1658 = stdlib.addressEq(v1569, v1437);
      const v1659 = v1463 ? false : true;
      const v1660 = v1658 ? v1659 : false;
      stdlib.assert(v1660, {
        at: './interface.rsh:73:16:application',
        fs: ['at ./interface.rsh:72:11:application call to [unknown function] (defined at: ./interface.rsh:72:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: null,
        who: 'check'
        });
      const v1661 = null;
      const v1662 = await txn1.getOutput('check', 'v1661', ctc9, v1661);
      if (v630) {
        stdlib.protect(ctc9, await interact.out(v1573, v1662), {
          at: './interface.rsh:69:7:application',
          fs: ['at ./interface.rsh:69:7:application call to [unknown function] (defined at: ./interface.rsh:69:7:function exp)', 'at ./interface.rsh:74:10:application call to "k" (defined at: ./interface.rsh:72:11:function exp)', 'at ./interface.rsh:72:11:application call to [unknown function] (defined at: ./interface.rsh:72:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
          msg: 'out',
          who: 'check'
          });
        }
      else {
        }
      
      const v6180 = v1462;
      const v6181 = true;
      const v6182 = stdlib.checkedBigNumberify('./interface.rsh:75:45:decimal', stdlib.UInt_max, 1);
      const v6185 = v1656;
      const v6186 = v1473;
      return;
      
      break;
      }
    case 'destroy0_164': {
      const v1742 = v1570[1];
      return;
      break;
      }
    case 'grant0_164': {
      const v1911 = v1570[1];
      return;
      break;
      }
    case 'peerCheck0_164': {
      const v2080 = v1570[1];
      return;
      break;
      }
    case 'touch0_164': {
      const v2249 = v1570[1];
      return;
      break;
      }
    }
  
  
  };
export async function destroy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for destroy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for destroy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4]);
  const v1526 = ctc.selfAddress();
  const v1528 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:112:10:application call to [unknown function] (defined at: ./interface.rsh:112:10:function exp)', 'at ./interface.rsh:60:69:application call to "rundestroy0_164" (defined at: ./interface.rsh:110:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v1529 = stdlib.addressEq(v1526, v1436);
  stdlib.assert(v1529, {
    at: './interface.rsh:112:19:application',
    fs: ['at ./interface.rsh:112:10:application call to [unknown function] (defined at: ./interface.rsh:112:10:function exp)', 'at ./interface.rsh:112:10:application call to [unknown function] (defined at: ./interface.rsh:112:10:function exp)', 'at ./interface.rsh:60:69:application call to "rundestroy0_164" (defined at: ./interface.rsh:110:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'destroy'
    });
  const v1532 = ['destroy0_164', v1528];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473, v1532],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:113:14:decimal', stdlib.UInt_max, 100000), [[stdlib.checkedBigNumberify('./interface.rsh:113:23:decimal', stdlib.UInt_max, 0), v1438]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
      
      switch (v1570[0]) {
        case 'check0_164': {
          const v1573 = v1570[1];
          
          break;
          }
        case 'destroy0_164': {
          const v1742 = v1570[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          const v1786 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3574 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v3580 = stdlib.tokenEq(v3574, v1438);
          const v3583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
          const v3584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v3585 = v3580 ? v3584 : v3583;
          const v1800 = v3585[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v1802 = v1472[v1800];
          const v1803 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v1822 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v1823 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
          const v1824 = [v1803, v1822, v1823];
          const v1825 = stdlib.Array_set(v1472, v1800, v1824);
          ;
          const v1838 = stdlib.addressEq(v1569, v1436);
          ;
          const v1839 = null;
          const v1840 = await txn1.getOutput('destroy', 'v1839', ctc9, v1839);
          
          const v6253 = v1825[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
          const v6254 = v6253[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
          const v6255 = stdlib.eq(v6254, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
          if (v6255) {
            const v6256 = stdlib.sub(v1786, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
            sim_r.txns.push({
              amt: v6256,
              kind: 'from',
              to: v1436,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./interface.rsh:123:14:decimal', stdlib.UInt_max, 100000),
              kind: 'from',
              to: v1437,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v6254,
              kind: 'from',
              to: v1437,
              tok: v1438
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1438
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            sim_r.txns.push({
              amt: v1786,
              kind: 'from',
              to: v1436,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              amt: v6254,
              kind: 'from',
              to: v1437,
              tok: v1438
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v1438
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'grant0_164': {
          const v1911 = v1570[1];
          
          break;
          }
        case 'peerCheck0_164': {
          const v2080 = v1570[1];
          
          break;
          }
        case 'touch0_164': {
          const v2249 = v1570[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
  switch (v1570[0]) {
    case 'check0_164': {
      const v1573 = v1570[1];
      return;
      break;
      }
    case 'destroy0_164': {
      const v1742 = v1570[1];
      undefined /* setApiDetails */;
      const v1786 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
      ;
      const v3574 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v3580 = stdlib.tokenEq(v3574, v1438);
      const v3583 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v3584 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v3585 = v3580 ? v3584 : v3583;
      const v1800 = v3585[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v1802 = v1472[v1800];
      const v1803 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v1822 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v1823 = v1802[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
      const v1824 = [v1803, v1822, v1823];
      const v1825 = stdlib.Array_set(v1472, v1800, v1824);
      ;
      const v1838 = stdlib.addressEq(v1569, v1436);
      stdlib.assert(v1838, {
        at: './interface.rsh:115:16:application',
        fs: ['at ./interface.rsh:114:11:application call to [unknown function] (defined at: ./interface.rsh:114:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: null,
        who: 'destroy'
        });
      const v1839 = null;
      const v1840 = await txn1.getOutput('destroy', 'v1839', ctc9, v1839);
      if (v630) {
        stdlib.protect(ctc9, await interact.out(v1742, v1840), {
          at: './interface.rsh:111:7:application',
          fs: ['at ./interface.rsh:111:7:application call to [unknown function] (defined at: ./interface.rsh:111:7:function exp)', 'at ./interface.rsh:116:10:application call to "k" (defined at: ./interface.rsh:114:11:function exp)', 'at ./interface.rsh:114:11:application call to [unknown function] (defined at: ./interface.rsh:114:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      const v6253 = v1825[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v6254 = v6253[stdlib.checkedBigNumberify('./interface.rsh:121:13:application', stdlib.UInt_max, 0)];
      const v6255 = stdlib.eq(v6254, stdlib.checkedBigNumberify('./interface.rsh:121:24:decimal', stdlib.UInt_max, 0));
      if (v6255) {
        const v6256 = stdlib.sub(v1786, stdlib.checkedBigNumberify('./interface.rsh:122:24:decimal', stdlib.UInt_max, 100000));
        ;
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'grant0_164': {
      const v1911 = v1570[1];
      return;
      break;
      }
    case 'peerCheck0_164': {
      const v2080 = v1570[1];
      return;
      break;
      }
    case 'touch0_164': {
      const v2249 = v1570[1];
      return;
      break;
      }
    }
  
  
  };
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4]);
  const v1498 = ctc.selfAddress();
  const v1500 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:91:10:application call to [unknown function] (defined at: ./interface.rsh:91:10:function exp)', 'at ./interface.rsh:60:69:application call to "rungrant0_164" (defined at: ./interface.rsh:89:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v1501 = stdlib.addressEq(v1498, v1436);
  const v1502 = v1472[stdlib.checkedBigNumberify('./interface.rsh:91:47:application', stdlib.UInt_max, 0)];
  const v1503 = v1502[stdlib.checkedBigNumberify('./interface.rsh:91:47:application', stdlib.UInt_max, 0)];
  const v1504 = stdlib.eq(v1503, stdlib.checkedBigNumberify('./interface.rsh:91:58:decimal', stdlib.UInt_max, 0));
  const v1505 = v1501 ? v1504 : false;
  const v1506 = v1463 ? false : true;
  const v1507 = v1505 ? v1506 : false;
  stdlib.assert(v1507, {
    at: './interface.rsh:91:19:application',
    fs: ['at ./interface.rsh:91:10:application call to [unknown function] (defined at: ./interface.rsh:91:10:function exp)', 'at ./interface.rsh:91:10:application call to [unknown function] (defined at: ./interface.rsh:91:10:function exp)', 'at ./interface.rsh:60:69:application call to "rungrant0_164" (defined at: ./interface.rsh:89:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'grant'
    });
  const v1510 = ['grant0_164', v1500];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473, v1510],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:92:14:decimal', stdlib.UInt_max, 100000), [[stdlib.checkedBigNumberify('./interface.rsh:92:23:decimal', stdlib.UInt_max, 0), v1438]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
      
      switch (v1570[0]) {
        case 'check0_164': {
          const v1573 = v1570[1];
          
          break;
          }
        case 'destroy0_164': {
          const v1742 = v1570[1];
          
          break;
          }
        case 'grant0_164': {
          const v1911 = v1570[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          const v1955 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3598 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v3604 = stdlib.tokenEq(v3598, v1438);
          const v3607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
          const v3608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v3609 = v3604 ? v3608 : v3607;
          const v1969 = v3609[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v1971 = v1472[v1969];
          const v1972 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v1991 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v1992 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
          const v1993 = [v1972, v1991, v1992];
          const v1994 = stdlib.Array_set(v1472, v1969, v1993);
          ;
          const v2016 = stdlib.addressEq(v1569, v1436);
          const v2017 = v1994[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
          const v2018 = v2017[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
          const v2019 = stdlib.eq(v2018, stdlib.checkedBigNumberify('./interface.rsh:94:55:decimal', stdlib.UInt_max, 0));
          const v2020 = v2016 ? v2019 : false;
          const v2021 = v1463 ? false : true;
          const v2022 = v2020 ? v2021 : false;
          ;
          const v2023 = null;
          const v2024 = await txn1.getOutput('grant', 'v2023', ctc9, v2023);
          
          const v6312 = true;
          const v6313 = false;
          const v6314 = stdlib.checkedBigNumberify('./interface.rsh:96:36:decimal', stdlib.UInt_max, 0);
          const v6317 = v1994;
          const v6318 = v1955;
          sim_r.isHalt = false;
          
          break;
          }
        case 'peerCheck0_164': {
          const v2080 = v1570[1];
          
          break;
          }
        case 'touch0_164': {
          const v2249 = v1570[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
  switch (v1570[0]) {
    case 'check0_164': {
      const v1573 = v1570[1];
      return;
      break;
      }
    case 'destroy0_164': {
      const v1742 = v1570[1];
      return;
      break;
      }
    case 'grant0_164': {
      const v1911 = v1570[1];
      undefined /* setApiDetails */;
      const v1955 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
      ;
      const v3598 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v3604 = stdlib.tokenEq(v3598, v1438);
      const v3607 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v3608 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v3609 = v3604 ? v3608 : v3607;
      const v1969 = v3609[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v1971 = v1472[v1969];
      const v1972 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v1991 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v1992 = v1971[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
      const v1993 = [v1972, v1991, v1992];
      const v1994 = stdlib.Array_set(v1472, v1969, v1993);
      ;
      const v2016 = stdlib.addressEq(v1569, v1436);
      const v2017 = v1994[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
      const v2018 = v2017[stdlib.checkedBigNumberify('./interface.rsh:94:44:application', stdlib.UInt_max, 0)];
      const v2019 = stdlib.eq(v2018, stdlib.checkedBigNumberify('./interface.rsh:94:55:decimal', stdlib.UInt_max, 0));
      const v2020 = v2016 ? v2019 : false;
      const v2021 = v1463 ? false : true;
      const v2022 = v2020 ? v2021 : false;
      stdlib.assert(v2022, {
        at: './interface.rsh:94:16:application',
        fs: ['at ./interface.rsh:93:11:application call to [unknown function] (defined at: ./interface.rsh:93:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: null,
        who: 'grant'
        });
      const v2023 = null;
      const v2024 = await txn1.getOutput('grant', 'v2023', ctc9, v2023);
      if (v630) {
        stdlib.protect(ctc9, await interact.out(v1911, v2024), {
          at: './interface.rsh:90:7:application',
          fs: ['at ./interface.rsh:90:7:application call to [unknown function] (defined at: ./interface.rsh:90:7:function exp)', 'at ./interface.rsh:95:10:application call to "k" (defined at: ./interface.rsh:93:11:function exp)', 'at ./interface.rsh:93:11:application call to [unknown function] (defined at: ./interface.rsh:93:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v6312 = true;
      const v6313 = false;
      const v6314 = stdlib.checkedBigNumberify('./interface.rsh:96:36:decimal', stdlib.UInt_max, 0);
      const v6317 = v1994;
      const v6318 = v1955;
      return;
      
      break;
      }
    case 'peerCheck0_164': {
      const v2080 = v1570[1];
      return;
      break;
      }
    case 'touch0_164': {
      const v2249 = v1570[1];
      return;
      break;
      }
    }
  
  
  };
export async function peerCheck(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for peerCheck expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for peerCheck expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4]);
  const v1492 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:80:10:application call to [unknown function] (defined at: ./interface.rsh:80:10:function exp)', 'at ./interface.rsh:60:69:application call to "runpeerCheck0_164" (defined at: ./interface.rsh:78:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: 'in',
    who: 'peerCheck'
    });
  stdlib.assert(v1462, {
    at: './interface.rsh:80:19:application',
    fs: ['at ./interface.rsh:80:10:application call to [unknown function] (defined at: ./interface.rsh:80:10:function exp)', 'at ./interface.rsh:80:10:application call to [unknown function] (defined at: ./interface.rsh:80:10:function exp)', 'at ./interface.rsh:60:69:application call to "runpeerCheck0_164" (defined at: ./interface.rsh:78:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'peerCheck'
    });
  const v1496 = ['peerCheck0_164', v1492];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473, v1496],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:81:14:decimal', stdlib.UInt_max, 100000), [[stdlib.checkedBigNumberify('./interface.rsh:81:23:decimal', stdlib.UInt_max, 1), v1438]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
      
      switch (v1570[0]) {
        case 'check0_164': {
          const v1573 = v1570[1];
          
          break;
          }
        case 'destroy0_164': {
          const v1742 = v1570[1];
          
          break;
          }
        case 'grant0_164': {
          const v1911 = v1570[1];
          
          break;
          }
        case 'peerCheck0_164': {
          const v2080 = v1570[1];
          sim_r.txns.push({
            kind: 'api',
            who: "peerCheck"
            });
          const v2124 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3622 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v3628 = stdlib.tokenEq(v3622, v1438);
          const v3631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
          const v3632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v3633 = v3628 ? v3632 : v3631;
          const v2138 = v3633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v2140 = v1472[v2138];
          const v2141 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v2142 = stdlib.add(v2141, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
          const v2160 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v2161 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
          const v2162 = [v2142, v2160, v2161];
          const v2163 = stdlib.Array_set(v1472, v2138, v2162);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1),
            kind: 'to',
            tok: v1438
            });
          ;
          const v2201 = v2163[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
          const v2202 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
          const v2208 = stdlib.sub(v2202, v2202);
          const v2211 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 1)];
          const v2212 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 2)];
          const v2213 = [v2208, v2211, v2212];
          const v2214 = stdlib.Array_set(v2163, stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 0), v2213);
          sim_r.txns.push({
            amt: v2202,
            kind: 'from',
            to: v1569,
            tok: v1438
            });
          const v2215 = null;
          const v2216 = await txn1.getOutput('peerCheck', 'v2215', ctc9, v2215);
          
          const v6378 = true;
          const v6379 = true;
          const v6380 = stdlib.checkedBigNumberify('./interface.rsh:86:35:decimal', stdlib.UInt_max, 0);
          const v6383 = v2214;
          const v6384 = v2124;
          sim_r.isHalt = false;
          
          break;
          }
        case 'touch0_164': {
          const v2249 = v1570[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
  switch (v1570[0]) {
    case 'check0_164': {
      const v1573 = v1570[1];
      return;
      break;
      }
    case 'destroy0_164': {
      const v1742 = v1570[1];
      return;
      break;
      }
    case 'grant0_164': {
      const v1911 = v1570[1];
      return;
      break;
      }
    case 'peerCheck0_164': {
      const v2080 = v1570[1];
      undefined /* setApiDetails */;
      const v2124 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
      ;
      const v3622 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v3628 = stdlib.tokenEq(v3622, v1438);
      const v3631 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v3632 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v3633 = v3628 ? v3632 : v3631;
      const v2138 = v3633[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v2140 = v1472[v2138];
      const v2141 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v2142 = stdlib.add(v2141, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
      const v2160 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v2161 = v2140[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
      const v2162 = [v2142, v2160, v2161];
      const v2163 = stdlib.Array_set(v1472, v2138, v2162);
      ;
      stdlib.assert(v1462, {
        at: './interface.rsh:83:16:application',
        fs: ['at ./interface.rsh:82:11:application call to [unknown function] (defined at: ./interface.rsh:82:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: null,
        who: 'peerCheck'
        });
      const v2201 = v2163[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
      const v2202 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:25:application', stdlib.UInt_max, 0)];
      const v2208 = stdlib.sub(v2202, v2202);
      const v2211 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 1)];
      const v2212 = v2201[stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 2)];
      const v2213 = [v2208, v2211, v2212];
      const v2214 = stdlib.Array_set(v2163, stdlib.checkedBigNumberify('./interface.rsh:84:43:application', stdlib.UInt_max, 0), v2213);
      ;
      const v2215 = null;
      const v2216 = await txn1.getOutput('peerCheck', 'v2215', ctc9, v2215);
      if (v630) {
        stdlib.protect(ctc9, await interact.out(v2080, v2216), {
          at: './interface.rsh:79:7:application',
          fs: ['at ./interface.rsh:79:7:application call to [unknown function] (defined at: ./interface.rsh:79:7:function exp)', 'at ./interface.rsh:85:10:application call to "k" (defined at: ./interface.rsh:82:11:function exp)', 'at ./interface.rsh:82:11:application call to [unknown function] (defined at: ./interface.rsh:82:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
          msg: 'out',
          who: 'peerCheck'
          });
        }
      else {
        }
      
      const v6378 = true;
      const v6379 = true;
      const v6380 = stdlib.checkedBigNumberify('./interface.rsh:86:35:decimal', stdlib.UInt_max, 0);
      const v6383 = v2214;
      const v6384 = v2124;
      return;
      
      break;
      }
    case 'touch0_164': {
      const v2249 = v1570[1];
      return;
      break;
      }
    }
  
  
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc3]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    check0_164: ctc7,
    destroy0_164: ctc7,
    grant0_164: ctc7,
    peerCheck0_164: ctc7,
    touch0_164: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 6), [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4]);
  const v1512 = ctc.selfAddress();
  const v1514 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:101:10:application call to [unknown function] (defined at: ./interface.rsh:101:10:function exp)', 'at ./interface.rsh:60:69:application call to "runtouch0_164" (defined at: ./interface.rsh:99:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v1515 = stdlib.addressEq(v1512, v1436);
  const v1516 = v1472[stdlib.checkedBigNumberify('./interface.rsh:101:47:application', stdlib.UInt_max, 0)];
  const v1517 = v1516[stdlib.checkedBigNumberify('./interface.rsh:101:47:application', stdlib.UInt_max, 0)];
  const v1518 = stdlib.gt(v1517, stdlib.checkedBigNumberify('./interface.rsh:101:57:decimal', stdlib.UInt_max, 0));
  const v1519 = v1515 ? v1518 : false;
  const v1521 = v1519 ? v1463 : false;
  stdlib.assert(v1521, {
    at: './interface.rsh:101:19:application',
    fs: ['at ./interface.rsh:101:10:application call to [unknown function] (defined at: ./interface.rsh:101:10:function exp)', 'at ./interface.rsh:101:10:application call to [unknown function] (defined at: ./interface.rsh:101:10:function exp)', 'at ./interface.rsh:60:69:application call to "runtouch0_164" (defined at: ./interface.rsh:99:9:function exp)', 'at ./interface.rsh:60:69:application call to [unknown function] (defined at: ./interface.rsh:60:69:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'touch'
    });
  const v1524 = ['touch0_164', v1514];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1436, v1437, v1438, v1449, v1462, v1463, v1464, v1472, v1473, v1524],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:102:14:decimal', stdlib.UInt_max, 100000), [[stdlib.checkedBigNumberify('./interface.rsh:102:23:decimal', stdlib.UInt_max, 0), v1438]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
      
      switch (v1570[0]) {
        case 'check0_164': {
          const v1573 = v1570[1];
          
          break;
          }
        case 'destroy0_164': {
          const v1742 = v1570[1];
          
          break;
          }
        case 'grant0_164': {
          const v1911 = v1570[1];
          
          break;
          }
        case 'peerCheck0_164': {
          const v2080 = v1570[1];
          
          break;
          }
        case 'touch0_164': {
          const v2249 = v1570[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          const v2293 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3646 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v3652 = stdlib.tokenEq(v3646, v1438);
          const v3655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
          const v3656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
          const v3657 = v3652 ? v3656 : v3655;
          const v2307 = v3657[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v2309 = v1472[v2307];
          const v2310 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
          const v2329 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
          const v2330 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
          const v2331 = [v2310, v2329, v2330];
          const v2332 = stdlib.Array_set(v1472, v2307, v2331);
          ;
          const v2392 = stdlib.addressEq(v1569, v1436);
          const v2393 = v2332[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
          const v2394 = v2393[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
          const v2395 = stdlib.gt(v2394, stdlib.checkedBigNumberify('./interface.rsh:104:54:decimal', stdlib.UInt_max, 0));
          const v2396 = v2392 ? v2395 : false;
          const v2398 = v2396 ? v1463 : false;
          ;
          const v2404 = stdlib.sub(v2394, stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1));
          const v2407 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 1)];
          const v2408 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 2)];
          const v2409 = [v2404, v2407, v2408];
          const v2410 = stdlib.Array_set(v2332, stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 0), v2409);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1),
            kind: 'from',
            to: v1569,
            tok: v1438
            });
          const v2411 = null;
          const v2412 = await txn1.getOutput('touch', 'v2411', ctc9, v2411);
          
          const v6444 = true;
          const v6445 = true;
          const v6446 = stdlib.checkedBigNumberify('./interface.rsh:107:35:decimal', stdlib.UInt_max, 0);
          const v6449 = v2410;
          const v6450 = v2293;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc3, ctc3, ctc4, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1570], secs: v1572, time: v1571, didSend: v630, from: v1569 } = txn1;
  switch (v1570[0]) {
    case 'check0_164': {
      const v1573 = v1570[1];
      return;
      break;
      }
    case 'destroy0_164': {
      const v1742 = v1570[1];
      return;
      break;
      }
    case 'grant0_164': {
      const v1911 = v1570[1];
      return;
      break;
      }
    case 'peerCheck0_164': {
      const v2080 = v1570[1];
      return;
      break;
      }
    case 'touch0_164': {
      const v2249 = v1570[1];
      undefined /* setApiDetails */;
      const v2293 = stdlib.add(v1473, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 100000));
      ;
      const v3646 = v1449[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v3652 = stdlib.tokenEq(v3646, v1438);
      const v3655 = [false, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
      const v3656 = [true, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0)];
      const v3657 = v3652 ? v3656 : v3655;
      const v2307 = v3657[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v2309 = v1472[v2307];
      const v2310 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 0)];
      const v2329 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 1)];
      const v2330 = v2309[stdlib.checkedBigNumberify('./interface.rsh:60:69:dot', stdlib.UInt_max, 2)];
      const v2331 = [v2310, v2329, v2330];
      const v2332 = stdlib.Array_set(v1472, v2307, v2331);
      ;
      const v2392 = stdlib.addressEq(v1569, v1436);
      const v2393 = v2332[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
      const v2394 = v2393[stdlib.checkedBigNumberify('./interface.rsh:104:44:application', stdlib.UInt_max, 0)];
      const v2395 = stdlib.gt(v2394, stdlib.checkedBigNumberify('./interface.rsh:104:54:decimal', stdlib.UInt_max, 0));
      const v2396 = v2392 ? v2395 : false;
      const v2398 = v2396 ? v1463 : false;
      stdlib.assert(v2398, {
        at: './interface.rsh:104:16:application',
        fs: ['at ./interface.rsh:103:11:application call to [unknown function] (defined at: ./interface.rsh:103:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
        msg: null,
        who: 'touch'
        });
      const v2404 = stdlib.sub(v2394, stdlib.checkedBigNumberify('./interface.rsh:105:18:decimal', stdlib.UInt_max, 1));
      const v2407 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 1)];
      const v2408 = v2393[stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 2)];
      const v2409 = [v2404, v2407, v2408];
      const v2410 = stdlib.Array_set(v2332, stdlib.checkedBigNumberify('./interface.rsh:105:30:application', stdlib.UInt_max, 0), v2409);
      ;
      const v2411 = null;
      const v2412 = await txn1.getOutput('touch', 'v2411', ctc9, v2411);
      if (v630) {
        stdlib.protect(ctc9, await interact.out(v2249, v2412), {
          at: './interface.rsh:100:7:application',
          fs: ['at ./interface.rsh:100:7:application call to [unknown function] (defined at: ./interface.rsh:100:7:function exp)', 'at ./interface.rsh:106:10:application call to "k" (defined at: ./interface.rsh:103:11:function exp)', 'at ./interface.rsh:103:11:application call to [unknown function] (defined at: ./interface.rsh:103:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v6444 = true;
      const v6445 = true;
      const v6446 = stdlib.checkedBigNumberify('./interface.rsh:107:35:decimal', stdlib.UInt_max, 0);
      const v6449 = v2410;
      const v6450 = v2293;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`check()byte[0]`, `destroy()byte[0]`, `grant()byte[0]`, `peerCheck()byte[0]`, `touch()byte[0]`],
    pure: [`admin()address`, `attendee()address`, `attending()byte`, `balance()uint64`, `granted()byte`, `ticket()uint64`],
    sigs: [`admin()address`, `attendee()address`, `attending()byte`, `balance()uint64`, `check()byte[0]`, `destroy()byte[0]`, `grant()byte[0]`, `granted()byte`, `peerCheck()byte[0]`, `ticket()uint64`, `touch()byte[0]`]
    },
  appApproval: `BiAUAAERBKCNBgYCCMve+4MGxKD8/Ayv3PTrDdvtm/QNiYXs4geio6jbCPGs06UEiuCbuwTq5/a+BNHx8/4BAyAmBAEAAAkAAAAAAAAAAAEJAQAAAAAAAAAAIjUAMRhBB8IpZEkiWzUBIQdbNQI2GgAXSUEBJyI1BCM1BkkhCAxAAJ9JIQkMQABTSSEKDEAANUkhCwxAABchCxJENAEhBRJEKGRJNQNXUQE1B0IHXCEKEkQ0ASEFEkQoZEk1A1dACDUHQgdFIQkSRDQBIQUSRChkSTUDVwAgNQdCBy5JIQwMQAAuSSENDEAAECENEkQpNf+AAQE0/1BCAMYhDBJENAEhBRJEKGRJNQNXUgg1B0IG+SEIEkQpNf+AAQQ0/1BCAJ9JIQ4MQABDSSEPDEAALEkhEAxAABchEBJENAEhBRJEKGRJNQNXUAE1B0IGvSEPEkQpNf8oNP9QQgBlIQ4SRCk1/4ABAzT/UEIAVUkhEQxAABAhERJEKTX/gAECNP9QQgA+gbPtvlISRDQBIQUSRChkSTUDVyAgNQdCBm42GgIXNQQ2GgM2GgEXSSEGDEAEMEkhEgxAAy1JJQxAAyYlEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSlcAIDX/VyAgNf6BQFs1/VdICDX8V1ABFzX7V1EBFzX6V1oRNfmBa1s1+Ek1BTX3gASue9QGNPdQsDT3IlVJIQYMQAHaSSESDEABVEklDEAAqSUSRCEEiAX+Kis0/CJbNP0STSNbNfY0+SQ09gskWDX1NPkiJDT2C1I09VcACDT1VwgIUDT1VxABUFA0+SRJNPYLCCRSUDX0NPRXABFJNfMiWzXyMQA0/xI08iINEDT6EESxIrIBI7ISJbIQMQCyFDT9shGzgAgAAAAAAAAJa7ApNQc0/zT+NP00/CMjIiMyBjTyIwkWNPNXCAhQNPNXEAFQNPghBAhCBBZIIQSIBVcqKzT8Ils0/RJNI1s19jT5JDT2CyRYNfU0+SIkNPYLUjT1IlsjCBY09VcICFA09VcQAVBQNPkkSTT2CwgkUlA19CM0/YgFKDT7RDT0VwARSTXzIls18rEisgE08rISJbIQMQCyFDT9shGzgAgAAAAAAAAIp7ApNQc0/zT+NP00/CMjIiMyBjTySQkWNPNXCAhQNPNXEAFQNPghBAhCA3FIIQSIBLIqKzT8Ils0/RJNI1s19jT5JDT2CyRYNfU0+SIkNPYLUjT1VwAINPVXCAhQNPVXEAFQUDT5JEk09gsIJFJQNfQxADT/EjT0VwARIlsiEhA0+hQQRIAIAAAAAAAAB+ewKTUHNP80/jT9NPwjIiIjMgY09DT4IQQIQgLySSMMQABzSCEEiAQtKis0/CJbNP0STSNbNfY0+SQ09gskWDX1MQA0/xJEgAgAAAAAAAAHL7ApNQc0/zT+NP00/DT7NPo0A4FSWyIyBjT5IiQ09gtSNPVXAAg09VcICFA09VcQAVBQNPkkSTT2CwgkUlA0+CEECEICeUgqKzT8Ils0/RJNI1s19jT5JDT2CyRYNfUjNP2IA7kxADT+EjT6FBBEgAgAAAAAAAAGfbApNQc0/zT+NP00/DT7IyMjMgY0+SIkNPYLUjT1IlsjCBY09VcICFA09VcQAVBQNPkkSTT2CwgkUlA0+EICB0hIIQY0ARJENARJIhJMNAISEUQoZEk1A1cAETX/STUFSUpXACA1/iETWzX9gShbNfyBMFs1+4AEKT+GcDT+UDT9FlA0/BZQNPsWULA0/1cAETX6IQSIAvaxIrIBIrISJbIQMgqyFDT9shGzNPuIAt6ABWFwcElENPwWUAM1+DIKYDIKeAkWNfexIrIBIQWyEDT8shiACAAAAACvsGlSshqzMgpgMgp4CTT3FwkWtwA+VwQAUDX5gAgAAAAAAAAFrzT5ULA0+Uk1+CJbNfciNPcSRDEANP40/UkWIiIiIzIGIQevNPpXCAhQNPpXEAFQNAOBGVs0+wg09whCAQpJIwxAAKRIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXABE1/1cRCDX+VxkgNf2BOVs1/Ek1BTX7gARegB8INPtQsDT7IlVAAEU0+yNbNfo0/IgB/jEANPohBhJENPxJCTX5sSKyATT8sggjshA0/bIHszT/NP5QNPkWUChLAVcAIWdIIQY1ATIGNQJCAYo0+yNbNfoxADQDV0EgEkQ0+iMSMQA0/RIQREIBUUgiNAESRDQESSISTDQCEhFESTUFSVcAIDX/IRNbNf6ABNnpsco0/1A0/hZQsCEEiAF1JK81/SEHrzX8NP81+zT9NPxQNP9QNP4WUDT7UChLAVcAYWdIIzUBMgY1AkIBDTX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/EEAODT1NPZQNPcWUDT4UDT5FlEHCFA0+hZRBwhQNPsWUDT+UDT/FlAoSwFXAHNnSCEFNQEyBjUCQgC6NP5XABEiW0k19CISQQBRsSKyATT/IQQJsggjshA09bIHs7EisgEhBLIII7IQNPayB7OxIrIBNPSyEiWyEDT2shQ097IRs7EisgEishIlshAyCbIVMgqyFDT3shGzQgA+sSKyATT/sggjshA09bIHs7EisgE09LISJbIQNPayFDT3shGzsSKyASKyEiWyEDIJshUyCrIUNPeyEbNCAAAxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 115,
  unsupported: [],
  version: 10,
  warnings: [`Step 2 calls a remote object at /app/interface.rsh:53:9:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1387",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1387",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1388",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Contractee0_41",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Verifier0_41",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T8",
                "name": "v1409",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1437",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1438",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1439",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_check0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_destroy0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_grant0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_peerCheck0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_164",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1570",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1455",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1661",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1839",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2023",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2215",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2411",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T8",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Contractee0_41",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Verifier0_41",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T8",
                "name": "v1409",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1437",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1438",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v1439",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T18",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_check0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_destroy0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_grant0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_peerCheck0_164",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_164",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T18",
                "name": "v1570",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "attendee",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "attending",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "check",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "destroy",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "grant",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "granted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "peerCheck",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ticket",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "touch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200433038038062004330833981016040819052620000269162000364565b6000805543600355620000386200018e565b604080518351815260208085015180516001600160a01b03168284015201518183015290517fd68e12e6935e4ed8c9ea003b808cf6a3f538d7177f5b45038a0bdc8dbd841e149181900360600190a1805160009081905281516020908101829052825160409081018390528351918401519190915282015152620000bf3415600d62000164565b6020820151516001600160a01b03166060820152620000dd620001dd565b6020808301518252604080840151838301528482018051516001600160a01b039081168386015290518301516060808601919091528501511660808401526001600081905543905551620001349183910162000410565b604051602081830303815290604052600290805190602001906200015a9291906200021c565b50505050620004e6565b816200018a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620001c1620002ab565b8152602001620001d0620002f8565b8152600060209091015290565b6040518060a00160405280620001f2620002ab565b815260200162000201620002f8565b81526000602082018190526040820181905260609091015290565b8280546200022a90620004a9565b90600052602060002090601f0160209004810192826200024e576000855562000299565b82601f106200026957805160ff191683800117855562000299565b8280016001018555821562000299579182015b82811115620002995782518255916020019190600101906200027c565b50620002a792915062000316565b5090565b60405180602001604052806001905b620002e1604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620002ba5790505090565b60405180602001604052806001906020820280368337509192915050565b5b80821115620002a7576000815560010162000317565b604080519081016001600160401b03811182821017156200035e57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200037857600080fd5b620003826200032d565b835181526040601f19830112156200039957600080fd5b620003a36200032d565b60208501519092506001600160a01b0381168114620003c157600080fd5b82526040939093015160208083019190915283015250919050565b8060005b60018110156200040a5781516001600160a01b0316845260209384019390910190600101620003e0565b50505050565b815160e08201908260005b6001811015620004575782518051835260208082015181850152604091820151151591840191909152909201916060909101906001016200041b565b50505060208301516200046e6060840182620003dc565b5060408301516001600160a01b038116608084015250606083015160a083015260808301516001600160a01b03811660c08401525092915050565b600181811c90821680620004be57607f821691505b60208210811415620004e057634e487b7160e01b600052602260045260246000fd5b50919050565b613e3a80620004f66000396000f3fe6080604052600436106100f65760003560e01c806371a21f0b1161008f578063919840ad11610061578063919840ad14610205578063a55526db1461020d578063ab53f2c614610215578063b69ef8a814610238578063f851a4401461024d57005b806371a21f0b146101cd57806383197ef0146101d557806383230757146101dd5780638dd196db146101f257005b8063595c743c116100c8578063595c743c1461016357806365153baa146101785780636752c1391461018b5780636cc25db7146101b857005b8063145c9c85146100ff5780631e93b0f11461011257806330c3eaa814610136578063400571ba1461014e57005b366100fd57005b005b6100fd61010d3660046134ef565b610262565b34801561011e57600080fd5b506003545b6040519081526020015b60405180910390f35b61013e610286565b604051901515815260200161012d565b34801561015a57600080fd5b5061013e6102d3565b34801561016f57600080fd5b5061013e61050f565b6100fd610186366004613507565b610748565b34801561019757600080fd5b506101a0610768565b6040516001600160a01b03909116815260200161012d565b3480156101c457600080fd5b506101a061099e565b61013e610bd7565b61013e610c24565b3480156101e957600080fd5b50600154610123565b6100fd610200366004613519565b610c74565b61013e610c94565b61013e610cde565b34801561022157600080fd5b5061022a610d2b565b60405161012d929190613557565b34801561024457600080fd5b50610123610dc8565b34801561025957600080fd5b506101a0611001565b61026a612fb3565b61028261027c3684900384018461365d565b8261123a565b5050565b6000610290612fb3565b610298612fe1565b6102a0613000565b6000606082015260028152604080516020808201909252828152908301526102c8828461151c565b505060400151919050565b600060016000541415610390576000600280546102ef906136ef565b80601f016020809104026020016040519081016040528092919081815260200182805461031b906136ef565b80156103685780601f1061033d57610100808354040283529160200191610368565b820191906000526020600020905b81548152906001019060200180831161034b57829003601f168201915b50505050508060200190518101906103809190613839565b905061038e6000600b612572565b505b6002600054141561044b576000600280546103aa906136ef565b80601f01602080910402602001604051908101604052809291908181526020018280546103d6906136ef565b80156104235780601f106103f857610100808354040283529160200191610423565b820191906000526020600020905b81548152906001019060200180831161040657829003601f168201915b505050505080602001905181019061043b91906138c6565b90506104496000600b612572565b505b6006600054141561050057600060028054610465906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610491906136ef565b80156104de5780601f106104b3576101008083540402835291602001916104de565b820191906000526020600020905b8154815290600101906020018083116104c157829003601f168201915b50505050508060200190518101906104f69190613910565b6080015192915050565b61050c6000600b612572565b90565b6000600160005414156105cc5760006002805461052b906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610557906136ef565b80156105a45780601f10610579576101008083540402835291602001916105a4565b820191906000526020600020905b81548152906001019060200180831161058757829003601f168201915b50505050508060200190518101906105bc9190613839565b90506105ca60006009612572565b505b60026000541415610687576000600280546105e6906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610612906136ef565b801561065f5780601f106106345761010080835404028352916020019161065f565b820191906000526020600020905b81548152906001019060200180831161064257829003601f168201915b505050505080602001905181019061067791906138c6565b905061068560006009612572565b505b6006600054141561073c576000600280546106a1906136ef565b80601f01602080910402602001604051908101604052809291908181526020018280546106cd906136ef565b801561071a5780601f106106ef5761010080835404028352916020019161071a565b820191906000526020600020905b8154815290600101906020018083116106fd57829003601f168201915b50505050508060200190518101906107329190613910565b60a0015192915050565b61050c60006009612572565b610750612fb3565b610282610762368490038401846139bc565b82612598565b60006001600054141561082557600060028054610784906136ef565b80601f01602080910402602001604051908101604052809291908181526020018280546107b0906136ef565b80156107fd5780601f106107d2576101008083540402835291602001916107fd565b820191906000526020600020905b8154815290600101906020018083116107e057829003601f168201915b50505050508060200190518101906108159190613839565b905061082360006008612572565b505b600260005414156108e05760006002805461083f906136ef565b80601f016020809104026020016040519081016040528092919081815260200182805461086b906136ef565b80156108b85780601f1061088d576101008083540402835291602001916108b8565b820191906000526020600020905b81548152906001019060200180831161089b57829003601f168201915b50505050508060200190518101906108d091906138c6565b90506108de60006008612572565b505b60066000541415610992576000600280546108fa906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610926906136ef565b80156109735780601f1061094857610100808354040283529160200191610973565b820191906000526020600020905b81548152906001019060200180831161095657829003601f168201915b505050505080602001905181019061098b9190613910565b5192915050565b61050c60006008612572565b600060016000541415610a5b576000600280546109ba906136ef565b80601f01602080910402602001604051908101604052809291908181526020018280546109e6906136ef565b8015610a335780601f10610a0857610100808354040283529160200191610a33565b820191906000526020600020905b815481529060010190602001808311610a1657829003601f168201915b5050505050806020019051810190610a4b9190613839565b9050610a596000600c612572565b505b60026000541415610b1657600060028054610a75906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa1906136ef565b8015610aee5780601f10610ac357610100808354040283529160200191610aee565b820191906000526020600020905b815481529060010190602001808311610ad157829003601f168201915b5050505050806020019051810190610b0691906138c6565b9050610b146000600c612572565b505b60066000541415610bcb57600060028054610b30906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5c906136ef565b8015610ba95780601f10610b7e57610100808354040283529160200191610ba9565b820191906000526020600020905b815481529060010190602001808311610b8c57829003601f168201915b5050505050806020019051810190610bc19190613910565b6040015192915050565b61050c6000600c612572565b6000610be1612fb3565b610be9612fe1565b610bf1613000565b600060808201526003815260408051602080820190925282815290830152610c19828461151c565b505060600151919050565b6000610c2e612fb3565b610c36612fe1565b610c3e613000565b600060408201526001818190525060408051602080820190925282815290830152610c69828461151c565b505060200151919050565b610c7c612fb3565b610282610c8e36849003840184613a6d565b8261151c565b6000610c9e612fb3565b610ca6612fe1565b610cae613000565b600060208281018290529082526040805180830190915282815290830152610cd6828461151c565b505051919050565b6000610ce8612fb3565b610cf0612fe1565b610cf8613000565b600060a08201526004815260408051602080820190925282815290830152610d20828461151c565b505060800151919050565b600060606000546002808054610d40906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6c906136ef565b8015610db95780601f10610d8e57610100808354040283529160200191610db9565b820191906000526020600020905b815481529060010190602001808311610d9c57829003601f168201915b50505050509050915091509091565b600060016000541415610e8557600060028054610de4906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610e10906136ef565b8015610e5d5780601f10610e3257610100808354040283529160200191610e5d565b820191906000526020600020905b815481529060010190602001808311610e4057829003601f168201915b5050505050806020019051810190610e759190613839565b9050610e836000600a612572565b505b60026000541415610f4057600060028054610e9f906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610ecb906136ef565b8015610f185780601f10610eed57610100808354040283529160200191610f18565b820191906000526020600020905b815481529060010190602001808311610efb57829003601f168201915b5050505050806020019051810190610f3091906138c6565b9050610f3e6000600a612572565b505b60066000541415610ff557600060028054610f5a906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054610f86906136ef565b8015610fd35780601f10610fa857610100808354040283529160200191610fd3565b820191906000526020600020905b815481529060010190602001808311610fb657829003601f168201915b5050505050806020019051810190610feb9190613910565b60c0015192915050565b61050c6000600a612572565b6000600160005414156110be5760006002805461101d906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611049906136ef565b80156110965780601f1061106b57610100808354040283529160200191611096565b820191906000526020600020905b81548152906001019060200180831161107957829003601f168201915b50505050508060200190518101906110ae9190613839565b90506110bc60006007612572565b505b60026000541415611179576000600280546110d8906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611104906136ef565b80156111515780601f1061112657610100808354040283529160200191611151565b820191906000526020600020905b81548152906001019060200180831161113457829003601f168201915b505050505080602001905181019061116991906138c6565b905061117760006007612572565b505b6006600054141561122e57600060028054611193906136ef565b80601f01602080910402602001604051908101604052809291908181526020018280546111bf906136ef565b801561120c5780601f106111e15761010080835404028352916020019161120c565b820191906000526020600020905b8154815290600101906020018083116111ef57829003601f168201915b50505050508060200190518101906112249190613910565b6020015192915050565b61050c60006007612572565b61124a6001600054146013612572565b815161126590158061125e57508251600154145b6014612572565b600080805560028054611277906136ef565b80601f01602080910402602001604051908101604052809291908181526020018280546112a3906136ef565b80156112f05780601f106112c5576101008083540402835291602001916112f0565b820191906000526020600020905b8154815290600101906020018083116112d357829003601f168201915b50505050508060200190518101906113089190613839565b905061132e60405180606001604052806000815260200160008152602001600081525090565b7f0ba6ef113ede74aca8f2e2ffc914e9041fdf8b493228a62412e804737dd451cf8460405161135d9190613b30565b60405180910390a1600060208501515151600181111561137f5761137f6136d9565b141561146a57602080850151510151815260608201516113a2903414600e612572565b80516113b290600214600f612572565b60608201516113c19080613b8a565b6020820152604080830151606084015191516001600160a01b039091169180156108fc02916000818181858888f19350505050158015611405573d6000803e3d6000fd5b5061140e613037565b8251815260208084015181830152828101516040808401919091526002600055436001555161143f91839101613c0b565b60405160208183030381529060405260029080519060200190611463929190613064565b5050611516565b6001602085015151516001811115611484576114846136d9565b141561151657602084015151604090810151908201526114a634156010612572565b6114c982608001516001600160a01b0316336001600160a01b0316146011612572565b61150060018260400151146114df5760006114f9565b82604001516001600160a01b0316336001600160a01b0316145b6012612572565b60008080556001819055611516906002906130e8565b50505050565b61152c600660005414602a612572565b815161154790158061154057508251600154145b602b612572565b600080805560028054611559906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054611585906136ef565b80156115d25780601f106115a7576101008083540402835291602001916115d2565b820191906000526020600020905b8154815290600101906020018083116115b557829003601f168201915b50505050508060200190518101906115ea9190613910565b90506115f4613122565b7f2b658b93d1ca22c6cffb6d3c44d60fa1ed3aa79f2613b5c35004ef943821c3e0846040516116239190613c41565b60405180910390a16000602085015151516004811115611645576116456136d9565b141561191c576116573415601b612572565b6101408101805160009081905290516001602091820181905261016084018051829052519091019190915260e083015160408401516060850151516001600160a01b039081169116146116af578261014001516116b6565b8261016001515b60200151600181106116ca576116ca613cb6565b6020020151516116da9190613ccc565b81515260e082015160408301516060840151516001600160a01b0390811691161461170a57816101400151611711565b8161016001515b602001516001811061172557611725613cb6565b602002015160200151816000015160200181815250508160e0015182604001516001600160a01b0316836060015160006001811061176557611765613cb6565b60200201516001600160a01b0316146117835781610140015161178a565b8161016001515b602001516001811061179e5761179e613cb6565b60200201516040908101518251901515908201528201516117cd906117c690339060016129e6565b601c612572565b61180e82602001516001600160a01b0316336001600160a01b0316146117f4576000611807565b8260a00151611804576001611807565b60005b601d612572565b604051600081527f73e5349ed2c41c830129ec119f3bfd261e62e89dc41e2c722a7b7ce63cd05dde9060200160405180910390a16000835261184e61338d565b825181516001600160a01b039182169052602080850151835190831690820152604080860180518551908516908301526060808801805187518301526080808a01518689018051911515909152805160019701879052805190950186905284519092019490945291514392019190915260e086015190519151516118f493919282169116146118e2578361014001516118e9565b8361016001515b6020015184516129fe565b60208201805160a00191909152610100840151905160c0015261191681612a72565b50611516565b6001602085015151516004811115611936576119366136d9565b1415611c035761194c620186a03414601e612572565b610180810180516000908190529051600160209182018190526101a0840180519190915251015260e082015160408301516060840151516001600160a01b039081169116146119a0578161018001516119a7565b816101a001515b60200151600181106119bb576119bb613cb6565b6020908102919091015151908201515260e082015160408301516060840151516001600160a01b039081169116146119f8578161018001516119ff565b816101a001515b6020015160018110611a1357611a13613cb6565b602002015160200151816020015160200181815250508160e0015182604001516001600160a01b03168360600151600060018110611a5357611a53613cb6565b60200201516001600160a01b031614611a7157816101800151611a78565b816101a001515b6020015160018110611a8c57611a8c613cb6565b60200201516040015181602001516040019015159081151581525050611ac2611abb33846040015160006129e6565b601f612572565b8151611ada906001600160a01b031633146020612572565b604051600081527f7fca66c5c06af3c628b21d087e69a193cd63ce2e4e037114512d2dbe459abbf19060200160405180910390a160006020840152611b1d61338d565b825181516001600160a01b039182169052602080850151835190831690820152604080860180518551908516908301526060808801805187518301526080808a0151868901805191151590915260a08b0151815190151597019690965260c08a01518651909501949094528451600092019190915292514392019190915260e08601519051915151611bd49391928216911614611bbf57836101800151611bc6565b836101a001515b6020015184602001516129fe565b602082015160a00152610100830151611bf190620186a090613ccc565b602082015160c0015261191681612a72565b6002602085015151516004811115611c1d57611c1d6136d9565b1415611f0557611c33620186a034146021612572565b6101c0810180516000908190529051600160209182018190526101e0840180519190915251015260e082015160408301516060840151516001600160a01b03908116911614611c8757816101c00151611c8e565b816101e001515b6020015160018110611ca257611ca2613cb6565b6020020151516040828101519190915260e0830151908301516060840151516001600160a01b03908116911614611cde57816101c00151611ce5565b816101e001515b6020015160018110611cf957611cf9613cb6565b602002015160200151816040015160200181815250508160e0015182604001516001600160a01b03168360600151600060018110611d3957611d39613cb6565b60200201516001600160a01b031614611d5757816101c00151611d5e565b816101e001515b6020015160018110611d7257611d72613cb6565b6020020151604090810151828201519015159082015260e083015190830151606084015151611dce92916001600160a01b03918216911614611db957826101c00151611dc0565b826101e001515b6020015183604001516129fe565b8160600181905250611df0611de933846040015160006129e6565b6022612572565b8151611e3a906001600160a01b03163314611e0c576000611e15565b60608201515151155b611e20576000611e33565b8260a00151611e30576001611e33565b60005b6023612572565b604051600081527f18f70de3a6f42c0f5c5a48e793571176ec54c9a630505580dd1cb25a63f0c3159060200160405180910390a160006040840152611e7d61338d565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845193169281019290925260608086015184518201528184018051600190819052815160009401849052815190940192909252815181019290925280514360809091015290830151905160a00152610100830151611bf190620186a090613ccc565b6003602085015151516004811115611f1f57611f1f6136d9565b141561222b57611f35620186a034146024612572565b6102008101805160009081905290516001602091820181905261022084018051829052519091019190915260e083015160408401516060850151516001600160a01b03908116911614611f8d57826102000151611f94565b8261022001515b6020015160018110611fa857611fa8613cb6565b602002015151611fb89190613ccc565b60808201515260e082015160408301516060840151516001600160a01b03908116911614611feb57816102000151611ff2565b8161022001515b602001516001811061200657612006613cb6565b602002015160200151816080015160200181815250508160e0015182604001516001600160a01b0316836060015160006001811061204657612046613cb6565b60200201516001600160a01b0316146120645781610200015161206b565b8161022001515b602001516001811061207f5761207f613cb6565b602002015160409081015160808301519015159082015260e0830151908301516060840151516120dc92916001600160a01b039182169116146120c7578261020001516120ce565b8261022001515b6020015183608001516129fe565b8160a001819052506120fe6120f733846040015160016129e6565b6025612572565b61210d82608001516026612572565b60a0810151515161211e9080613b8a565b60c0820180519190915260a0820180515160209081015183519091015280515160409081015192519215159281019290925290830151905161216b9190339060005b602002015151612c5d565b604051600081527fd6c8128ee2d1e140a1836a6a83b12fd24b9a2d7e6740b949d6de3cdc99b305ac9060200160405180910390a1600060608401526121ae61338d565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451931692810192909252606080860151845182015281840180516001908190528151909301839052805160009401849052805190910191909152514360809091015260a083015160c0840151611bd492906129fe565b6004602085015151516004811115612245576122456136d9565b14156115165761225b620186a034146027612572565b61024081018051600090819052905160016020918201819052610260840180519190915251015260e082015160408301516060840151516001600160a01b039081169116146122af578161024001516122b6565b8161026001515b60200151600181106122ca576122ca613cb6565b60200201515160e0828101519190915282015160408301516060840151516001600160a01b039081169116146123055781610240015161230c565b8161026001515b602001516001811061232057612320613cb6565b6020020151602001518160e0015160200181815250508160e0015182604001516001600160a01b0316836060015160006001811061236057612360613cb6565b60200201516001600160a01b03161461237e57816102400151612385565b8161026001515b602001516001811061239957612399613cb6565b602002015160409081015160e08381015191151591830191909152830151908301516060840151516123f892916001600160a01b039182169116146123e3578261024001516123ea565b8261026001515b602001518360e001516129fe565b81610100018190525061241b61241433846040015160006129e6565b6028612572565b815161245a906001600160a01b03163314612437576000612442565b610100820151515115155b61244d576000612453565b8260a001515b6029612572565b610100810151515161246e90600190613b8a565b6101208201805191909152610100820180515160209081015183519091015251516040908101519151911515918101919091528201516124b090336001612c5d565b604051600081527f26f058fedefb8a52b9f8481ae8686dd1e1e8de226a9c0ef940cbb189fd8618379060200160405180910390a1600060808401526124f361338d565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519316928101929092526060808601518451820152818401805160019081905281519093018390528051600094018490528051909101919091525143608090910152610100830151610120840151611bd492906129fe565b816102825760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6125a86002600054146019612572565b81516125c39015806125bc57508251600154145b601a612572565b6000808055600280546125d5906136ef565b80601f0160208091040260200160405190810160405280929190818152602001828054612601906136ef565b801561264e5780601f106126235761010080835404028352916020019161264e565b820191906000526020600020905b81548152906001019060200180831161263157829003601f168201915b505050505080602001905181019061266691906138c6565b90506126da6040805161012081018252600060c0820181815260e0830182905261010083018290528252825180840184528181526020808201839052808401919091528351808501855282815290810191909152909182019081526020016000815260200160008152602001600081525090565b604080518551815260208087015180516001600160a01b03908116838501529181015182168385015292830151166060808301919091529091015160808201527f3cd7c55f76210ca7c25df391ebd7eec806585a09b29eb6ef8ac5399bf15a94759060a00160405180910390a180516000905281515160209081015182518201528251516040908101518351901515910152840151606001516127809034146015612572565b600061279485602001516020015130612c71565b61279e9190613b8a565b60808201526127ae600047613b8a565b60608201526040805160048152602481018252602080820180516001600160e01b0316630467eef560e21b1790528601518201519151909160009182916001600160a01b0316908290612802908690613ce4565b60006040518083038185875af1925050503d806000811461283f576040519150601f19603f3d011682016040523d82523d6000602084013e612844565b606091505b509150915061285582826017612d3d565b50836080015161286d88602001516020015130612c71565b6128779190613b8a565b60a0850181905261288a90156016612572565b60608401516128999047613b8a565b602085810180519290925290516040808701829052805182518152918301511515928201929092527f52be2697584c1c3d2ebd77475d1a7475aca4c012cf98700fa73050ee60599f2a910160405180910390a16040840151516128fe90156018612572565b61290661338d565b8051339052602080890180515183516001600160a01b03918216908401528151830151845191166040909101528782015190519091015161294a9190600090612d78565b81516060908101919091526020808301805160009081905281519092018290528051604001829052805160019301929092529051436080909101528651865161299392906129fe565b816020015160a0018190525084604001516000015188602001516060015187604001516129c09190613ccc565b6129ca9190613ccc565b602082015160c001526129dc81612a72565b5050505050505050565b60006129f483853085612e08565b90505b9392505050565b612a066133ad565b60005b6001811015612a5257848160018110612a2457612a24613cb6565b6020020151828260018110612a3b57612a3b613cb6565b602002015280612a4a81613d00565b915050612a09565b5081818460018110612a6657612a66613cb6565b60200201529392505050565b80602001516060015115612b4157612a886133f8565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015190921682840152835160609081015190840152808401805151151560808501528051820151151560a080860191909152815184015160c08087019190915282519091015160e0860152905101516101008401526006600055436001559051612b1891839101613d1b565b60405160208183030381529060405260029080519060200190612b3c929190613064565b505050565b602081015160a001515151612c1b578060000151600001516001600160a01b03166108fc620186a0836020015160c00151612b7c9190613b8a565b6040518115909202916000818181858888f19350505050158015612ba4573d6000803e3d6000fd5b508051602001516040516001600160a01b0390911690600090620186a09082818181858883f19350505050158015612be0573d6000803e3d6000fd5b50805160408101516020918201519183015160a00151612c0292906000612160565b60008080556001819055612c18906002906130e8565b50565b805151602082015160c001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015612be0573d6000803e3d6000fd5b612c68838383612ee2565b612b3c57600080fd5b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b179052915160009283928392918716918391612ccc91613ce4565b60006040518083038185875af1925050503d8060008114612d09576040519150601f19603f3d011682016040523d82523d6000602084013e612d0e565b606091505b5091509150612d1f82826006612d3d565b5080806020019051810190612d349190613dce565b95945050505050565b60608315612d4c5750816129f7565b825115612d5c5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161258f565b612d80613444565b60005b6001811015612dda57848160018110612d9e57612d9e613cb6565b6020020151828260018110612db557612db5613cb6565b6001600160a01b03909216602092909202015280612dd281613d00565b915050612d83565b5081818460018110612dee57612dee613cb6565b6001600160a01b0390921660209290920201529392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391612e6f91613ce4565b60006040518083038185875af1925050503d8060008114612eac576040519150601f19603f3d011682016040523d82523d6000602084013e612eb1565b606091505b5091509150612ec282826001612d3d565b5080806020019051810190612ed79190613de7565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391612f4191613ce4565b60006040518083038185875af1925050503d8060008114612f7e576040519150601f19603f3d011682016040523d82523d6000602084013e612f83565b606091505b5091509150612f9482826002612d3d565b5080806020019051810190612fa99190613de7565b9695505050505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806040016040528060008152602001612ffb613462565b905290565b6040805160c08101909152806000815260006020820181905260408201819052606082018190526080820181905260a09091015290565b604051806060016040528061304a6133ad565b8152602001613057613444565b8152602001600081525090565b828054613070906136ef565b90600052602060002090601f01602090048101928261309257600085556130d8565b82601f106130ab57805160ff19168380011785556130d8565b828001600101855582156130d8579182015b828111156130d85782518255916020019190600101906130bd565b506130e4929150613475565b5090565b5080546130f4906136ef565b6000825580601f10613104575050565b601f016020900490600052602060002090810190612c189190613475565b604080516102e08101909152600061028082018181526102a083018290526102c083019190915281908152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016131986133ad565b815260408051606081018252600080825260208281018290529282015291019081526020016131c56133ad565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016132126133ad565b81526040805160608101825260008082526020808301829052828401829052808501929092528251808401845281815291820152910190815260200161326d6040518060400160405280600015158152602001600081525090565b81526020016132916040518060400160405280600015158152602001600081525090565b81526020016132b56040518060400160405280600015158152602001600081525090565b81526020016132d96040518060400160405280600015158152602001600081525090565b81526020016132fd6040518060400160405280600015158152602001600081525090565b81526020016133216040518060400160405280600015158152602001600081525090565b81526020016133456040518060400160405280600015158152602001600081525090565b81526020016133696040518060400160405280600015158152602001600081525090565b8152602001612ffb6040518060400160405280600015158152602001600081525090565b60405180604001604052806133a061348a565b8152602001612ffb6134b3565b60405180602001604052806001905b6133e2604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816133bc5790505090565b60408051610120810182526000808252602082018190529181019190915260608101613422613444565b81526000602082018190526040820181905260608201526080016130576133ad565b60405180602001604052806001906020820280368337509192915050565b6040518060200160405280612ffb613000565b5b808211156130e45760008155600101613476565b604080516080810182526000808252602082018190529181019190915260608101612ffb613444565b6040518060e0016040528060001515815260200160001515815260200160008152602001600015158152602001600081526020016130576133ad565b60006080828403121561350157600080fd5b50919050565b600060a0828403121561350157600080fd5b600060e0828403121561350157600080fd5b60005b8381101561354657818101518382015260200161352e565b838111156115165750506000910152565b828152604060208201526000825180604084015261357c81606085016020870161352b565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156135ca576135ca613591565b60405290565b6040516020810167ffffffffffffffff811182821017156135ca576135ca613591565b6040516060810167ffffffffffffffff811182821017156135ca576135ca613591565b604051610120810167ffffffffffffffff811182821017156135ca576135ca613591565b60405160c0810167ffffffffffffffff811182821017156135ca576135ca613591565b6000818303608081121561367057600080fd5b6136786135a7565b833581526060601f198301121561368e57600080fd5b6136966135d0565b91506136a06135f3565b6020850135600281106136b257600080fd5b81526040858101356020808401919091526060909601359082015282529283015250919050565b634e487b7160e01b600052602160045260246000fd5b600181811c9082168061370357607f821691505b6020821081141561350157634e487b7160e01b600052602260045260246000fd5b8015158114612c1857600080fd5b805161373d81613724565b919050565b600082601f83011261375357600080fd5b61375b6135d0565b8060608085018681111561376e57600080fd5b855b818110156137bf578281890312156137885760008081fd5b6137906135f3565b81518152602080830151818301526040808401516137ad81613724565b90830152908652909401938201613770565b50919695505050505050565b6001600160a01b0381168114612c1857600080fd5b805161373d816137cb565b600082601f8301126137fc57600080fd5b6138046135d0565b8060208085018681111561381757600080fd5b855b818110156137bf57805161382c816137cb565b8552938201938201613819565b600060e0828403121561384b57600080fd5b60405160a0810181811067ffffffffffffffff8211171561386e5761386e613591565b60405261387b8484613742565b815261388a84606085016137eb565b6020820152608083015161389d816137cb565b604082015260a0830151606082015260c08301516138ba816137cb565b60808201529392505050565b600060a082840312156138d857600080fd5b6138e06135f3565b6138ea8484613742565b81526138f984606085016137eb565b602082015260809290920151604083015250919050565b6000610160828403121561392357600080fd5b61392b613616565b613934836137e0565b8152613942602084016137e0565b6020820152613953604084016137e0565b604082015261396584606085016137eb565b606082015261397660808401613732565b608082015261398760a08401613732565b60a082015260c083015160c08201526139a38460e08501613742565b60e0820152610140929092015161010083015250919050565b600081830360a08112156139cf57600080fd5b6139d76135a7565b833581526080601f19830112156139ed57600080fd5b60405191506080820182811067ffffffffffffffff82111715613a1257613a12613591565b6040526020840135613a23816137cb565b82526040840135613a33816137cb565b60208301526060840135613a46816137cb565b6040830152608093909301356060820152602083015250919050565b803561373d81613724565b600081830360e0811215613a8057600080fd5b613a886135a7565b8335815260c0601f1983011215613a9e57600080fd5b613aa66135d0565b9150613ab061363a565b602085013560058110613ac257600080fd5b81526040850135613ad281613724565b60208201526060850135613ae581613724565b60408201526080850135613af881613724565b6060820152613b0960a08601613a62565b6080820152613b1a60c08601613a62565b60a0820152825260208101919091529392505050565b81518152602082015151805160808301919060028110613b5257613b526136d9565b8060208501525060208101516040840152604081015160608401525092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015613b9c57613b9c613b74565b500390565b8060005b6001811015611516578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101613ba5565b8060005b60018110156115165781516001600160a01b0316845260209384019390910190600101613be3565b600060a082019050613c1e828451613ba1565b6020830151613c306060840182613bdf565b506040830151608083015292915050565b81518152602082015151805160e08301919060058110613c6357613c636136d9565b806020850152506020810151151560408401526040810151151560608401526060810151151560808401526080810151151560a084015260a08101519050613caf60c084018215159052565b5092915050565b634e487b7160e01b600052603260045260246000fd5b60008219821115613cdf57613cdf613b74565b500190565b60008251613cf681846020870161352b565b9190910192915050565b6000600019821415613d1457613d14613b74565b5060010190565b81516001600160a01b03168152602080830151610160830191613d48908401826001600160a01b03169052565b506040830151613d6360408401826001600160a01b03169052565b506060830151613d766060840182613bdf565b506080830151613d8a608084018215159052565b5060a0830151613d9e60a084018215159052565b5060c083015160c083015260e0830151613dbb60e0840182613ba1565b5061010083015161014083015292915050565b600060208284031215613de057600080fd5b5051919050565b600060208284031215613df957600080fd5b81516129f78161372456fea2646970667358221220ad8a079c2f5377a06ea87c5a04bbf2c53d712fc7c174fbcf54ea6abf407b810064736f6c634300080c0033`,
  BytecodeLen: 17200,
  Which: `oD`,
  version: 6,
  views: {
    admin: `admin`,
    attendee: `attendee`,
    attending: `attending`,
    balance: `balance`,
    granted: `granted`,
    ticket: `ticket`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:34:11:after expr stmt semicolon',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:76:34:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:26:50:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:65:17:after expr stmt semicolon',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './interface.rsh:128:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './interface.rsh:128:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './interface.rsh:60:69:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:43:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:51:17:after expr stmt semicolon',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attendee": Attendee,
  "Constructor": Constructor,
  "Contractee": Contractee,
  "Verifier": Verifier,
  "check": check,
  "destroy": destroy,
  "grant": grant,
  "peerCheck": peerCheck,
  "touch": touch
  };
export const _APIs = {
  check: check,
  destroy: destroy,
  grant: grant,
  peerCheck: peerCheck,
  touch: touch
  };
