let username_profile=document.getElementById('username_pr');
let name=document.getElementById('name_pr');
let email=document.getElementById('email');
let city=document.getElementById('city');

let current_username_profile=localStorage.getItem('username'); // stander.js has the same name
let current_name=localStorage.getItem('name');
let current_email=localStorage.getItem('email');
let current_city=localStorage.getItem('city');

username_profile.innerHTML=current_username_profile;
name.innerHTML=current_name;
email.innerHTML=current_email;
city.innerHTML=current_city;

/*add money*/
let btn_add=document.getElementById('btn_add');
let balance=document.getElementById('balance');
let temp=1;
// show the form
btn_add.onclick=function()
{
    if(temp==1)
    {
        balance.style.display='block';
        temp=0;
    }else
    {
        balance.style.display='none';
        temp=1;
    }
}

let wrong=document.getElementById('wrong_pro');
let card_id=document.getElementById('card_id');
let money=document.getElementById('money');
let add_balance=document.getElementById('add_balance');
let my_money=document.getElementById('my_money');

my_money.innerHTML=localStorage.getItem('mymoney')+'$';

//add money to account
add_balance.onclick=function()
{
    let cur_card=card_id.value;
    let cur_money=money.value;
    if(cur_card.length!=14)
    {
        wrong.innerHTML='Card id must be 14 digits'
        return;
    }else
    {
        wrong.innerHTML="";
    }

    if(cur_money.length===0)
    {
        wrong.innerHTML='Balance must not be empty'
        return;
    }else
    {
        wrong.innerHTML="";
    }
    alert('Succssful operation')
    balance.style.display='none'
    let x=localStorage.getItem('mymoney');
    let y=(+(x)+(+(cur_money)));
    localStorage.setItem('mymoney',y);
    my_money.innerHTML=localStorage.getItem('mymoney')+'$';
}

