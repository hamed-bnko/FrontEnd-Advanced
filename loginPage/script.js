// 1. Navigation DOM - done
// 2. Add event listeners - done
// 3. Add button state - done
// 4. Email validation
// 5. Password validation

var loginForm = document.getElementById('loginForm');
var email = document.getElementById('email');
var password = document.getElementById('password');
var emailValidation = document.getElementById('emailValidation');
var passwordValidation = document.getElementById('passwordValidation');
var button = document.querySelector('[type=submit]');



function validateEmailField(event) {
    // 1. Data exist
    if(event.target.value === "") return {emailValid : false ,emailMessage: "Email Faild can not be Empty"}
    
    // 2. Required symbol @
    if(!event.target.value.includes('@'))  return {emailValid : false ,emailMessage: 'Check email format (example: test@test.com)'}
     
    return  {emailValid : true }
}

function validatePasswordField(event) {
    // 1. Data exist
    if(event.target.value === "") return {passValid : false , passMessage : "Password Faild can not be Empty"}
    // 2. Minimum 4 symbols
    // 3. Maximum 8 symbols
    if(event.target.value === "") return {passValid : false , passMessage : "Password must be between 4 & 8 Characters"}
    return {passValid : true}
}

const {passValid , passMessage }  = validatePasswordField
const {emailValid , emailMessage }  = validateEmailField

button.disabled = !passValid & !emailValid





email.addEventListener('input', validateEmailField);
password.addEventListener('input', validatePasswordField);
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

})

