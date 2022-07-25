/*----- constants -----*/
const needs = ["food", "toy", "bed", "coat", "fan"];

/*----- app's state (variables) -----*/
let score = 0;
let xCount = 0;
let win;
let lose;
let currentNeed;


/*----- cached element references -----*/
const scoreEl = document.querySelector('.scoreBox');
const xEl = document.querySelector('.Xs');


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
    currentNeed = randomNeed();
    console.log(`Your friend needs ${currentNeed}!`);
    render()
}

function render(){
    // Show need?
    scoreEl.innerText = score;
}

function randomNeed() {
   let needIndex = Math.floor(Math.random() * 5);
    return needs[needIndex];
}

function plusScore(){
    if(score === 3){
        renderWinner()
    }
    else{
        score += 1;
        currentNeed = randomNeed();
    }
    render()
}

function minusScore(){
    if(xCount === 3){
        renderLoss()
    }
    else{
        xCount += 1;
        currentNeed = randomNeed();
    }
    render()
}

//function for meeting needs
function foodNeedMet(){
    // or needs[0]
    if(currentNeed === "food"){
        plusScore();
    } else {
        minusScore()
    }
}

function toyNeedMet(){
    if(currentNeed === "toy"){
        plusScore();
    } else {
        minusScore()
    }
}

function bedNeedMet(){
    if(currentNeed === "bed"){
        plusScore();
    } else {
        minusScore()
    }
}

function coatNeedMet(){
    if(currentNeed === "coat"){
        plusScore();
    } else {
        minusScore()
    }
}

function fanNeedMet(){
    if(currentNeed === "fan"){
        plusScore();
    } else {
        minusScore()
    }
}

function replay(){
    init();
}

//render functions
//winner function will show a gif of fireworks over screen
//
function renderWinner(){

}

//loss function will show gif of rip over screen
function renderLoss(){

}