function button(params) {
   
   let first_name=document.getElementById('First Name')
   let error_name=document.getElementById('error-message-name')
 
   let last_name=document.getElementById('Last Name')
   let error_last=document.getElementById('error-message-lastname')
 
   let email=document.getElementById('Email')
   let error_email=document.getElementById('error-message-email')
 
 
   let password=document.getElementById('Password')
   let error_password=document.getElementById('error-message-password')
 
  
 function first_name_btn(params) {
    let get_name=first_name.value 
    if (get_name=='') {
     first_name.classList.add('input')
     error_name.innerHTML='First Name cannot be empty'
    }
    else{
    return get_name
    }
 }
 first_name_btn()
 
 
 function  last_name_btn(params) {
     let get_last=last_name.value 
     if (get_last =='') {
     last_name.classList.add('input')
      error_last.innerHTML='Last Name cannot be empty'
     }
     else{
     return get_last
     }
  }
  last_name_btn()
 
 
 
 
  
 function email_btn(params) {
     let get_email=email.value 
     if (get_email=='') {
      
      email.classList.add('input')
      email.placeholder = 'email@example/com'
      error_email.innerHTML='Looks like this is not an Email  '
     }
     else{
     return get_email
     }
  }
  email_btn()
  
  
  function password_btn(params) {
     let get_password=password.value 
     if (get_password=='') {
       
     password.classList.add('input')
     
      error_password.innerHTML='Password cannot be empty'
     }
     else{
       
      return get_password
     }
  }
 password_btn()
  
  }
 
  