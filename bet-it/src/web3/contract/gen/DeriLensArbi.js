// this file is generated by script, don't modify it !!!
import { ContractBase } from '../contract_base.js'
import { deleteIndexedKey } from '../../utils/lang.js'
import { deriLensArbiAbi } from '../abi/deriLensArbiAbi.js'
import { ZERO_ADDRESS } from '../../utils/constant.js'

export class DeriLensArbi extends ContractBase {
  // init
  constructor(chainId, contractAddress, opts = {}) {
    super(chainId, contractAddress, deriLensArbiAbi, opts.isNodeEnv)
    // for pool use
    this.initialBlock = opts.initialBlock || ""
  }

  // query
  async getInfo(pool_, account_ = ZERO_ADDRESS, pvs = []) {
    const res = await this._call('getInfo', [pool_, account_, pvs])
    return deleteIndexedKey(res)
  }
  async getLpInfo(pool_, account_ = ZERO_ADDRESS) {
    const res = await this._call('getLpInfo', [pool_, account_])
    return deleteIndexedKey(res)
  }
  async getMarketsInfo(pool_) {
    const res = await this._call('getMarketsInfo', [pool_])
    return deleteIndexedKey(res)
  }
  async getPoolInfo(pool_) {
    const res = await this._call('getPoolInfo', [pool_])
    return deleteIndexedKey(res)
  }
  async getSymbolsInfo(pool_, pvs = []) {
    const res = await this._call('getSymbolsInfo', [pool_, pvs])
    return deleteIndexedKey(res)
  }
  async getTdInfo(pool_, account_ = ZERO_ADDRESS) {
    const res = await this._call('getTdInfo', [pool_, account_])
    return deleteIndexedKey(res)
  }
  async nameId() {
    const res = await this._call('nameId', [])
    return deleteIndexedKey(res)
  }
  async versionId() {
    const res = await this._call('versionId', [])
    return deleteIndexedKey(res)
  }

  // tx


}