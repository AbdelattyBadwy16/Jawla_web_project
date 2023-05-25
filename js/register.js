let username=document.getElementById('username');
let name=document.getElementById('name');
let password=document.getElementById('password');
let cpassword=document.getElementById('cpassword');
let email=document.getElementById('email');
let city=document.getElementById('city');
let ch_btn=document.getElementById('check');
let submet_btn=document.getElementById('sub_btn');
let warning=document.getElementById('warning');

submet_btn.addEventListener('click',
function validate(e)
{
    e.preventDefault();
    if(name.value.length<4)
    {
      warning.innerHTML='Name must be more 4 char';
    }
    else if(username.value.length<4)
    {
      warning.innerHTML='UserName must be more 4 char';
    }else if(email.value.length===0)
    {
      warning.innerHTML='Email has empty';
    }else if(password.value.length<4)
    {
      warning.innerHTML='Password must be more 8 char';
    }else if(cpassword.value.length===0)
    {
      warning.innerHTML='Confirm Password has empty';
    }else if(city.value==='City')
    {
      warning.innerHTML='Choose City please';
    }else if(!ch_btn.checked)
    {
      warning.innerHTML='Must Checked the button';
    }else
    {
      if(password.value!=cpassword.value)
      {
        warning.innerHTML='Password not equal';
      }
      else
      {
      localStorage.setItem('name',name.value);
      localStorage.setItem('username',username.value);
      localStorage.setItem('password',password.value);
      localStorage.setItem('cpassword',cpassword.value);
      localStorage.setItem('email',email.value);
      localStorage.setItem('city',city.value);
      localStorage.setItem('mymoney',0);
      warning.innerHTML="Please, wait";
      setTimeout(()=>{
        window.location='login.html';
      },1500)
      }
          
    }
    
}
)
