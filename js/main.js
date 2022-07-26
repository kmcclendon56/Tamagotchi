/*----- constants -----*/
const needs = ["food", "a toy", "a bed", "a coat", "a fan"];
const xArray = ["X", "X", "X"];


/*----- app's state (variables) -----*/
let score = 0;
let xCount = 0;
let win;
let lose;
let currentNeed;


/*----- cached element references -----*/
const scoreEl = document.querySelector('.scoreBox');
const xEl = document.getElementById('xs');
const boredGifEl = document.querySelector('.bored');
const sleepGifEl = document.querySelector('.sleep');
const fireGifEl = document.querySelector('.fire');
const snowGifEl = document.querySelector('.snow');
const hungerGifEl = document.querySelector('.hunger');
const fireworksGifEl = document.querySelector('.fireworks');
const ripGifEl = document.querySelector('.rip');



/*----- event listeners -----*/
document.querySelector('.foodButton')
    .addEventListener('click', foodNeedMet);

document.querySelector('.toyButton')
    .addEventListener('click', toyNeedMet);

document.querySelector('.bedButton')
    .addEventListener('click', bedNeedMet);

document.querySelector('.coatButton')
    .addEventListener('click', coatNeedMet);

document.querySelector('.fanButton')
    .addEventListener('click', fanNeedMet);

document.getElementById('replayButton')
    .addEventListener('click', replay);



//Invoke the init function
init()


/*----- functions -----*/
//initial function for start of game
function init(){
    //set initial values
    score = 0;
    winner = null;
    randomNeed();
    console.log(`Your friend needs ${currentNeed}!`);
    render()
}


//function to change score count
function render(){
    scoreEl.innerText = score;
}


//function to get random need
function randomNeed() {
   let needIndex = Math.floor(Math.random() * 5);
   currentNeed = needs[needIndex];
   if(currentNeed === "food"){
    showHungerGif();
    }
    else if(currentNeed === "a bed"){
        showSleepGif();
    }
    else if(currentNeed === "a toy"){
        showBoredGif();
    }
    else if(currentNeed === "a coat"){
        showSnowGif();
    }
    else{
        showFireGif();
    }    
}


//Function for scoreing
function plusScore(){
    if(score === 2){
        renderWinner();
    }
    else{
        score += 1;
        randomNeed();
        console.log(`Your friend needs ${currentNeed}!`);
    }
    render()
}


//Function for loss
function minusScore(){
    if(xCount === 2){
        renderLoss();
    }
    else{
        xCount += 1;
    }
    render()
}

//Show hidden gifs functions
function showHungerGif() {
    hungerGifEl.style.visibility = 'visible';
}
function showSnowGif() {
    snowGifEl.style.visibility = 'visible';
}
function showFireGif() {
    fireGifEl.style.visibility = 'visible';
}
function showSleepGif() {
    sleepGifEl.style.visibility = 'visible';
}
function showBoredGif() {
    boredGifEl.style.visibility = 'visible';
}
function showRipGif() {
    ripGifEl.style.visibility = 'visible';
}
function showFireworksGif() {
    fireworksGifEl.style.visibility = 'visible';
}


//functions for meeting needs
function foodNeedMet(){
    if(currentNeed === "food"){
        plusScore();
        hungerGifEl.style.visibility = 'hidden';
    } else {
        minusScore();
    }
    render()
}
function toyNeedMet(){
    if(currentNeed === "a toy"){
        plusScore();
        boredGifEl.style.visibility = 'hidden';
    } else {
        minusScore();
    }
    render()

}
function bedNeedMet(){
    if(currentNeed === "a bed"){
        plusScore();
        sleepGifEl.style.visibility = 'hidden';
    } else {
        minusScore();
    }
    render()
}
function coatNeedMet(){
    if(currentNeed === "a coat"){
        plusScore();
        snowGifEl.style.visibility = 'hidden';
    } else {
        minusScore();
    }
    render()
}
function fanNeedMet(){
    if(currentNeed === "a fan"){
        plusScore();
        fireGifEl.style.visibility = 'hidden';
    } else {
        minusScore();
    }
    render()
}


//X function
function showX() {
   for(i = 0; i < xArray.length; i++){
    if(xCount === 1){
        console.log(xArray[i]);
    }
    else if(xCount === 2){
        console.log(xArray[i]);
   }
   else {
    console.log(xArray[i]);
   }
}
}


//render functions
//winner function will show a gif of fireworks over screen
function renderWinner(){
    if(score === 2){
        showFireworksGif();
        fireGifEl.style.visibility = 'hidden';
        snowGifEl.style.visibility = 'hidden';
        boredGifEl.style.visibility = 'hidden';
        hungerGifEl.style.visibility = 'hidden';
        sleepGifEl.style.visibility = 'hidden';
    }
    else{
        fireworksGifEl.style.visibility = 'hidden';
    }
    render()
}


//loss function will show gif of rip over screen
function renderLoss(){
    if(xCount === 2){
        showRipGif();
        fireGifEl.style.visibility = 'hidden';
        snowGifEl.style.visibility = 'hidden';
        boredGifEl.style.visibility = 'hidden';
        hungerGifEl.style.visibility = 'hidden';
        sleepGifEl.style.visibility = 'hidden';
    }
    else {
        ripGifEl.style.visibility = 'hidden';
    }
    render()
}


//Replay function
function replay(){
    init();
    fireworksGifEl.style.visibility = 'hidden';
    ripGifEl.style.visibility = 'hidden';
    render()

}