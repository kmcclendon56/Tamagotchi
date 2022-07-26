/*----- constants -----*/
const needs = ["food", "a toy", "a bed", "a coat", "a fan"];


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
const x1El = document.getElementById('x1');
const x2El = document.getElementById('x2');
const x3El = document.getElementById('x3');
const xArray = [x1El, x2El, x3El];



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
    score +=1;
    if(score === 3){
        renderWinner();
    }
    else{
        randomNeed();
        console.log(`Your friend needs ${currentNeed}!`);
    }
    render()
}


//Function for losing
function minusScore(){
    xCount += 1;
    showX();
    if(xCount === 3){
        renderLoss();
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
        hungerGifEl.style.visibility = 'hidden';
        plusScore();
    } else {
        minusScore();
    }
    render()
}
function toyNeedMet(){
    if(currentNeed === "a toy"){
        boredGifEl.style.visibility = 'hidden';
        plusScore();
    } else {
        minusScore();
    }
    render()

}
function bedNeedMet(){
    if(currentNeed === "a bed"){
        sleepGifEl.style.visibility = 'hidden';
        plusScore();
    } else {
        minusScore();
    }
    render()
}
function coatNeedMet(){
    if(currentNeed === "a coat"){
        snowGifEl.style.visibility = 'hidden';
        plusScore();
    } else {
        minusScore();
    }
    render()
}
function fanNeedMet(){
    if(currentNeed === "a fan"){
        fireGifEl.style.visibility = 'hidden';
        plusScore();
    } else {
        minusScore();
    }
    render()
}


//X function
function showX() {
    xArray[xCount-1].style.visibility = 'visible';
}


//render functions
//winner function will show a gif of fireworks over screen
function renderWinner(){
    // if(score === 3){
    //     showFireworksGif();
    //     fireGifEl.style.visibility = 'hidden';
    //     snowGifEl.style.visibility = 'hidden';
    //     boredGifEl.style.visibility = 'hidden';
    //     hungerGifEl.style.visibility = 'hidden';
    //     sleepGifEl.style.visibility = 'hidden';
    // }
    // else{
    //     fireworksGifEl.style.visibility = 'hidden';
    // }
    // render()
    reset();
    showFireworksGif();
    render()
}

function reset() {
    xCount = 0;
    score = 0;
    currentNeed = null;
    fireGifEl.style.visibility = 'hidden';
    snowGifEl.style.visibility = 'hidden';
    boredGifEl.style.visibility = 'hidden';
    hungerGifEl.style.visibility = 'hidden';
    sleepGifEl.style.visibility = 'hidden';
    fireworksGifEl.style.visibility = 'hidden';
    ripGifEl.style.visibility = 'hidden';
    for (let i=0; i<xArray.length; i++) {
        xArray[i].style.visibility = 'hidden';
    }
}

//loss function will show gif of rip over screen
function renderLoss(){
    reset();
    showRipGif();
    render()
}


//Replay function
function replay(){
    reset();
    init();
    render()

}