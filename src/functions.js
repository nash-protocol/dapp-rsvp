import axios from 'axios'

const { REACT_APP_NETWORK_PROVIDER, REACT_APP_NETWORK } = process.env
const networkEnv = REACT_APP_NETWORK || localStorage.getItem('networkEnv') || "ALGO"
const providerEnv = REACT_APP_NETWORK_PROVIDER || localStorage.getItem('providerEnv') || "TestNet"

let algoexplorerapi_endpoint
let algoexplorer
let indexer_endpoint
if (providerEnv === "MainNet") {
  algoexplorerapi_endpoint = 'https://algoexplorerapi.io'
  algoexplorer = 'https://algoexplorer.io'
  indexer_endpoint = 'https://algoindexer.algoexplorerapi.io'
} else {
  algoexplorerapi_endpoint = 'https://node.testnet.algoexplorerapi.io'
  algoexplorer = 'https://node.testnet.algoexplorer.io'
  indexer_endpoint = 'https://algoindexer.testnet.algoexplorerapi.io'
}

export const getAccountInfo = async (addr) => {
  return (
    await axios.get(`${indexer_endpoint}/v2/accounts/${addr}`)
  )?.data;
};

export const getAppInfo =
  async (appId) =>
    await axios.get(`${algoexplorerapi_endpoint}/v2/applications/${appId}`)

export const getMinBalance = (ai) => {
  console.log({ai})
  let appsTotalSchema = ai['apps-total-schema']
  let createdApps = ai['created-apps']
  let numByteSlice = appsTotalSchema['num-byte-slice']
  let numUInt = appsTotalSchema['num-uint']
  let assets = ai.assets
  return assets.length * 100000
    + (25000 + 3500) * numUInt
    + (25000 + 25000) * numByteSlice
    + (100000) * createdApps.length
    + 100000
}

/*
 * splitAddres
 * convers text containing addrs to addr array
 */
export const splitAddrs = (addrs) =>
  String(addrs)
    .replace(/ /g, ',')
    .replace(/,/g, String.fromCharCode(10))
    .split(String.fromCharCode(10))
    .map(el => String(el).trim())
    .filter(el => !!el)

/*
 * formatMnemonic
 * - formates mnemonic phrase for reach stdlib new account from mnemonic func
 * + accepts comma and space separated formats
 */
export const formatMnemonic = (mn) =>
  mn?.replace(/, /g, ' ') || ""

export const formatCompactAddress = (address) =>
  String(address).substr(0, 5).concat("...").concat(String(address).substr(-5))

export const getStoredAsset = (assetId) =>
  (key => JSON.parse(localStorage.getItem(key)))
    (`${providerEnv.toLocaleLowerCase()}-asset-${assetId}`)


export const searchV1 = async (name) => 
  (await axios.get(`https://algoexplorerapi.io/v1/search/${name}`))?.data

export const searchAssets = async (params = {}) =>
  (await axios.get(`https://indexer.algoexplorerapi.io/v2/assets`, {
    params: {
      ...params,
    }
  }))?.data

export const getRichList = async (assetIndex, params = {}) =>
  (await axios.get(`https://indexer.algoexplorerapi.io/stats/v2/accounts/rich-list`, {
    params: {
      ...params,
      'asset-id': assetIndex
    }
  }))?.data


export const getHolders = async (assetIndex, params = {}) =>
  (await axios.get(`https://algoindexer.algoexplorerapi.io/v2/accounts`, {
    params: {
      ...params,
      'asset-id': assetIndex
    }
  }))?.data

export const getAsset = async (assetIndex) =>
  (await axios.get(`${algoexplorerapi_endpoint}/v1/asset/${assetIndex}`))?.data

export const getAssetBalances = async (assetIndex, params = {}) =>
  (await axios.get(`${indexer_endpoint}/v2/assets/${assetIndex}/balances`, { params }))?.data

export const getAllAssetBalances = async (assetIndex) => {
  let balances = []
  let next = null
  do {
    let res
    if (next) {
      res = await getAssetBalances(assetIndex, { 'include-all': false, limit: 1000, next })
    } else {
      res = await getAssetBalances(assetIndex, { 'include-all': false, limit: 1000 })
    }
    next = res['next-token']
    balances.push(res?.balances || [])
    console.log(res['next-token'])
  } while (!!next)
  return balances.flatMap(el => el)
}

export const somethingFromSome = (f, d) => (some) => some[1] ? f(some[1]) : d

/* code from beegan */

// FORMAT CURRENCY

/**
 * Collection of functions for formatCurrency custom utility.
 * will eventually be moved to stdlib
 */
function ldrop(str/*: string*/, char/*: string*/) {
  while (str[0] === char) {
    // eslint-disable-next-line no-param-reassign
    str = str.slice(1)
  }
  return str
}
function rdrop(str/*: string*/, char/*: string*/) {
  while (str[str.length - 1] === char) {
    // eslint-disable-next-line no-param-reassign
    str = str.slice(0, str.length - 1)
  }
  return str
}
function lpad(str/*: string*/, padChar/*: string*/, nChars/*: number*/) {
  const padding = padChar.repeat(Math.max(nChars - str.length, 0))
  return padding + str
}

export const formatCurrencyFromSome2 = (stdlib, some, decimal = 4) =>
  somethingFromSome((some) => formatCurrency(stdlib)(some, decimal), 0)(some)

export const formatCurrency = (stdlib) => (amt/*: any*/, decimals = 6)/*: string*/ => {
  if (!(Number.isInteger(decimals) && decimals >= 0)) {
    throw Error(
      `Expected decimals to be a nonnegative integer, but got ${decimals}.`,
    )
  }
  const amtStr = stdlib.bigNumberify(amt).toString()
  const splitAt = Math.max(amtStr.length - decimals, 0)
  const lPredropped = amtStr.slice(0, splitAt)
  const l = ldrop(lPredropped, '0') || '0'
  if (decimals === 0) {
    return l
  }
  const rPre = lpad(amtStr.slice(splitAt), '0', decimals)
  const rSliced = rPre.slice(0, decimals)
  const r = rdrop(rSliced, '0')

  return r ? `${l}.${r}` : l
}

// PARSE CURRENCY

/**
 *
 * @param {string|number} addr
 * @param {number} decimals (optional)
 * @returns big number to consumed by a reach program
 */
export const getAmtForContract = (stdlib) => (
  amount,/*: string | number,*/
  decimals/*?: number,*/
) => {
  const numericAmt/*: number*/ = stdlib.isBigNumber(amount)
    ? amount.toNumber()
    : typeof amount === 'string'
      ? parseFloat(amount)
      : typeof amount === 'bigint'
        ? Number(amount)
        : amount
  const conUnit = getConUnit(decimals)
  const value = numericAmt * conUnit
  return stdlib.bigNumberify(Math.floor(value))
}

export const getConUnit = (decimals) => 10 ** decimals

// image utils

export const getUrlPath = (url) =>
  ((delimeter) =>
    url.split(delimeter).slice(2).join(delimeter))
    ('/')

export const placeholderImage = 'https://via.placeholder.com/1024'

export const getCFIPFSUrl = (path) =>
  `https://cloudflare-ipfs.com/ipfs/${path}`

export const getCFIPFS =
  async (path) =>
    await axios.get(getCFIPFSUrl(path))

export const fetchAssetImage =
  async (assetIndex) => {
    let image
    let contentType
    try {
      const asset = (await getAsset(assetIndex))?.data
      console.log({asset})
      let url = asset?.url
      if (url === undefined) {
        return placeholderImage
      }
      if (url.indexOf('ipfs://') === 0) {
        return 'https://cloudflare-ipfs.com/ipfs/' + url.split('/').slice(2).join('/')
      }
      let res = await axios.get(url)
      contentType = res?.headers['content-type'] ?? ""
      console.log({ contentType })
      switch (contentType) {
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
          image = url
          return image
        case 'text/json':
        default:
          break
      }
      if (url.indexOf('ipfs') !== -1) {
        if (url.indexOf('json') !== -1) {
          // url is metadata json with relative path to image
          const maybeImage = (await getCFIPFS(getUrlPath(url))).data
          var path = require('path')
          image = [path.dirname(url), maybeImage.image].join('/')
        } else {
          if (url.indexOf('pinata') === -1) {
            // TODO url is another ipfs resource
            const maybeMetadata = (await getCFIPFS(getUrlPath(url))).data
            if (maybeMetadata.image.indexOf('ipfs') !== -1) {
              // use gateway url
              image = getCFIPFSUrl(getUrlPath(maybeMetadata.image))
            } else {
              // use url as is
              image = maybeMetadata.image
            }
          } else {
            // pinata url contains image
            image = url
          }
        }
      } else {
        // url may be gateway url
        image = url
      }
    } catch (e) {
      // use placeholder as fallback
      image = placeholderImage
    }
    return image
  }
