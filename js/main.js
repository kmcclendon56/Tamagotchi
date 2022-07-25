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

document.querySelector('.replayButton')
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

function render(){
    scoreEl.innerText = score;
}

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

function plusScore(){
    if(score === 3){
        renderWinner();
    }
    else{
        score += 1;
        randomNeed();
        console.log(`Your friend needs ${currentNeed}!`);
    }
    render()
}

function minusScore(){
    if(xCount === 3){
        renderLoss();
    }
    else{
        xCount += 1;
        //xEl.style.color = "red";
        randomNeed();
    }
    render()
}

//Show hidden gifs functions
function showHungerGif() {
    hungerGifEl.style.visibility = 'visible';
    console.log("Hunger");
}
function showSnowGif() {
    snowGifEl.style.visibility = 'visible';
    console.log("Cold");
}
function showFireGif() {
    fireGifEl.style.visibility = 'visible';
    console.log("Hot");
}
function showSleepGif() {
    sleepGifEl.style.visibility = 'visible';
    console.log("Tired");
}
function showBoredGif() {
    boredGifEl.style.visibility = 'visible';
    console.log("Bored");
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

function replay(){
    //init();
    randomNeed();
}

//render functions
//winner function will show a gif of fireworks over screen
function renderWinner(){

}

//loss function will show gif of rip over screen
function renderLoss(){

}