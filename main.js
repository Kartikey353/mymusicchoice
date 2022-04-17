var m1=document.querySelector('.mainrahoon'); 
var m2=document.querySelector('.thodider');
var m3=document.querySelector('.terebin');
var m4=document.querySelector('.mujhekaise');
var m5=document.querySelector('.m1000hours');
var music0=new Audio("Mainrhoon.mp3"); 
var music1=new Audio("master.mp3");
var music2=new Audio("Terebin.mp3");
var music3=new Audio("Mujhekaise.mp3");
var music4=new Audio("baat.mp3"); 
var b1=document.querySelector('.play'); 
var b2=document.querySelector('.stop');  
function checkanyPlay()
{
    if(music0.played || music0.currentTime>0) 
    { 
     music0.pause();  
    }
     if(music1.played || music1.currentTime>0) 
     { 
   music1.pause();
     } 
     if(music2.played || music2.currentTime>0) 
     {  
    music2.pause();
     }
     if(music3.played || music3.currentTime>0) 
     {  
    music3.pause(); 
     } 
     if(music4.played || music4.currentTime>0)  
     {
    music4.pause(); 
     }
}
m1.addEventListener('click',e=>
{ 
    e.preventDefault();
    checkanyPlay();
    music0.play();
}); 
m2.addEventListener('click',e=>
{  
    e.preventDefault();
    checkanyPlay();
     music1.play();
});
m3.addEventListener('click',e=>
{ 
    e.preventDefault();
   checkanyPlay();
        music2.play();
});
m4.addEventListener('click',e=>
{ 
    e.preventDefault();
    checkanyPlay();
        music3.play();
});
m5.addEventListener('click',e=>
{ 
    e.preventDefault();
   checkanyPlay();
    music4.play();
});  
b1.addEventListener('click',()=>{
    if(music0.played || music0.currentTime>0) 
    {  
     music0.currentTime=0;  
    }
    if (music1.played || music1.currentTime>0) 
     {  
   music1.currentTime=0;
     } 
     if(music2.played || music2.currentTime>0) 
     {  
        music2.currentTime=0; 
     }
     if(music3.played || music3.currentTime>0) 
     {  
        music3.currentTime=0;  
     } 
     if(music4.played || music4.currentTime>0)  
     {
        music4.currentTime=0;  
     }
});
b2.addEventListener('click',()=>{
    checkanyPlay();
})