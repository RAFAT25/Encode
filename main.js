let cent1=document.getElementById('cent1');
let textidcent1=document.getElementById('textidcent1');
let pag_2=document.getElementById('pag_2');
let texthome=document.getElementById('texthome');
let texthome2=document.getElementById('texthome2');
let textalhdaf=document.getElementById('alhdaf');
let par=document.getElementById('par');
let line=document.getElementsByClassName('line')[0];

let home=document.querySelectorAll('a')[2];
let moon=document.images[0];
let mnueimg=document.images[2];
let closeimg=document.images[1];
let body=document.body;
let Up=document.querySelector(".up");
let hoo=document.getElementsByClassName('cent1')[0];
let pargrav=document.getElementById('parfrav');
let onlinetext=document.getElementById('online');
let costomer2=document.getElementById('costomer2');
let textahdath1=document.getElementById('textahdath1');
let textahdath2=document.getElementById('textahdath2');
let textahdath3=document.getElementById('textahdath3');



//-----------------------------------------------------
let valudispay=document.querySelectorAll('.num1');
let internal=200;
valudispay.forEach((valudispay)=>{
    let starvale=0;
    let endvale=parseInt(valudispay.getAttribute("data-val"));
    let dortoin=Math.floor(internal/endvale);
    let count=setInterval(function(){
        starvale+=1;
        valudispay.textContent=starvale+'*';
        if (starvale==endvale) {
            clearInterval(count);
            
        }



    },dortoin);

});



moon.onclick=function(){
    mnueimg.src="img/1700149948207.png";
    closeimg.src="img/1700151799034.png"
   moon.src="img/icons8-moon-100.png";
   body.style.backgroundColor="black";
   
   cent1.style.backgroundColor="black";
   textidcent1.style.color="white";
   pag_2.style.backgroundColor="black";
   texthome.style.color="white";
   texthome2.style.color="#FF8983";
   textalhdaf.style.color="#FF8983";
   par.style.color="white";
   onlinetext.style.color="white";
   costomer2.style.backgroundColor="black";
   costomer2.style.boxShadow="none";
  
 


   


};
moon.ondblclick=function(){
    mnueimg.src="img/icons8-menu-60.png";
    closeimg.src="img/icons8-cancel-50.png"
    moon.src="img/icons8-sun-100.png";
    body.style.backgroundColor="white";
    cent1.style.backgroundColor="white";
    textidcent1.style.color="black";
    pag_2.style.backgroundColor="white";
    texthome.style.color="#190E90";
    texthome2.style.color="#190E90";
    par.style.color="black";
    onlinetext.style.color="black";
    costomer2.style.backgroundColor="white";
    costomer2.style.boxShadow="none";
    textahdath1.style.color="black";
    textahdath2.style.color="black";
    textahdath3.style.color="black";
    text1about.style.color="black";
   text2about.style.color="black";
   text3about.style.color="black";
 
 
 };
 window.onscroll=function(){
    if(this.scrollY>=2800){
        Up.classList.add("upshow");
        
    }
    else{
        Up.classList.remove("upshow");
    }
 };
 Up.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
 }
 




/*
close.onclick=function(){
   
    mnues.classList.add('hide');
    this.classList.add('hide');
    opene.classList.remove('hide');
}
*/
/*opene.onclick=function(){
    
    mnues.classList.remove('hide');
    close.classList.remove('hide');
    this.classList.add('hide');

}*/
/*
light1.onclick=function(){
    home.style.color="black";
    line.style.backgroundColor="black";
   
    mnues.style.backgroundColor="#FF8983";
   /* imges1.src="icons8-phone-48r.png";*/
   /*
    texs.style.color="black";
    texs2.style.color="aliceblue";
    light1.style.marginLeft="70px";
    light1.style.backgroundColor="#FF8983";
    dirk.style.backgroundColor="black";
    dirk.style.borderColor="#FF8983";
}/*
light1.ondblclick=function(){
    
    light1.style.marginLeft="2px";
    light1.style.backgroundColor="#190E90";
    line.style.backgroundColor="#FF8983";
    mnues.style.backgroundColor="#190E90";
    /*imges1.src="icons8-phone-48.png";*/
    /*
    home.style.color="aliceblue";
    texs.style.color="aliceblue";
    texs2.style.color="aliceblue";
    dirk.style.backgroundColor="aliceblue";
    dirk.style.borderColor="#190E90";
   
    
}

/*sIGN.onclick=function(){

    sIGNup.classList.remove('hide');
    

}*/
close_login.onclick=function(){
    sIGNup.classList.add('hide');
}


