import { web3Provider, web3 } from '../utils/w3'
import Versi from 'versi'

const { accounts } = web3.eth

export default async function () {
  let tx
  const versi = new Versi(web3Provider, web3, {
    from: accounts[0],
    gas: 4500000
  })
  tx = await versi.buyVersiEther(3)
  console.log(tx.output())

  // tx = await versi.sellVersiEther(1)
  // console.log(tx.output())

  const b = await versi.versiEtherBalance(accounts[0])
  console.log(`VSI-ETH balance for account[0]=${b}`)

  console.log(`pool balance = ${await versi.poolValue()}`)
}
