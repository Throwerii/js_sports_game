let RESETButton = document.querySelector("#reset-button"); 
let SHOOTButton = document.querySelector("#teamone-shoot-button"); 
let shootButton = document.querySelector("#teamtwo-shoot-button"); 
let teamonenumgoals=document.querySelector("#teamone-numgoals")
let teamtwonumgoals=document.querySelector("#teamtwo-numgoals")
let teamonenumshots=document.querySelector("#teamone-numshots")
let teamtwonumshots=document.querySelector("#teamtwo-numshots")
let numresets=document.querySelector("#num-resets")
SHOOTButton.addEventListener("click", function() {
    console.log("SHOOT button clicked");
    let numrand=Math.random();
    if (numrand<0.5){
        let newCounterValue = Number(teamonenumgoals.innerHTML) + 1;
        teamonenumgoals.innerHTML=newCounterValue; 
    } 
})
SHOOTButton.addEventListener("click", function() {
    let newCounterValue = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML=newCounterValue; 
  
})
shootButton.addEventListener("click", function() {
    console.log("shoot button clicked");
    let numrand=Math.random();
    if (numrand<0.5){
        let newCounterValue = Number(teamtwonumgoals.innerHTML) + 1;
        teamtwonumgoals.innerHTML=newCounterValue; 
    }
})
shootButton.addEventListener("click", function() {
    let newCounterValue = Number(teamtwonumshots.innerHTML) + 1;
    teamtwonumshots.innerHTML=newCounterValue; 
  
})
RESETButton.addEventListener("click", function() {
    console.log("RESET button clicked");
    teamonenumgoals.innerHTML=0;
    teamonenumshots.innerHTML=0;
    teamtwonumgoals.innerHTML=0;
    teamtwonumshots.innerHTML=0;
    let newCounterValue = Number(numresets.innerHTML) + 1;
    numresets.innerHTML=newCounterValue; 
     
})