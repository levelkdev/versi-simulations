import { web3Provider, web3 } from '../utils/w3'
import Versi from 'versi'

const { accounts } = web3.eth

export default async function () {
  await doThing()
}

async function doThing() {
  const versi = new Versi(web3Provider, web3, {
    from: accounts[0],
    gas: 4500000
  })
  const tx = await versi.buyVersiEther(2.5)
  console.log(tx.output())

  const b = await versi.versiEtherBalance(accounts[0])
  console.log(`balance=${b}`)
}
