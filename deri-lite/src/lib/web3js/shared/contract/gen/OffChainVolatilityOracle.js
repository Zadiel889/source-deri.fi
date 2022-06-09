// this file is generated by script, don't modify it !!!
import { ContractBase } from '../../../shared/contract/contract_base.js'
import { deleteIndexedKey } from '../../../shared/utils/web3.js'
import { offChainVolatilityOracleAbi } from '../abi/offChainVolatilityOracleAbi.js'

export class OffChainVolatilityOracle extends ContractBase {
  // init
  constructor(chainId, contractAddress, initialBlock) {
    super(chainId, contractAddress, offChainVolatilityOracleAbi)
    // for pool use
    if (initialBlock) {
      this.initialBlock = initialBlock
    }
  }

  // query
  //  async delayAllowance() {
  //    const res = await this._call('delayAllowance', [])
  //    return deleteIndexedKey(res)
  //  }
  async getVolatility() {
    const res = await this._call('getVolatility', [])
    return deleteIndexedKey(res)
  }
  async signer() {
    const res = await this._call('signer', [])
    return deleteIndexedKey(res)
  }
  async symbol() {
    const res = await this._call('symbol', [])
    return deleteIndexedKey(res)
  }
  //  async timestamp() {
  //    const res = await this._call('timestamp', [])
  //    return deleteIndexedKey(res)
  //  }
   async volatility() {
     const res = await this._call('volatility', [])
     return deleteIndexedKey(res)
   }

  // tx
  //  async setDelayAllowance(accountAddress, delayAllowance_) {
  //    return await this._transact('setDelayAllowance', [delayAllowance_], accountAddress)
  //  }
  //  async setSigner(accountAddress, signer_) {
  //    return await this._transact('setSigner', [signer_], accountAddress)
  //  }
  //  async updateVolatility(accountAddress, timestamp_, volatility_, v_, r_, s_) {
  //    return await this._transact('updateVolatility', [timestamp_, volatility_, v_, r_, s_], accountAddress)
  //  }

}