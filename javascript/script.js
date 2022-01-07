const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



//Show error input message
function showError(input,message){
   const formControl = input.parentElement;
   formControl.className = 'form-control error'
   const small = formControl.querySelector('small');
   small.innerText = message;

}

//Show success input message

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'

}


function checkEmail(input){
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(regex.test(input.value.trim())){
      showSuccess(input);
   }
   else {
       showError(input,'Email is not valid');
   }
}

//Check passwords match

function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Passwords do not match');
    }
    else{
        showSuccess(input2);
    }
}



function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray){
   inputArray.forEach(function(input){
       if(input.value.trim() === '') {
           showError(input,`${getFieldName(input)} is required`);
       }
       else {
           showSuccess(input);
       }
   })
}

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
         showError(input,`${getFieldName(input)} must be less then ${max} characters`)
    }
    else {
        showSuccess(input);
    }
}


//Event Listener
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,15);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
    
})
