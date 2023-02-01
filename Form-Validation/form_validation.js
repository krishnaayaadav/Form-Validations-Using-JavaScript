
// this function will validate login form inputs values
function formValidator(){
   
  /* 
    In this function we performing field validation for example we are validating username and userpassword
    If this function will return true than only login form will submited
    otherwise it will not goin to submit anymore
    */

   // username validation here
   let username = document.getElementById('username');
   let user_error = document.getElementById('userError');
 
   // if username is empty or null underfined
   if(username.value == '' || username.value == undefined){
    user_error.innerHTML = 'Username is required!';
    return false;
   }
  
  
  else if(username.value.length < 4){
  user_error.innerHTML = 'Username must 4 have characters!';
    document.get
    return false;
  
   }

   // password validation here
   let password = document.getElementById('password');      // getting password value
   let pass_error = document.getElementById('passError');   // getting password error message element as p tag hai jo

   if(password.value == ''){ // password is blank
    pass_error.innerHTML = 'Password is required!';
    return false;

   }
   else if(password.value.length < 4){ // if password is less than 4 characters
    pass_error.innerHTML = 'Password must have 4 characters!';
    return false;

   }
   
   return true; // now login form will submitted to the server

       

}


let name = 'krishn23';
let number = [0,1,2,3,4,5,6,7,8,9]
