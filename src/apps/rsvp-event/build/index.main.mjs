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
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc6 = stdlib.T_Token;
  
  return {
    infos: {
      admin: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v311, v321, v322, v325] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v311, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v369, v370, v371, v372, v383, v391, v392] = svs;
            return (await ((async () => {
              
              
              return v369;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      count: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v311, v321, v322, v325] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v311, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v369, v370, v371, v372, v383, v391, v392] = svs;
            return (await ((async () => {
              
              
              return v383;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      name: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v311, v321, v322, v325] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v311, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v369, v370, v371, v372, v383, v391, v392] = svs;
            return (await ((async () => {
              
              
              return v370;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        },
      price: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v311, v321, v322, v325] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v311, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v369, v370, v371, v372, v383, v391, v392] = svs;
            return (await ((async () => {
              
              
              return v372;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      token: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
            const [v311, v321, v322, v325] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
            const [v311, v360] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
            const [v369, v370, v371, v372, v383, v391, v392] = svs;
            return (await ((async () => {
              
              
              return v371;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc6
        }
      },
    views: {
      1: [ctc3, ctc4, ctc0, ctc4],
      2: [ctc3, ctc0],
      5: [ctc4, ctc5, ctc6, ctc0, ctc0, ctc3, ctc0]
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
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    Contractee0_41: ctc1,
    Verifier0_41: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    name: ctc3,
    price: ctc1,
    token: ctc4
    });
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    destroy0_143: ctc7,
    incr0_143: ctc7
    });
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v311 = [v310];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v37, from: v320 } = txn1;
  ;
  const v325 = v321;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v343], secs: v345, time: v344, didSend: v100, from: v342 } = txn2;
  switch (v343[0]) {
    case 'Contractee0_41': {
      const v346 = v343[1];
      ;
      v342;
      const v356 = stdlib.eq(v346, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v356, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v360 = stdlib.sub(v322, v322);
      ;
      const v365 = stdlib.protect(ctc5, await interact.getParams(), {
        at: './interface.rsh:46:38:application',
        fs: ['at ./interface.rsh:41:13:application call to [unknown function] (defined at: ./interface.rsh:41:17:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
        msg: 'getParams',
        who: 'Admin'
        });
      const v366 = v365.name;
      const v367 = v365.token;
      const v368 = v365.price;
      
      const txn3 = await (ctc.sendrecv({
        args: [v311, v360, v366, v367, v368],
        evt_cnt: 3,
        funcNum: 2,
        lct: v344,
        onlyIf: true,
        out_tys: [ctc3, ctc4, ctc1],
        pay: [stdlib.checkedBigNumberify('./interface.rsh:48:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v370, v371, v372], secs: v374, time: v373, didSend: v129, from: v369 } = txn3;
          
          const v375 = v311[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0)];
          const v377 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 1)];
          const v378 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 2)];
          const v379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v377, v378];
          const v380 = stdlib.Array_set(v311, stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0), v379);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
            kind: 'init',
            tok: v371
            });
          ;
          
          const v383 = stdlib.checkedBigNumberify('./interface.rsh:56:25:decimal', stdlib.UInt_max, 0);
          const v384 = true;
          const v385 = v373;
          const v391 = v380;
          const v392 = v360;
          
          if (await (async () => {
            
            return v384;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              amt: v392,
              kind: 'from',
              to: v369,
              tok: undefined /* Nothing */
              });
            const v469 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
            const v470 = v469[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v470,
              kind: 'from',
              to: v369,
              tok: v371
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v371
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc11, ctc1, ctc3, ctc4, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v370, v371, v372], secs: v374, time: v373, didSend: v129, from: v369 } = txn3;
      const v375 = v311[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0)];
      const v377 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v378 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 2)];
      const v379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v377, v378];
      const v380 = stdlib.Array_set(v311, stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0), v379);
      ;
      ;
      stdlib.protect(ctc6, await interact.signal(), {
        at: './interface.rsh:49:24:application',
        fs: ['at ./interface.rsh:49:24:application call to [unknown function] (defined at: ./interface.rsh:49:24:function exp)', 'at ./interface.rsh:49:24:application call to "liftedInteract" (defined at: ./interface.rsh:49:24:application)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
        msg: 'signal',
        who: 'Admin'
        });
      
      let v383 = stdlib.checkedBigNumberify('./interface.rsh:56:25:decimal', stdlib.UInt_max, 0);
      let v384 = true;
      let v385 = v373;
      let v391 = v380;
      let v392 = v360;
      
      while (await (async () => {
        
        return v384;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc8],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn4;
        switch (v413[0]) {
          case 'destroy0_143': {
            const v416 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v423 = stdlib.addressEq(v412, v369);
            stdlib.assert(v423, {
              at: './interface.rsh:76:16:application',
              fs: ['at ./interface.rsh:75:11:application call to [unknown function] (defined at: ./interface.rsh:75:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
              msg: null,
              who: 'Admin'
              });
            const v424 = null;
            await txn4.getOutput('destroy', 'v424', ctc6, v424);
            const cv383 = v383;
            const cv384 = false;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          case 'incr0_143': {
            const v440 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v456 = null;
            await txn4.getOutput('incr', 'v456', ctc6, v456);
            const v462 = stdlib.add(v383, stdlib.checkedBigNumberify('./interface.rsh:69:18:decimal', stdlib.UInt_max, 1));
            const cv383 = v462;
            const cv384 = true;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          }
        
        }
      ;
      const v469 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      const v470 = v469[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      
      
      break;
      }
    case 'Verifier0_41': {
      const v495 = v343[1];
      ;
      const v638 = stdlib.addressEq(v342, v325);
      stdlib.assert(v638, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Admin'
        });
      const v639 = stdlib.eq(v495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v640 = stdlib.addressEq(v342, v321);
      const v641 = v639 ? v640 : false;
      stdlib.assert(v641, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Admin'
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Data({
    destroy0_143: ctc6,
    incr0_143: ctc6
    });
  const ctc8 = stdlib.T_Null;
  
  
  const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v311 = [v310];
  const v317 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:28:56:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:27:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:27:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:76:34:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:26:50:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v318 = v317.addr;
  const v319 = v317.amt;
  
  const txn1 = await (ctc.sendrecv({
    args: [v318, v319],
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
      
      
      const {data: [v321, v322], secs: v324, time: v323, didSend: v37, from: v320 } = txn1;
      
      ;
      const v325 = v321;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v37, from: v320 } = txn1;
  ;
  const v325 = v321;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v343], secs: v345, time: v344, didSend: v100, from: v342 } = txn2;
  switch (v343[0]) {
    case 'Contractee0_41': {
      const v346 = v343[1];
      ;
      v342;
      const v356 = stdlib.eq(v346, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v356, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      const v360 = stdlib.sub(v322, v322);
      ;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 3,
        funcNum: 2,
        out_tys: [ctc4, ctc5, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v370, v371, v372], secs: v374, time: v373, didSend: v129, from: v369 } = txn3;
      const v375 = v311[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0)];
      const v377 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v378 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 2)];
      const v379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v377, v378];
      const v380 = stdlib.Array_set(v311, stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0), v379);
      ;
      ;
      let v383 = stdlib.checkedBigNumberify('./interface.rsh:56:25:decimal', stdlib.UInt_max, 0);
      let v384 = true;
      let v385 = v373;
      let v391 = v380;
      let v392 = v360;
      
      while (await (async () => {
        
        return v384;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc7],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn4;
        switch (v413[0]) {
          case 'destroy0_143': {
            const v416 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v423 = stdlib.addressEq(v412, v369);
            stdlib.assert(v423, {
              at: './interface.rsh:76:16:application',
              fs: ['at ./interface.rsh:75:11:application call to [unknown function] (defined at: ./interface.rsh:75:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
              msg: null,
              who: 'Constructor'
              });
            const v424 = null;
            await txn4.getOutput('destroy', 'v424', ctc8, v424);
            const cv383 = v383;
            const cv384 = false;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          case 'incr0_143': {
            const v440 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v456 = null;
            await txn4.getOutput('incr', 'v456', ctc8, v456);
            const v462 = stdlib.add(v383, stdlib.checkedBigNumberify('./interface.rsh:69:18:decimal', stdlib.UInt_max, 1));
            const cv383 = v462;
            const cv384 = true;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          }
        
        }
      ;
      const v469 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      const v470 = v469[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      
      
      break;
      }
    case 'Verifier0_41': {
      const v495 = v343[1];
      ;
      const v638 = stdlib.addressEq(v342, v325);
      stdlib.assert(v638, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Constructor'
        });
      const v639 = stdlib.eq(v495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v640 = stdlib.addressEq(v342, v321);
      const v641 = v639 ? v640 : false;
      stdlib.assert(v641, {
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    destroy0_143: ctc5,
    incr0_143: ctc5
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v311 = [v310];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v37, from: v320 } = txn1;
  ;
  const v325 = v321;
  const v338 = ['Contractee0_41', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2)];
  
  const txn2 = await (ctc.sendrecv({
    args: [v311, v321, v322, v325, v338],
    evt_cnt: 1,
    funcNum: 1,
    lct: v323,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [v322, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v343], secs: v345, time: v344, didSend: v100, from: v342 } = txn2;
      
      switch (v343[0]) {
        case 'Contractee0_41': {
          const v346 = v343[1];
          sim_r.txns.push({
            amt: v322,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ctc.iam(v342);
          const v356 = stdlib.eq(v346, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
          ;
          const v360 = stdlib.sub(v322, v322);
          sim_r.txns.push({
            amt: v322,
            kind: 'from',
            to: v321,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Verifier0_41': {
          const v495 = v343[1];
          ;
          const v638 = stdlib.addressEq(v342, v325);
          ;
          const v639 = stdlib.eq(v495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
          const v640 = stdlib.addressEq(v342, v321);
          const v641 = v639 ? v640 : false;
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
    tys: [ctc10, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v343], secs: v345, time: v344, didSend: v100, from: v342 } = txn2;
  switch (v343[0]) {
    case 'Contractee0_41': {
      const v346 = v343[1];
      ;
      ctc.iam(v342);
      const v356 = stdlib.eq(v346, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v356, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      const v360 = stdlib.sub(v322, v322);
      ;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 3,
        funcNum: 2,
        out_tys: [ctc3, ctc4, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v370, v371, v372], secs: v374, time: v373, didSend: v129, from: v369 } = txn3;
      const v375 = v311[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0)];
      const v377 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v378 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 2)];
      const v379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v377, v378];
      const v380 = stdlib.Array_set(v311, stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0), v379);
      ;
      ;
      let v383 = stdlib.checkedBigNumberify('./interface.rsh:56:25:decimal', stdlib.UInt_max, 0);
      let v384 = true;
      let v385 = v373;
      let v391 = v380;
      let v392 = v360;
      
      while (await (async () => {
        
        return v384;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn4;
        switch (v413[0]) {
          case 'destroy0_143': {
            const v416 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v423 = stdlib.addressEq(v412, v369);
            stdlib.assert(v423, {
              at: './interface.rsh:76:16:application',
              fs: ['at ./interface.rsh:75:11:application call to [unknown function] (defined at: ./interface.rsh:75:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
              msg: null,
              who: 'Contractee'
              });
            const v424 = null;
            await txn4.getOutput('destroy', 'v424', ctc7, v424);
            const cv383 = v383;
            const cv384 = false;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          case 'incr0_143': {
            const v440 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v456 = null;
            await txn4.getOutput('incr', 'v456', ctc7, v456);
            const v462 = stdlib.add(v383, stdlib.checkedBigNumberify('./interface.rsh:69:18:decimal', stdlib.UInt_max, 1));
            const cv383 = v462;
            const cv384 = true;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          }
        
        }
      ;
      const v469 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      const v470 = v469[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      
      
      break;
      }
    case 'Verifier0_41': {
      const v495 = v343[1];
      ;
      const v638 = stdlib.addressEq(v342, v325);
      stdlib.assert(v638, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Contractee'
        });
      const v639 = stdlib.eq(v495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v640 = stdlib.addressEq(v342, v321);
      const v641 = v639 ? v640 : false;
      stdlib.assert(v641, {
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Data({
    destroy0_143: ctc5,
    incr0_143: ctc5
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v310 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), false];
  const v311 = [v310];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v321, v322], secs: v324, time: v323, didSend: v37, from: v320 } = txn1;
  ;
  const v325 = ctc.iam(v321);
  const v332 = ['Verifier0_41', stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1)];
  
  const txn2 = await (ctc.sendrecv({
    args: [v311, v321, v322, v325, v332],
    evt_cnt: 1,
    funcNum: 1,
    lct: v323,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:48:14:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v343], secs: v345, time: v344, didSend: v100, from: v342 } = txn2;
      
      switch (v343[0]) {
        case 'Contractee0_41': {
          const v346 = v343[1];
          sim_r.txns.push({
            amt: v322,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          v342;
          const v356 = stdlib.eq(v346, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
          ;
          const v360 = stdlib.sub(v322, v322);
          sim_r.txns.push({
            amt: v322,
            kind: 'from',
            to: v321,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          
          break;
          }
        case 'Verifier0_41': {
          const v495 = v343[1];
          ;
          const v638 = stdlib.addressEq(v342, v325);
          ;
          const v639 = stdlib.eq(v495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
          const v640 = stdlib.addressEq(v342, v321);
          const v641 = v639 ? v640 : false;
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
    tys: [ctc10, ctc0, ctc1, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v343], secs: v345, time: v344, didSend: v100, from: v342 } = txn2;
  switch (v343[0]) {
    case 'Contractee0_41': {
      const v346 = v343[1];
      ;
      v342;
      const v356 = stdlib.eq(v346, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:22:decimal', stdlib.UInt_max, 2));
      stdlib.assert(v356, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:63:16:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      const v360 = stdlib.sub(v322, v322);
      ;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 3,
        funcNum: 2,
        out_tys: [ctc3, ctc4, ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v370, v371, v372], secs: v374, time: v373, didSend: v129, from: v369 } = txn3;
      const v375 = v311[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0)];
      const v377 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 1)];
      const v378 = v375[stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 2)];
      const v379 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0), v377, v378];
      const v380 = stdlib.Array_set(v311, stdlib.checkedBigNumberify('./interface.rsh:48:9:dot', stdlib.UInt_max, 0), v379);
      ;
      ;
      let v383 = stdlib.checkedBigNumberify('./interface.rsh:56:25:decimal', stdlib.UInt_max, 0);
      let v384 = true;
      let v385 = v373;
      let v391 = v380;
      let v392 = v360;
      
      while (await (async () => {
        
        return v384;})()) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc6],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn4;
        switch (v413[0]) {
          case 'destroy0_143': {
            const v416 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v423 = stdlib.addressEq(v412, v369);
            stdlib.assert(v423, {
              at: './interface.rsh:76:16:application',
              fs: ['at ./interface.rsh:75:11:application call to [unknown function] (defined at: ./interface.rsh:75:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
              msg: null,
              who: 'Verifier'
              });
            const v424 = null;
            await txn4.getOutput('destroy', 'v424', ctc7, v424);
            const cv383 = v383;
            const cv384 = false;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          case 'incr0_143': {
            const v440 = v413[1];
            undefined /* setApiDetails */;
            ;
            const v456 = null;
            await txn4.getOutput('incr', 'v456', ctc7, v456);
            const v462 = stdlib.add(v383, stdlib.checkedBigNumberify('./interface.rsh:69:18:decimal', stdlib.UInt_max, 1));
            const cv383 = v462;
            const cv384 = true;
            const cv385 = v414;
            const cv391 = v391;
            const cv392 = v392;
            
            v383 = cv383;
            v384 = cv384;
            v385 = cv385;
            v391 = cv391;
            v392 = cv392;
            
            continue;
            break;
            }
          }
        
        }
      ;
      const v469 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      const v470 = v469[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      
      
      break;
      }
    case 'Verifier0_41': {
      const v495 = v343[1];
      ;
      const v638 = stdlib.addressEq(v342, v325);
      stdlib.assert(v638, {
        at: './.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:41:7:application',
        fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:77:13:application call to "binaryFork" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:40:45:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:89:9:application call to "verify" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:75:59:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:83:3:function exp)'],
        msg: null,
        who: 'Verifier'
        });
      const v639 = stdlib.eq(v495, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:342993653b74122badbbce38f69a922b59d82b8a/util.rsh:50:22:decimal', stdlib.UInt_max, 1));
      const v640 = stdlib.addressEq(v342, v321);
      const v641 = v639 ? v640 : false;
      stdlib.assert(v641, {
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
export async function destroy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for destroy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for destroy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    destroy0_143: ctc7,
    incr0_143: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v369, v370, v371, v372, v383, v391, v392] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc0, ctc1, ctc2, ctc3, ctc3, ctc6, ctc3]);
  const v402 = ctc.selfAddress();
  const v404 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:73:10:application call to [unknown function] (defined at: ./interface.rsh:73:10:function exp)', 'at ./interface.rsh:56:17:application call to "rundestroy0_143" (defined at: ./interface.rsh:72:9:function exp)', 'at ./interface.rsh:56:17:application call to [unknown function] (defined at: ./interface.rsh:56:17:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
    msg: 'in',
    who: 'destroy'
    });
  const v405 = stdlib.addressEq(v402, v369);
  stdlib.assert(v405, {
    at: './interface.rsh:73:19:application',
    fs: ['at ./interface.rsh:73:10:application call to [unknown function] (defined at: ./interface.rsh:73:10:function exp)', 'at ./interface.rsh:73:10:application call to [unknown function] (defined at: ./interface.rsh:73:10:function exp)', 'at ./interface.rsh:56:17:application call to "rundestroy0_143" (defined at: ./interface.rsh:72:9:function exp)', 'at ./interface.rsh:56:17:application call to [unknown function] (defined at: ./interface.rsh:56:17:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
    msg: null,
    who: 'destroy'
    });
  const v408 = ['destroy0_143', v404];
  
  const txn1 = await (ctc.sendrecv({
    args: [v369, v370, v371, v372, v383, v391, v392, v408],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:74:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn1;
      
      switch (v413[0]) {
        case 'destroy0_143': {
          const v416 = v413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "destroy"
            });
          ;
          const v423 = stdlib.addressEq(v412, v369);
          ;
          const v424 = null;
          const v425 = await txn1.getOutput('destroy', 'v424', ctc9, v424);
          
          sim_r.txns.push({
            amt: v392,
            kind: 'from',
            to: v369,
            tok: undefined /* Nothing */
            });
          const v1167 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
          const v1168 = v1167[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
          sim_r.txns.push({
            amt: v1168,
            kind: 'from',
            to: v369,
            tok: v371
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v371
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'incr0_143': {
          const v440 = v413[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn1;
  switch (v413[0]) {
    case 'destroy0_143': {
      const v416 = v413[1];
      undefined /* setApiDetails */;
      ;
      const v423 = stdlib.addressEq(v412, v369);
      stdlib.assert(v423, {
        at: './interface.rsh:76:16:application',
        fs: ['at ./interface.rsh:75:11:application call to [unknown function] (defined at: ./interface.rsh:75:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
        msg: null,
        who: 'destroy'
        });
      const v424 = null;
      const v425 = await txn1.getOutput('destroy', 'v424', ctc9, v424);
      if (v218) {
        stdlib.protect(ctc9, await interact.out(v416, v425), {
          at: './interface.rsh:72:10:application',
          fs: ['at ./interface.rsh:72:10:application call to [unknown function] (defined at: ./interface.rsh:72:10:function exp)', 'at ./interface.rsh:77:10:application call to "k" (defined at: ./interface.rsh:75:11:function exp)', 'at ./interface.rsh:75:11:application call to [unknown function] (defined at: ./interface.rsh:75:11:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
          msg: 'out',
          who: 'destroy'
          });
        }
      else {
        }
      
      ;
      const v1167 = v391[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      const v1168 = v1167[stdlib.checkedBigNumberify('./interface.rsh:85:19:application', stdlib.UInt_max, 0)];
      ;
      return;
      
      break;
      }
    case 'incr0_143': {
      const v440 = v413[1];
      return;
      break;
      }
    }
  
  
  };
export async function incr(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for incr expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for incr expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    destroy0_143: ctc7,
    incr0_143: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v369, v370, v371, v372, v383, v391, v392] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5), [ctc0, ctc1, ctc2, ctc3, ctc3, ctc6, ctc3]);
  const v397 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:63:8:application call to [unknown function] (defined at: ./interface.rsh:63:8:function exp)', 'at ./interface.rsh:56:17:application call to "runincr0_143" (defined at: ./interface.rsh:62:7:function exp)', 'at ./interface.rsh:56:17:application call to [unknown function] (defined at: ./interface.rsh:56:17:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
    msg: 'in',
    who: 'incr'
    });
  const v400 = ['incr0_143', v397];
  
  const txn1 = await (ctc.sendrecv({
    args: [v369, v370, v371, v372, v383, v391, v392, v400],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:64:11:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn1;
      
      switch (v413[0]) {
        case 'destroy0_143': {
          const v416 = v413[1];
          
          break;
          }
        case 'incr0_143': {
          const v440 = v413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "incr"
            });
          ;
          const v456 = null;
          const v457 = await txn1.getOutput('incr', 'v456', ctc9, v456);
          
          const v462 = stdlib.add(v383, stdlib.checkedBigNumberify('./interface.rsh:69:18:decimal', stdlib.UInt_max, 1));
          const v1183 = v462;
          const v1186 = v391;
          const v1187 = v392;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v413], secs: v415, time: v414, didSend: v218, from: v412 } = txn1;
  switch (v413[0]) {
    case 'destroy0_143': {
      const v416 = v413[1];
      return;
      break;
      }
    case 'incr0_143': {
      const v440 = v413[1];
      undefined /* setApiDetails */;
      ;
      const v456 = null;
      const v457 = await txn1.getOutput('incr', 'v456', ctc9, v456);
      if (v218) {
        stdlib.protect(ctc9, await interact.out(v440, v457), {
          at: './interface.rsh:62:8:application',
          fs: ['at ./interface.rsh:62:8:application call to [unknown function] (defined at: ./interface.rsh:62:8:function exp)', 'at ./interface.rsh:67:8:application call to "k" (defined at: ./interface.rsh:65:9:function exp)', 'at ./interface.rsh:65:9:application call to [unknown function] (defined at: ./interface.rsh:65:9:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
          msg: 'out',
          who: 'incr'
          });
        }
      else {
        }
      
      const v462 = stdlib.add(v383, stdlib.checkedBigNumberify('./interface.rsh:69:18:decimal', stdlib.UInt_max, 1));
      const v1183 = v462;
      const v1186 = v391;
      const v1187 = v392;
      return;
      
      break;
      }
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`destroy()byte[0]`, `incr()byte[0]`],
    pure: [`admin()address`, `count()uint64`, `name()byte[32]`, `price()uint64`, `token()uint64`],
    sigs: [`admin()address`, `count()uint64`, `destroy()byte[0]`, `incr()byte[0]`, `name()byte[32]`, `price()uint64`, `token()uint64`]
    },
  appApproval: `BiAPAAEFBAIIoqOo2wjj5ZfACdLSwf0KlvzmtAmNop/bBML5rOYGIKCNBhEmAgEAACI1ADEYQQPgKWRJIls1ASEFWzUCNhoAF0lBAL8iNQQjNQZJIQYMQABfSSEHDEAALUkhCAxAABAhCBJEKTX/gAEBNP9QQgC4IQcSRDQBJBJEKGRJNQNXSAg1B0IDckkhCQxAABYhCRJENAEkEkQoZEk1A1dQCDUHQgNVIQYSRCk1/yg0/1BCAHdJIQoMQAAzSSELDEAAFiELEkQ0ASQSRChkSTUDVyAgNQdCAyMhChJENAEkEkQoZEk1A1dACDUHQgMNgbPtvlISRDQBJBJEKGRJNQNXACA1B0IC9DYaAhc1BDYaAzYaARdJIQQMQAEzSYEDDEAAqEklDEAAoSUSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSklXACA1/1cgIDX+gUBbNf2BSFs1/IFQWzX7V1gRNfqBaVs1+Uk1BTX4gASue9QGNPhQsDT4IlVAACgxADT/EkSACAAAAAAAAAGosCk1BzT/NP40/TT8NPsiMgY0+jT5QgGkgAgAAAAAAAAByLApNQc0/zT+NP00/DT7IwgjMgY0+jT5QgGASEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDVwARNf9JNQVJSVcAIDX+IQxbNf2BKFs1/IAE5kHu3zT+UDT9FlA0/BZQsDT/VwARNfshDYgCCrEisgEishIlshAyCrIUNP2yEbMxADT+NP00/CIjMgYhBa80+1cICFA0+1cQAVA0AyEOW0IA+0kjDEAAnEgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAETX/VxEgNf6BMVs1/Uk1BTX8gARegB8INPxQsDT8IlVAAEI0/CNbNfs0/YgBhjEANPshBBJENP1JCTX6sSKyATT9sggjshA0/rIHszT/NPoWUChLAVcAGWdIIQQ1ATIGNQJCARU0/CNbNfsxADQDVzkgEkQ0+yMSMQA0/hIQREIA3UgiNAESRDQESSISTDQCEhFESTUFSVcAIDX/IQxbNf6ABNnpsco0/1A0/hZQsCENiAEAIQ6vNf00/zX8NP00/1A0/hZQNPxQKEsBVwBZZ0gjNQEyBjUCQgCfNf81/jX9Nfw1+zX6Nfk1+DX3NPxBACo09zT4UDT5FlA0+hZQNPsWUDT+UDT/FlAoSwFXAHFnSCQ1ATIGNQJCAF6xIrIBNP+yCCOyEDT3sgezsSKyATT+VwARIluyEiWyEDT3shQ0+bIRs7EisgEishIlshAyCbIVMgqyFDT5shGzQgAAMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 113,
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
                "name": "v321",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v322",
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
                "name": "v321",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v322",
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
                "name": "v343",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v370",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v371",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_destroy0_143",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_incr0_143",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v413",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
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
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v424",
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
    "name": "_reach_oe_v456",
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
                "name": "v343",
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
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v370",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v371",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v372",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_destroy0_143",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_incr0_143",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T17",
                "name": "v413",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
    "name": "count",
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
    "name": "incr",
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
    "name": "name",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "price",
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
    "name": "token",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620027ea380380620027ea833981016040819052620000269162000319565b6000805543600355620000386200017f565b604080518351815260208085015180516001600160a01b03168284015201518183015290517fd68e12e6935e4ed8c9ea003b808cf6a3f538d7177f5b45038a0bdc8dbd841e149181900360600190a180516000908190528151602090810182905282516040019190915281519082015152620000b73415600c62000155565b6020820151516001600160a01b03166040820152620000d5620001bf565b60208083015182528381018051516001600160a01b039081168484015290518201516040808501919091528085015190911660608401526001600081905543905551620001259183910162000391565b604051602081830303815290604052600290805190602001906200014b929190620001ef565b5050505062000452565b816200017b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620001b26200027e565b8152600060209091015290565b6040518060800160405280620001d46200027e565b81526000602082018190526040820181905260609091015290565b828054620001fd9062000415565b90600052602060002090601f0160209004810192826200022157600085556200026c565b82601f106200023c57805160ff19168380011785556200026c565b828001600101855582156200026c579182015b828111156200026c5782518255916020019190600101906200024f565b506200027a929150620002cb565b5090565b60405180602001604052806001905b620002b4604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200028d5790505090565b5b808211156200027a5760008155600101620002cc565b604080519081016001600160401b03811182821017156200031357634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200032d57600080fd5b62000337620002e2565b835181526040601f19830112156200034e57600080fd5b62000358620002e2565b60208501519092506001600160a01b03811681146200037657600080fd5b82526040939093015160208083019190915283015250919050565b815160c08201908260005b6001811015620003d85782518051835260208082015181850152604091820151151591840191909152909201916060909101906001016200039c565b50505060208301516001600160a01b0381166060840152506040830151608083015260608301516001600160a01b03811660a08401525092915050565b600181811c908216806200042a57607f821691505b602082108114156200044c57634e487b7160e01b600052602260045260246000fd5b50919050565b61238880620004626000396000f3fe6080604052600436106100bd5760003560e01c806383197ef011610079578063ab53f2c611610056578063ab53f2c614610197578063af583031146101ba578063f851a440146101cd578063fc0c546a146101fa57005b806383197ef014610165578063832307571461016d578063a035b1fe1461018257005b806306661abd146100c657806306fdde03146100ee578063119fbbd414610112578063145c9c851461012a5780631e93b0f11461013d57806336054e531461015257005b366100c457005b005b3480156100d257600080fd5b506100db61020f565b6040519081526020015b60405180910390f35b3480156100fa57600080fd5b5061010361044b565b604051905181526020016100e5565b61011a610691565b60405190151581526020016100e5565b6100c4610138366004611c22565b6106f5565b34801561014957600080fd5b506003546100db565b6100c4610160366004611c22565b610725565b61011a610751565b34801561017957600080fd5b506001546100db565b34801561018e57600080fd5b506100db6107b1565b3480156101a357600080fd5b506101ac6109ea565b6040516100e5929190611c6a565b6100c46101c8366004611c22565b610a87565b3480156101d957600080fd5b506101e2610ab3565b6040516001600160a01b0390911681526020016100e5565b34801561020657600080fd5b506101e2610ce9565b6000600160005414156102cc5760006002805461022b90611ca4565b80601f016020809104026020016040519081016040528092919081815260200182805461025790611ca4565b80156102a45780601f10610279576101008083540402835291602001916102a4565b820191906000526020600020905b81548152906001019060200180831161028757829003601f168201915b50505050508060200190518101906102bc9190611e3d565b90506102ca60006008610f1e565b505b60026000541415610387576000600280546102e690611ca4565b80601f016020809104026020016040519081016040528092919081815260200182805461031290611ca4565b801561035f5780601f106103345761010080835404028352916020019161035f565b820191906000526020600020905b81548152906001019060200180831161034257829003601f168201915b50505050508060200190518101906103779190611eb8565b905061038560006008610f1e565b505b6005600054141561043c576000600280546103a190611ca4565b80601f01602080910402602001604051908101604052809291908181526020018280546103cd90611ca4565b801561041a5780601f106103ef5761010080835404028352916020019161041a565b820191906000526020600020905b8154815290600101906020018083116103fd57829003601f168201915b50505050508060200190518101906104329190611ef0565b6080015192915050565b61044860006008610f1e565b90565b604080516020810190915260008152600160005414156105155760006002805461047490611ca4565b80601f01602080910402602001604051908101604052809291908181526020018280546104a090611ca4565b80156104ed5780601f106104c2576101008083540402835291602001916104ed565b820191906000526020600020905b8154815290600101906020018083116104d057829003601f168201915b50505050508060200190518101906105059190611e3d565b905061051360006009610f1e565b505b600260005414156105d05760006002805461052f90611ca4565b80601f016020809104026020016040519081016040528092919081815260200182805461055b90611ca4565b80156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b50505050508060200190518101906105c09190611eb8565b90506105ce60006009610f1e565b505b60056000541415610685576000600280546105ea90611ca4565b80601f016020809104026020016040519081016040528092919081815260200182805461061690611ca4565b80156106635780601f1061063857610100808354040283529160200191610663565b820191906000526020600020905b81548152906001019060200180831161064657829003601f168201915b505050505080602001905181019061067b9190611ef0565b6020015192915050565b61044860006009610f1e565b60408051808201909152600080825260208201819052906106b06119e9565b6040805160608101825260006020808301829052828401919091526001825282518082019093528183528301919091526106ea8284610f44565b505060200151919050565b604080518082019091526000808252602082015261072161071b36849003840184611fb1565b82611243565b5050565b604080518082019091526000808252602082015261072161074b36849003840184612029565b82610f44565b60408051808201909152600080825260208201819052906107706119e9565b60408051606081018252600080825260208083018290528284019190915282518082019093528183528301919091526107a98284610f44565b505051919050565b60006001600054141561086e576000600280546107cd90611ca4565b80601f01602080910402602001604051908101604052809291908181526020018280546107f990611ca4565b80156108465780601f1061081b57610100808354040283529160200191610846565b820191906000526020600020905b81548152906001019060200180831161082957829003601f168201915b505050505080602001905181019061085e9190611e3d565b905061086c6000600a610f1e565b505b600260005414156109295760006002805461088890611ca4565b80601f01602080910402602001604051908101604052809291908181526020018280546108b490611ca4565b80156109015780601f106108d657610100808354040283529160200191610901565b820191906000526020600020905b8154815290600101906020018083116108e457829003601f168201915b50505050508060200190518101906109199190611eb8565b90506109276000600a610f1e565b505b600560005414156109de5760006002805461094390611ca4565b80601f016020809104026020016040519081016040528092919081815260200182805461096f90611ca4565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b50505050508060200190518101906109d49190611ef0565b6060015192915050565b6104486000600a610f1e565b6000606060005460028080546109ff90611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2b90611ca4565b8015610a785780601f10610a4d57610100808354040283529160200191610a78565b820191906000526020600020905b815481529060010190602001808311610a5b57829003601f168201915b50505050509050915091509091565b6040805180820190915260008082526020820152610721610aad368490038401846120b3565b8261151a565b600060016000541415610b7057600060028054610acf90611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610afb90611ca4565b8015610b485780601f10610b1d57610100808354040283529160200191610b48565b820191906000526020600020905b815481529060010190602001808311610b2b57829003601f168201915b5050505050806020019051810190610b609190611e3d565b9050610b6e60006007610f1e565b505b60026000541415610c2b57600060028054610b8a90611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb690611ca4565b8015610c035780601f10610bd857610100808354040283529160200191610c03565b820191906000526020600020905b815481529060010190602001808311610be657829003601f168201915b5050505050806020019051810190610c1b9190611eb8565b9050610c2960006007610f1e565b505b60056000541415610cdd57600060028054610c4590611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7190611ca4565b8015610cbe5780601f10610c9357610100808354040283529160200191610cbe565b820191906000526020600020905b815481529060010190602001808311610ca157829003601f168201915b5050505050806020019051810190610cd69190611ef0565b5192915050565b61044860006007610f1e565b600060016000541415610da657600060028054610d0590611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3190611ca4565b8015610d7e5780601f10610d5357610100808354040283529160200191610d7e565b820191906000526020600020905b815481529060010190602001808311610d6157829003601f168201915b5050505050806020019051810190610d969190611e3d565b9050610da46000600b610f1e565b505b60026000541415610e6157600060028054610dc090611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610dec90611ca4565b8015610e395780601f10610e0e57610100808354040283529160200191610e39565b820191906000526020600020905b815481529060010190602001808311610e1c57829003601f168201915b5050505050806020019051810190610e519190611eb8565b9050610e5f6000600b610f1e565b505b60056000541415610f1657600060028054610e7b90611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610ea790611ca4565b8015610ef45780601f10610ec957610100808354040283529160200191610ef4565b820191906000526020600020905b815481529060010190602001808311610ed757829003601f168201915b5050505050806020019051810190610f0c9190611ef0565b6040015192915050565b6104486000600b5b816107215760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610f54600560005414601a610f1e565b8151610f6f901580610f6857508251600154145b601b610f1e565b600080805560028054610f8190611ca4565b80601f0160208091040260200160405190810160405280929190818152602001828054610fad90611ca4565b8015610ffa5780601f10610fcf57610100808354040283529160200191610ffa565b820191906000526020600020905b815481529060010190602001808311610fdd57829003601f168201915b50505050508060200190518101906110129190611ef0565b90507f084121185c5fdf2faacce7305142970e995cfb107e6638503c8acd2b562d6ec383604051611043919061215e565b60405180910390a1600060208401515151600181111561106557611065611f8e565b141561114e5761107734156017610f1e565b805161108f906001600160a01b031633146018610f1e565b604051600081527fd490ad978a298d4e349f2fdca2dfc06a66bda8efbf69c0921eaf7e46260b6ed89060200160405180910390a1600082526110cf611a27565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608085015184518201526080808601518386018051919091528051600094019390935282514394019390935260a085015182519091015260c084015190519091015261114881611729565b50505050565b600160208401515151600181111561116857611168611f8e565b141561123e5761117a34156019610f1e565b604051600081527fcdae1f7508ce108de5b40cc66c67b7d672b92f257f888810196ba4b06f0c8fab9060200160405180910390a1600060208301526111bd611a27565b815181516001600160a01b039182169052602080840151835190910152604080840151835192169101526060808301518251909101526080820151611204906001906121b5565b60208083018051929092528151600191015280514360409091015260a083015181516060015260c083015190516080015261114881611729565b505050565b6112536001600054146012610f1e565b815161126e90158061126757508251600154145b6013610f1e565b60008080556002805461128090611ca4565b80601f01602080910402602001604051908101604052809291908181526020018280546112ac90611ca4565b80156112f95780601f106112ce576101008083540402835291602001916112f9565b820191906000526020600020905b8154815290600101906020018083116112dc57829003601f168201915b50505050508060200190518101906113119190611e3d565b905061133760405180606001604052806000815260200160008152602001600081525090565b7f0ba6ef113ede74aca8f2e2ffc914e9041fdf8b493228a62412e804737dd451cf8460405161136691906121cd565b60405180910390a1600060208501515151600181111561138857611388611f8e565b141561146e57602080850151510151815260408201516113ab903414600d610f1e565b80516113bb90600214600e610f1e565b60408201516113ca908061220a565b81602001818152505081602001516001600160a01b03166108fc83604001519081150290604051600060405180830381858888f19350505050158015611414573d6000803e3d6000fd5b5061141d611a67565b82518152602080830151818301526002600055436001556040516114439183910161225f565b60405160208183030381529060405260029080519060200190611467929190611a87565b5050611148565b600160208501515151600181111561148857611488611f8e565b141561114857602084015151604090810151908201526114aa3415600f610f1e565b6114cd82606001516001600160a01b0316336001600160a01b0316146010610f1e565b61150460018260400151146114e35760006114fd565b82602001516001600160a01b0316336001600160a01b0316145b6011610f1e565b6000808055600181905561114890600290611b0b565b61152a6002600054146015610f1e565b815161154590158061153e57508251600154145b6016610f1e565b60008080556002805461155790611ca4565b80601f016020809104026020016040519081016040528092919081815260200182805461158390611ca4565b80156115d05780601f106115a5576101008083540402835291602001916115d0565b820191906000526020600020905b8154815290600101906020018083116115b357829003601f168201915b50505050508060200190518101906115e89190611eb8565b905061161160408051608081018252600060208201818152928201819052606082015290815290565b604080518551815260208087015180515182840152908101516001600160a01b031682840152820151606082015290517fef88e96a1da970cbb0a24296224054a906453e071caf9be7995aa47d2e576ae49181900360800190a1805160009052815151602090810151825190910152815151604090810151825190151591015261169d34156014610f1e565b6116a5611a27565b805133905260208581018051518351830152805182015183516001600160a01b039091166040918201529051810151835160600152818301805160009081905281516001940193909352514391015283518351611702929061184e565b602080830180516060019290925284015190516080015261172281611729565b5050505050565b806020015160200151156117d35761173f611b45565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015283516060908101518185015281850180515160808087019190915281519092015160a086015251015160c084015260056000554360015590516117af91839101612298565b6040516020818303038152906040526002908051906020019061123e929190611a87565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611815573d6000803e3d6000fd5b5080516040810151905160208301516060015151516118359291906118c2565b6000808055600181905561184b90600290611b0b565b50565b611856611b80565b60005b60018110156118a25784816001811061187457611874612282565b602002015182826001811061188b5761188b612282565b60200201528061189a816122fe565b915050611859565b50818184600181106118b6576118b6612282565b60200201529392505050565b6118cd8383836118d6565b61123e57600080fd5b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161193591612319565b60006040518083038185875af1925050503d8060008114611972576040519150601f19603f3d011682016040523d82523d6000602084013e611977565b606091505b5091509150611988828260026119a7565b508080602001905181019061199d9190612335565b9695505050505050565b606083156119b65750816119e2565b8251156119c65782518084602001fd5b60405163100960cb60e01b815260048101839052602401610f3b565b9392505050565b604051806040016040528060008152602001611a2260408051608081018252600060208201818152928201819052606082015290815290565b905290565b6040805160c08101825260008183018181528351602080820190955282815260608401526080830182905260a08301919091528152908101611a22611bcb565b6040518060400160405280611a7a611b80565b8152602001600081525090565b828054611a9390611ca4565b90600052602060002090601f016020900481019282611ab55760008555611afb565b82601f10611ace57805160ff1916838001178555611afb565b82800160010185558215611afb579182015b82811115611afb578251825591602001919060010190611ae0565b50611b07929150611bf5565b5090565b508054611b1790611ca4565b6000825580601f10611b27575050565b601f01602090049060005260206000209081019061184b9190611bf5565b6040805160e081018252600080825282516020808201855282825283015291810182905260608101829052608081019190915260a08101611a7a5b60405180602001604052806001905b611bb5604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611b8f5790505090565b6040518060a001604052806000815260200160001515815260200160008152602001611a7a611b80565b5b80821115611b075760008155600101611bf6565b600060808284031215611c1c57600080fd5b50919050565b600060808284031215611c3457600080fd5b6119e28383611c0a565b60005b83811015611c59578181015183820152602001611c41565b838111156111485750506000910152565b8281526040602082015260008251806040840152611c8f816060850160208701611c3e565b601f01601f1916919091016060019392505050565b600181811c90821680611cb857607f821691505b60208210811415611c1c57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611d1257611d12611cd9565b60405290565b6040516060810167ffffffffffffffff81118282101715611d1257611d12611cd9565b6040805190810167ffffffffffffffff81118282101715611d1257611d12611cd9565b60405160e0810167ffffffffffffffff81118282101715611d1257611d12611cd9565b801515811461184b57600080fd5b600082601f830112611da057600080fd5b611da8611cef565b80606080850186811115611dbb57600080fd5b855b81811015611e0c57828189031215611dd55760008081fd5b611ddd611d18565b8151815260208083015181830152604080840151611dfa81611d81565b90830152908652909401938201611dbd565b50919695505050505050565b6001600160a01b038116811461184b57600080fd5b8051611e3881611e18565b919050565b600060c08284031215611e4f57600080fd5b6040516080810181811067ffffffffffffffff82111715611e7257611e72611cd9565b604052611e7f8484611d8f565b81526060830151611e8f81611e18565b60208201526080830151604082015260a0830151611eac81611e18565b60608201529392505050565b600060808284031215611eca57600080fd5b611ed2611d3b565b611edc8484611d8f565b815260609290920151602083015250919050565b6000818303610120811215611f0457600080fd5b611f0c611d5e565b8351611f1781611e18565b81526020601f1983011215611f2b57600080fd5b611f33611cef565b915060208401518252816020820152611f4e60408501611e2d565b60408201526060840151606082015260808401516080820152611f748560a08601611d8f565b60a0820152610100939093015160c0840152509092915050565b634e487b7160e01b600052602160045260246000fd5b6002811061184b57600080fd5b60008183036080811215611fc457600080fd5b611fcc611d3b565b833581526060601f1983011215611fe257600080fd5b611fea611cef565b9150611ff4611d18565b602085013561200281611fa4565b81526040858101356020808401919091526060909601359082015282529283015250919050565b6000818303608081121561203c57600080fd5b612044611d3b565b833581526060601f198301121561205a57600080fd5b612062611cef565b915061206c611d18565b602085013561207a81611fa4565b8152604085013561208a81611d81565b6020820152606085013561209d81611d81565b6040820152825260208101919091529392505050565b600081830360808112156120c657600080fd5b6120ce611d3b565b83358152601f198201915060608212156120e757600080fd5b6120ef611d18565b60208312156120fd57600080fd5b612105611cef565b6020860135815281526040850135925061211e83611e18565b8260208201526060850135604082015280602083015250809250505092915050565b6002811061184b57634e487b7160e01b600052602160045260246000fd5b81518152602082015151805160808301919061217981612140565b806020850152506020810151151560408401526040810151151560608401525092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156121c8576121c861219f565b500190565b8151815260208201515180516080830191906121e881612140565b8060208501525060208101516040840152604081015160608401525092915050565b60008282101561221c5761221c61219f565b500390565b8060005b6001811015611148578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612225565b6000608082019050612272828451612221565b6020830151606083015292915050565b634e487b7160e01b600052603260045260246000fd5b60006101208201905060018060a01b03808451168352602084015151602084015280604085015116604084015250606083015160608301526080830151608083015260a08301516122ec60a0840182612221565b5060c083015161010083015292915050565b60006000198214156123125761231261219f565b5060010190565b6000825161232b818460208701611c3e565b9190910192915050565b60006020828403121561234757600080fd5b81516119e281611d8156fea2646970667358221220edf85b524008a9e6953b5e5b08d67ea0dcfd556244a44741995c00e92657a54b64736f6c634300080c0033`,
  BytecodeLen: 10218,
  Which: `oD`,
  version: 6,
  views: {
    admin: `admin`,
    count: `count`,
    name: `name`,
    price: `price`,
    token: `token`
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
    at: './interface.rsh:86:3:after expr stmt',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './interface.rsh:56:17:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:40:4:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
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
  "Admin": Admin,
  "Constructor": Constructor,
  "Contractee": Contractee,
  "Verifier": Verifier,
  "destroy": destroy,
  "incr": incr
  };
export const _APIs = {
  destroy: destroy,
  incr: incr
  };
