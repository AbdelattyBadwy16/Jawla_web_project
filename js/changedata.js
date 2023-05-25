let newuser=document.getElementById('change_user')
let newname=document.getElementById('change_name')
let newemail=document.getElementById('change_email')
let newpass=document.getElementById('change_pass')
let oldpass=document.getElementById('change_old')
let newimg=document.getElementById('img')
let prof_img=document.getElementById('prof_img');


newuser.value=localStorage.getItem('username');
newname.value=localStorage.getItem('name');
newemail.value=localStorage.getItem('email');



let save=document.getElementById('save');
let wrong=document.getElementById('wrong');
save.onclick=function()
{

    if(oldpass.value.length<4)
    {
        wrong.innerHTML='Old Password Must be More 4 Char'
        return;
    }else wrong.innerHTML=''

    if(newpass.value.length<4)
    {
        wrong.innerHTML='New Password Must be More 4 Char'
        return;
    }else wrong.innerHTML=''

    if(oldpass.value===localStorage.getItem('password'))
    {
        localStorage.setItem('username',newuser.value);
        localStorage.setItem('email',newemail.value);
        localStorage.setItem('password',newpass.value);
        localStorage.setItem('name',newname.value);
        alert('Save Sucssfuly');
        window.location='changedata.html';
    }else wrong.innerHTML='Wrong Old Password'
   
}
