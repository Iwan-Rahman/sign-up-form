let email = document.querySelector("input[type='email']");
let phone = document.querySelector("input[type='tel']");

let password = document.querySelector("input[type='password']");
let confirmPassword = document.querySelector("#confirmPassword");

email.addEventListener('change',emailOrPhone);
phone.addEventListener('change',emailOrPhone);
confirmPassword.addEventListener('change',checkPassword);

function emailOrPhone(){
  email.setAttribute('required',true);
  phone.setAttribute('required',true);

  if(email.checkValidity()){
    phone.removeAttribute('required');
  }else if(phone.checkValidity()){
    email.removeAttribute('required');
  }
}

function checkPassword(){
  if(confirmPassword.value != password.value){
    confirmPassword.setCustomValidity("Password does not match");
    confirmPassword.reportValidity();
  }else{
    confirm.setCustomValidity();
  }
}