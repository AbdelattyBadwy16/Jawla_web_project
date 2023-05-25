
let btn1=document.getElementById('book1')
let btn2=document.getElementById('book2')
let btn3=document.getElementById('book3')
let btn4=document.getElementById('book4')
let btn5=document.getElementById('book5')
let btn6=document.getElementById('book6')
let btn7=document.getElementById('book7')
let btn8=document.getElementById('book8')

btn1.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=1500)
    {
        localStorage.setItem('from','EYGPT');
        localStorage.setItem('to','SUDIA ARABIA');
        localStorage.setItem('time','3.15PM');
        localStorage.setItem('price','1500$');
        localStorage.setItem('srcf','img/img/مصر.jpg');
        localStorage.setItem('srct','img/img/سعودية.jpg'); 
        alert('Item Booked Succsefuly')
        localStorage.setItem('mymoney',cur_money-1500);
    }else  alert('Not Enough Money')
   
}

btn2.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=2100)
    {
    localStorage.setItem('from','MOROCCO');
    localStorage.setItem('to','ALGERIA');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','2100$');
    localStorage.setItem('srcf','img/img/مغرب.jpg');
    localStorage.setItem('srct','img/img/جزائر.jpg');
    alert('Item Booked Succsefuly')
    localStorage.setItem('mymoney',cur_money-2100);
}else  alert('Not Enough Money')
}

btn3.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=1350)
    {
    localStorage.setItem('from','IRAQ');
    localStorage.setItem('to','SUDAN');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','1350$');
    localStorage.setItem('srcf','img/img/علم-العراق-1536x1024.jpg');
    localStorage.setItem('srct','img/img/سودان.jpg');
    alert('Item Booked Succsefuly')
    localStorage.setItem('mymoney',cur_money-1350);
    }else alert('Not Enough Money')
}

btn4.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=5970)
    {
    localStorage.setItem('from','SUDIA ARABIA');
    localStorage.setItem('to','YEMEN');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','5970$');
    localStorage.setItem('srcf','img/img/سعودية.jpg');
    localStorage.setItem('srct','img/img/اليمن-1536x1024.jpg');
    alert('Item Booked Succsefuly')
    localStorage.setItem('mymoney',cur_money-5970);
    }else alert('Not Enough Money')
}

btn5.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=1960)
    {
    localStorage.setItem('from','EYGPT');
    localStorage.setItem('to','SUDAN');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','1960$');
    localStorage.setItem('srcf','img/img/مصر.jpg');
    localStorage.setItem('srct','img/img/سودان.jpg');
    alert('Item Booked Succsefuly')
    localStorage.setItem('mymoney',cur_money-1960);
    }else alert('Not Enough Money')
}

btn6.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=3500)
    {
    localStorage.setItem('from','EYGPT');
    localStorage.setItem('to','MOROCCO');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','3500$');
    localStorage.setItem('srcf','img/img/مصر.jpg');
    localStorage.setItem('srct','img/img/مغرب.jpg');
    alert('Item Booked Succsefuly')
    localStorage.setItem('mymoney',cur_money-3500);
    }else alert('Not Enough Money')
}

btn7.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=1500)
    {
    localStorage.setItem('from','EYGPT');
    localStorage.setItem('to','ALGERIA');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','1500$');
    localStorage.setItem('srcf','img/img/مصر.jpg');
    localStorage.setItem('srct','img/img/جزائر.jpg');
    alert('Item Booked Succsefuly')
    localStorage.setItem('mymoney',cur_money-1500);
    }else alert('Not Enough Money')
}


btn8.onclick=function(){
    let cur_money=localStorage.getItem('mymoney')
    if(cur_money>=1090)
    {
    localStorage.setItem('from','SUDIA ARABIA');
    localStorage.setItem('to','SOURA');
    localStorage.setItem('time','3.15PM');
    localStorage.setItem('price','1090$');
    localStorage.setItem('srcf','img/img/سعودية.jpg');
    localStorage.setItem('srct','img/img/سوريا-1536x1024.jpg');
    alert('Item Booked Succsefuly')
     localStorage.setItem('mymoney',cur_money-1090);
    }else alert('Not Enough Money')
}