import './style.css'
import { getBitcoinIndex } from './counter.ts'
let data = await getBitcoinIndex('https://api.coindesk.com/v1/bpi/currentprice.json')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>Bitcoin Price Today</h1>
    <span>${data.rate} ${data.symbol}</span>
  </div>
`