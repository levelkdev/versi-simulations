import { web3Provider, web3 } from '../utils/w3'
import Versi from 'versi'

export default async function () {
  await doThing()
}

async function doThing() {
  const versi = new Versi(web3Provider, web3, {
    from: web3.eth.accounts[0],
    gas: 4500000
  })
  const tx = await versi.issueVersiEtherToken()
  console.log(tx.output())
}
