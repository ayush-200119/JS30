
//My solution : created an array and handled them separately -> checking the char code , can do the same with map

// let keys=document.getElementsByClassName('key');
// let sounds=document.getElementsByTagName('audio');
// // console.log(sounds);

// document.addEventListener("keypress",function(e){
//     let code=e.charCode;
//     console.log(code);
//     for(let i=0;i<keys.length;i++)
//     {
//         let currCode=Number(keys[i].getAttribute("data-key"));
//         if(code===currCode)
//         {
//             keys[i].classList.add('playing');
//             sounds[i].currentTime=0;
//             sounds[i].play();
//             setTimeout(()=>{
//                 keys[i].classList.remove('playing');
//             },70);
//         }
//     }
// });

//ideal and fast solution

function playAndAnimate(code){
    let currSound = document.querySelector(`audio[data-key="${code}"]`);
    let currElement=document.querySelector(`.key[data-key="${code}"]`);
    // console.log(currElement);
    // console.log(currSound); 
    if(currSound)
    {
        currSound.currentTime=0;
        currSound.play();
        currElement.classList.add('playing');
    }
}

document.addEventListener("keyup",function(e){
    let code=e.keyCode;
    playAndAnimate(code);
});



let keys=document.getElementsByClassName('key');
for(let i=0;i<keys.length;i++)
{
    keys[i].addEventListener('transitionend',function(e){
        if(e.propertyName==="transform"){
            keys[i].classList.remove('playing');
        }
    });

    keys[i].addEventListener('click',function(e){
        let code=keys[i].getAttribute("data-key");
        playAndAnimate(Number(code));
    });
}