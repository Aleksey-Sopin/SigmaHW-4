"use strict"
let stringName = document.querySelector('.sing-up__input-name')
let stringSurname = document.querySelector('.sing-up__input-surname')
let inputEmail = document.querySelector('.sing-up__input-email')
let submit = document.querySelector('.sing-up__submit')
let Myform = document.querySelector('.sing-up__form')
let winBlock = document.querySelector('.win')
// -----------------------------
// обьект для данных пользователя
let date = {
  Name : this.stringName,
  Surname: this.stringSurname,
  Email : this.inputEmail
}
// ---------------------------------
// валидация емаил
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}
function updateInput() {
  if (validateEmail(inputEmail.value)) inputEmail.style.border = '1px solid green';
  else inputEmail.style.border = '1px solid red';
}
// --------------------------------------
// валидация имени + surname
let regExp = /^[A-Z][a-z]*$/
function validateName(value) {
  return regExp.test(value)
}
function updateInputName(string) {
  if (validateName(string.value)) {string.style.border = '1px solid green';}
  else {string.style.border = '1px solid red';}
}
// что-то делаем если ввели Sigma
// проверка на "SIGMA"
let sigma = 'Sigma'
function getSigma(value) {
  return value.includes(sigma)
}
// анимация Sigma
function youAreWinSale(){
    getWinBlock()
    setTimeout( revomeWinBlock, 5000)
}
function getWinBlock(){
  winBlock.style.display = 'block'
}
function revomeWinBlock(){
  winBlock.style.display = 'none'
}
// отправка формы 
submit.addEventListener('click', ()=>{

  stringName.addEventListener('input', updateInputName(stringName));
  date.Name = stringName.value
  
  stringSurname.addEventListener('input', updateInputName(stringSurname));
  date.Surname = stringSurname.value

  inputEmail.addEventListener('input', updateInput);
  date.Email = inputEmail.value

  localStorage.setItem('date', JSON.stringify(date));
// из ДЖСОН в Обьект
  let result = localStorage.getItem('date')
  result = JSON.parse(result)

  for (const key in result) {
    if (Object.hasOwnProperty.call(result, key)) {
      const element = result[key];
      if(getSigma(element) == true){
        youAreWinSale()
      }
    }
  }
  Myform.reset() 
  localStorage.clear()
})
// currect Data
const winDate = new Date()

let winDateView = document.querySelector('.win__title span')
if(winDateView){
  winDateView.innerHTML = winDate.toLocaleString();
}
