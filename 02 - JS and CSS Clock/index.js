
let hourHand=document.querySelector('.hour-hand');
let minuteHand=document.querySelector('.min-hand');
let secondHand=document.querySelector('.second-hand');

function updateTime(){
    const currDate= new Date();
    const hours=(currDate.getHours())%12;
    const minutes=currDate.getMinutes();
    const second=currDate.getSeconds();

    if(second===0)
    {
        hourHand.style.transitionDuration="0s";
        minuteHand.style.transitionDuration="0s";
        secondHand.style.transitionDuration="0s";
    }
    else
    {
        hourHand.style.transitionDuration="0.2s";
        minuteHand.style.transitionDuration="0.2s";
        secondHand.style.transitionDuration="0.2s";
    }

    const hr=(hours*30)+90;
    const mr=(minutes*6)+90;
    const ms=(second*6)+90;

    hourHand.style.transform= `rotate(${hr}deg)`;
    minuteHand.style.transform=`rotate(${mr}deg)`;
    secondHand.style.transform=`rotate(${ms}deg)`;

}

setInterval(updateTime,1000);