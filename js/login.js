let username=document.getElementById('username');
let password=document.getElementById('password');
let submet_btn=document.getElementById('login-btn');
let warning=document.getElementById('warning');

let current_username=localStorage.getItem('username');
let current_password=localStorage.getItem('password');

submet_btn.addEventListener('click',function(e)
{
    e.preventDefault();
    if(username.value===current_username && password.value===current_password)
    {
      warning.innerHTML="Please, wait";
      setTimeout(() => {
        window.location='html.html';
      }, 1500);
    }else
    {
     warning.innerHTML="Invalid username or password";
    }
})
