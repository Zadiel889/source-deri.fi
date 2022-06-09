// this file is generated by script, don't modify it !!!
import { ContractBase } from '../../../shared/contract/contract_base.js'
import { deleteIndexedKey, bg } from '../../../shared/utils/index.js'
import { ERC20Abi } from '../abi/ERC20Abi.js'

export class ERC20 extends ContractBase {
  // init
  constructor(chainId, contractAddress, initialBlock) {
    super(chainId, contractAddress, ERC20Abi)
    // for pool use
    if (initialBlock) {
      this.initialBlock = initialBlock
    }
  }

  // query
  async allowance(owner, spender) {
    const res = await this._call('allowance', [owner, spender])
    return deleteIndexedKey(res)
  }
  async _balanceOf(account) {
    return await this._call('balanceOf', [account])
  }
  async balanceOf(address) {
    const [res, decimals] = await Promise.all([
      this._balanceOf(address),
      this.decimals(),
    ]);
    return bg(res, -decimals).toString();
  }

   async decimals() {
     const res = await this._call('decimals', [])
     return deleteIndexedKey(res)
   }
   async name() {
     const res = await this._call('name', [])
     return deleteIndexedKey(res)
   }
  async symbol() {
    const res = await this._call('symbol', [])
    return deleteIndexedKey(res)
  }
  async totalSupply() {
    const res = await this._call('totalSupply', [])
    return deleteIndexedKey(res)
  }

  // tx
  async approve(accountAddress, spender, amount, opts) {
    return await this._transact('approve', [spender, amount], accountAddress, opts)
  }
  //  async transfer(accountAddress, to, amount) {
  //    return await this._transact('transfer', [to, amount], accountAddress)
  //  }
  //  async transferFrom(accountAddress, from, to, amount) {
  //    return await this._transact('transferFrom', [from, to, amount], accountAddress)
  //  }

}