
const spacing=document.querySelector("#spacing");
const blur=document.querySelector("#blur");
const base=document.querySelector("#base");

const r=document.querySelector(":root");

// console.log(spacing,blur,base);
spacing.addEventListener("input",function(e){
    const value=e.target.value;
    r.style.setProperty('--spacing',value+'px');
});

blur.addEventListener("input",function(e){
    const value=e.target.value;
    r.style.setProperty('--blur',value+'px');
})

base.addEventListener("input",function(e){
    const color=e.target.value;
    r.style.setProperty('--background',color);
});

//orginal solution
//Take inputs as an array rather than sigle elements
//Use the data-sizing from the dataset object to get the required unit