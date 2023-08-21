import './style.css'
import { setupTimer } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1><span id="counter"></span></h1>
  </div>
`

setupTimer()

setInterval(function () {
  var currentTime = setupTimer();
  const span = document.getElementById("counter") as HTMLSpanElement;
  span.innerHTML = currentTime
}, 1000);
