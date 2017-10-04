import { web3Provider, web3 } from '../utils/w3'
import { VersiProvider } from 'versi'

const { accounts } = web3.eth

export default async function () {
  let tx
  const versi = VersiProvider(web3Provider, web3, {
    from: accounts[0],
    gas: 4500000
  })
  tx = await versi.exchange.buyVersiEther(3)
  console.log(tx.output())

  await logBalances()

  tx = await versi.exchange.sellVersiEther(3)
  console.log(tx.output())
  
  await logBalances()

  async function logBalances() {
    const b = await versi.exchange.versiEtherBalance(accounts[0])
    console.log(`VSI-ETH balance for account[0]=${b}`)
    console.log(`pool balance = ${await versi.pool.value()}`)
  }

}
