import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Password Strength Checker</h1>
    <input id="password" type="password"></input>
    <button id="button">Test Password</button>
    <div class="card">
      <Span></span>
      <h3>You should have a Strength score of 100 to have a secure password</h3>
    </div>
  </div>
`

let button = document.querySelector('#button') as HTMLButtonElement
let password = document.querySelector('#password') as HTMLInputElement
let span = document.querySelector('span') as HTMLSpanElement

button.addEventListener('click', () => {
  let currentPassword = password.value
  let LetterScore = currentPassword.replace(/[^a-zA-Z]/gi, "").length;
  let numberScore = currentPassword.replace(/[^0-9]/gi, "").length * 10
  let specialScore = currentPassword.replace("[!@#%^&*()_+-=[]{}|;':,./<>?~]", "").length * 10

  specialScore = specialScore - numberScore - LetterScore

  let StrengthScore = LetterScore + numberScore + specialScore
  span.innerHTML = `Your strength score is: ${StrengthScore}`

  console.log(LetterScore, numberScore, specialScore);

})