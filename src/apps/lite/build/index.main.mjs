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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc0],
      2: [ctc0, ctc0, ctc0]
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
    Contractee0_44: ctc1,
    Verifier0_44: ctc1
    });
  
  
  const v147 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:28:56:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:27:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:27:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:76:34:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:26:50:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v148 = v147.addr;
  const v149 = v147.amt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v148, v149],
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
      
      
      const {data: [v151, v152], secs: v154, time: v153, didSend: v40, from: v150 } = txn1;
      
      ;
      const v155 = v151;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v151, v152], secs: v154, time: v153, didSend: v40, from: v150 } = txn1;
  ;
  const v155 = v151;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v173], secs: v175, time: v174, didSend: v103, from: v172 } = txn2;
  switch (v173[0]) {
    case 'Contractee0_44': {
      const v176 = v173[1];
      ;
      const v185 = v172;
      const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v186, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      ;
      const txn3 = await (ctc.sendrecv({
        args: [v150, v155, v185],
        evt_cnt: 0,
        funcNum: 2,
        lct: v174,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./interface.rsh:14:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v199, time: v198, didSend: v131, from: v197 } = txn3;
          
          ;
          const v200 = stdlib.addressEq(v150, v197);
          const v201 = stdlib.addressEq(v185, v197);
          const v202 = v200 ? true : v201;
          const v203 = stdlib.addressEq(v155, v197);
          const v204 = v202 ? true : v203;
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v199, time: v198, didSend: v131, from: v197 } = txn3;
      ;
      const v200 = stdlib.addressEq(v150, v197);
      const v201 = stdlib.addressEq(v185, v197);
      const v202 = v200 ? true : v201;
      const v203 = stdlib.addressEq(v155, v197);
      const v204 = v202 ? true : v203;
      stdlib.assert(v204, {
        at: './interface.rsh:14:11:dot',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:13:24:function exp)'],
        msg: 'sender correct',
        who: 'Constructor'
        });
      return;
      
      
      
      break;
      }
    case 'Verifier0_44': {
      const v214 = v173[1];
      ;
      const v246 = stdlib.addressEq(v172, v155);
      stdlib.assert(v246, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      const v247 = stdlib.eq(v214, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v248 = stdlib.addressEq(v172, v151);
      const v249 = v247 ? v248 : false;
      stdlib.assert(v249, {
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
    Contractee0_44: ctc1,
    Verifier0_44: ctc1
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v151, v152], secs: v154, time: v153, didSend: v40, from: v150 } = txn1;
  ;
  const v155 = v151;
  const v168 = ['Contractee0_44', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  
  const txn2 = await (ctc.sendrecv({
    args: [v150, v151, v152, v155, v168],
    evt_cnt: 1,
    funcNum: 1,
    lct: v153,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v152, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v173], secs: v175, time: v174, didSend: v103, from: v172 } = txn2;
      
      switch (v173[0]) {
        case 'Contractee0_44': {
          const v176 = v173[1];
          sim_r.txns.push({
            amt: v152,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v185 = ctc.iam(v172);
          const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
          ;
          sim_r.txns.push({
            amt: v152,
            kind: 'from',
            to: v151,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Verifier0_44': {
          const v214 = v173[1];
          ;
          const v246 = stdlib.addressEq(v172, v155);
          ;
          const v247 = stdlib.eq(v214, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
          const v248 = stdlib.addressEq(v172, v151);
          const v249 = v247 ? v248 : false;
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
    tys: [ctc0, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v173], secs: v175, time: v174, didSend: v103, from: v172 } = txn2;
  switch (v173[0]) {
    case 'Contractee0_44': {
      const v176 = v173[1];
      ;
      const v185 = ctc.iam(v172);
      const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v186, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      ;
      const txn3 = await (ctc.sendrecv({
        args: [v150, v155, v185],
        evt_cnt: 0,
        funcNum: 2,
        lct: v174,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./interface.rsh:14:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v199, time: v198, didSend: v131, from: v197 } = txn3;
          
          ;
          const v200 = stdlib.addressEq(v150, v197);
          const v201 = stdlib.addressEq(v185, v197);
          const v202 = v200 ? true : v201;
          const v203 = stdlib.addressEq(v155, v197);
          const v204 = v202 ? true : v203;
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v199, time: v198, didSend: v131, from: v197 } = txn3;
      ;
      const v200 = stdlib.addressEq(v150, v197);
      const v201 = stdlib.addressEq(v185, v197);
      const v202 = v200 ? true : v201;
      const v203 = stdlib.addressEq(v155, v197);
      const v204 = v202 ? true : v203;
      stdlib.assert(v204, {
        at: './interface.rsh:14:11:dot',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:13:24:function exp)'],
        msg: 'sender correct',
        who: 'Contractee'
        });
      return;
      
      
      
      break;
      }
    case 'Verifier0_44': {
      const v214 = v173[1];
      ;
      const v246 = stdlib.addressEq(v172, v155);
      stdlib.assert(v246, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      const v247 = stdlib.eq(v214, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v248 = stdlib.addressEq(v172, v151);
      const v249 = v247 ? v248 : false;
      stdlib.assert(v249, {
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
    Contractee0_44: ctc1,
    Verifier0_44: ctc1
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v151, v152], secs: v154, time: v153, didSend: v40, from: v150 } = txn1;
  ;
  const v155 = ctc.iam(v151);
  const v162 = ['Verifier0_44', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  
  const txn2 = await (ctc.sendrecv({
    args: [v150, v151, v152, v155, v162],
    evt_cnt: 1,
    funcNum: 1,
    lct: v153,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:48:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v173], secs: v175, time: v174, didSend: v103, from: v172 } = txn2;
      
      switch (v173[0]) {
        case 'Contractee0_44': {
          const v176 = v173[1];
          sim_r.txns.push({
            amt: v152,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v185 = v172;
          const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
          ;
          sim_r.txns.push({
            amt: v152,
            kind: 'from',
            to: v151,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Verifier0_44': {
          const v214 = v173[1];
          ;
          const v246 = stdlib.addressEq(v172, v155);
          ;
          const v247 = stdlib.eq(v214, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
          const v248 = stdlib.addressEq(v172, v151);
          const v249 = v247 ? v248 : false;
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
    tys: [ctc0, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v173], secs: v175, time: v174, didSend: v103, from: v172 } = txn2;
  switch (v173[0]) {
    case 'Contractee0_44': {
      const v176 = v173[1];
      ;
      const v185 = v172;
      const v186 = stdlib.eq(v176, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v186, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      ;
      const txn3 = await (ctc.sendrecv({
        args: [v150, v155, v185],
        evt_cnt: 0,
        funcNum: 2,
        lct: v174,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./interface.rsh:14:11:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v199, time: v198, didSend: v131, from: v197 } = txn3;
          
          ;
          const v200 = stdlib.addressEq(v150, v197);
          const v201 = stdlib.addressEq(v185, v197);
          const v202 = v200 ? true : v201;
          const v203 = stdlib.addressEq(v155, v197);
          const v204 = v202 ? true : v203;
          ;
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v199, time: v198, didSend: v131, from: v197 } = txn3;
      ;
      const v200 = stdlib.addressEq(v150, v197);
      const v201 = stdlib.addressEq(v185, v197);
      const v202 = v200 ? true : v201;
      const v203 = stdlib.addressEq(v155, v197);
      const v204 = v202 ? true : v203;
      stdlib.assert(v204, {
        at: './interface.rsh:14:11:dot',
        fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:13:24:function exp)'],
        msg: 'sender correct',
        who: 'Verifier'
        });
      return;
      
      
      
      break;
      }
    case 'Verifier0_44': {
      const v214 = v173[1];
      ;
      const v246 = stdlib.addressEq(v172, v155);
      stdlib.assert(v246, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      const v247 = stdlib.eq(v214, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v248 = stdlib.addressEq(v172, v151);
      const v249 = v247 ? v248 : false;
      stdlib.assert(v249, {
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
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAECJgIBAAAiNQAxGEEBqClkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAANxJJAxAADwkEkQkNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbA0A1cAIDEAEjQDV0AgMQASETQDVyAgMQASEURCAPBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/1cgIDX+gUBbNf1XSCA1/Ek1BTX7gARegB8INPtQsDT7IlVAAD40+yNbNfo0/YgA+TEANfk0+iQSRLEisgE0/bIII7IQNP6yB7M0/zT8UDT5UChLAVcAYGdIJDUBMgY1AkIAjDT7I1s1+jEANPwSRDT6IxIxADT+EhBEQgBWSCI0ARJENARJIhJMNAISEURJNQVJVwAgNf+BIFs1/oAE2emxyjT/UDT+FlCwgaCNBogAeDT/Nf0xADT/UDT+FlA0/VAoSwFXAGhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 10,
  warnings: []
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
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v152",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
                    "internalType": "enum _enum_T3",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Contractee0_44",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Verifier0_44",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v173",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                    "internalType": "enum _enum_T3",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Contractee0_44",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Verifier0_44",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T3",
                "name": "v173",
                "type": "tuple"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cd338038062000cd383398101604081905262000026916200024c565b6000808055436003556040805160208101909152908152604080518351815260208085015180516001600160a01b0316828401520151918101919091527fd68e12e6935e4ed8c9ea003b808cf6a3f538d7177f5b45038a0bdc8dbd841e149060600160405180910390a16200009e3415600762000145565b60208281018051516001600160a01b039081168452604080516080808201835260008287018181528385018281526060808601848152338088528a51518a16855299518b015183528b5189168152600194859055439094558651808b01999099529151871688870152519087015251909316848401528151808503909301835260a09093019052805191926200013b92600292909101906200016f565b5050505062000301565b816200016b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017d90620002c4565b90600052602060002090601f016020900481019282620001a15760008555620001ec565b82601f10620001bc57805160ff1916838001178555620001ec565b82800160010185558215620001ec579182015b82811115620001ec578251825591602001919060010190620001cf565b50620001fa929150620001fe565b5090565b5b80821115620001fa5760008155600101620001ff565b604080519081016001600160401b03811182821017156200024657634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200026057600080fd5b6200026a62000215565b835181526040601f19830112156200028157600080fd5b6200028b62000215565b60208501519092506001600160a01b0381168114620002a957600080fd5b82526040939093015160208083019190915283015250919050565b600181811c90821680620002d957607f821691505b60208210811415620002fb57634e487b7160e01b600052602260045260246000fd5b50919050565b6109c280620003116000396000f3fe60806040526004361061004b5760003560e01c8063145c9c85146100545780631e93b0f1146100675780637eea518c1461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b6100526100623660046106f2565b6100d6565b34801561007357600080fd5b506003545b6040519081526020015b60405180910390f35b61005261009936600461070a565b6103de565b3480156100aa57600080fd5b50600154610078565b3480156100bf57600080fd5b506100c861055a565b60405161008292919061071c565b6100e6600160005414600d6105f7565b610100813515806100f957506001548235145b600e6105f7565b60008080556002805461011290610779565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610779565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906107ca565b90506101d260405180606001604052806000815260200160006001600160a01b03168152602001600081525090565b7f0ba6ef113ede74aca8f2e2ffc914e9041fdf8b493228a62412e804737dd451cf836040516102019190610873565b60405180910390a1600061021b60408501602086016108c6565b600181111561022c5761022c61085d565b141561032a57604080840135825282015161024a90341460086105f7565b33602082015280516102609060021460096105f7565b81602001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f193505050501580156102a1573d6000803e3d6000fd5b5060408051606080820183526000808352602080840182815284860183815288516001600160a01b039081168088528a870151821684528985015182168352600295869055436001558851808601919091529251811683890152905116818501528551808203909401845260800190945281519293610323939192019061061c565b5050505050565b600161033c60408501602086016108c6565b600181111561034d5761034d61085d565b14156103d957606083013560408201526103693415600a6105f7565b61038c82606001516001600160a01b0316336001600160a01b031614600b6105f7565b6103c360018260400151146103a25760006103bc565b82602001516001600160a01b0316336001600160a01b0316145b600c6105f7565b600080805560018190556103d9906002906106a0565b505050565b6103ee60026000541460116105f7565b6104088135158061040157506001548235145b60126105f7565b60008080556002805461041a90610779565b80601f016020809104026020016040519081016040528092919081815260200182805461044690610779565b80156104935780601f1061046857610100808354040283529160200191610493565b820191906000526020600020905b81548152906001019060200180831161047657829003601f168201915b50505050508060200190518101906104ab91906108e8565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516104dc9190610962565b60405180910390a16104f03415600f6105f7565b8051610540906001600160a01b0316331461051a5760408201516001600160a01b0316331461051d565b60015b6105365760208201516001600160a01b03163314610539565b60015b60106105f7565b60008080556001819055610556906002906106a0565b5050565b60006060600054600280805461056f90610779565b80601f016020809104026020016040519081016040528092919081815260200182805461059b90610779565b80156105e85780601f106105bd576101008083540402835291602001916105e8565b820191906000526020600020905b8154815290600101906020018083116105cb57829003601f168201915b50505050509050915091509091565b816105565760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461062890610779565b90600052602060002090601f01602090048101928261064a5760008555610690565b82601f1061066357805160ff1916838001178555610690565b82800160010185558215610690579182015b82811115610690578251825591602001919060010190610675565b5061069c9291506106dd565b5090565b5080546106ac90610779565b6000825580601f106106bc575050565b601f0160209004906000526020600020908101906106da91906106dd565b50565b5b8082111561069c57600081556001016106de565b60006080828403121561070457600080fd5b50919050565b60006040828403121561070457600080fd5b82815260006020604081840152835180604085015260005b8181101561075057858101830151858201606001528201610734565b81811115610762576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061078d57607f821691505b6020821081141561070457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146107c557600080fd5b919050565b6000608082840312156107dc57600080fd5b6040516080810181811067ffffffffffffffff8211171561080d57634e487b7160e01b600052604160045260246000fd5b604052610819836107ae565b8152610827602084016107ae565b602082015260408301516040820152610842606084016107ae565b60608201529392505050565b8035600281106107c557600080fd5b634e487b7160e01b600052602160045260246000fd5b81358152608081016108876020840161084e565b600281106108a557634e487b7160e01b600052602160045260246000fd5b80602084015250604083013560408301526060830135606083015292915050565b6000602082840312156108d857600080fd5b6108e18261084e565b9392505050565b6000606082840312156108fa57600080fd5b6040516060810181811067ffffffffffffffff8211171561092b57634e487b7160e01b600052604160045260246000fd5b604052610937836107ae565b8152610945602084016107ae565b6020820152610956604084016107ae565b60408201529392505050565b8135815260408101602083013580151580821461097e57600080fd5b80602085015250509291505056fea26469706673582212203abce97c401454fd471c3b503ab6242400f19d4c1fa2209c4c561870525b78dc64736f6c634300080c0033`,
  BytecodeLen: 3283,
  Which: `oD`,
  version: 6,
  views: {
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
  3: {
    at: './interface.rsh:15:3:after expr stmt',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:13:24:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
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
  "Constructor": Constructor,
  "Contractee": Contractee,
  "Verifier": Verifier
  };
export const _APIs = {
  };
