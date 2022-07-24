/*----- constants -----*/
const needs = [food, toy, bed, coat, fan];

/*----- app's state (variables) -----*/
let score = 0;
let win;
let lose;


/*----- cached element references -----*/
const scoreEl = document.querySelector('.scoreBox');
const xEl = document.querySelector('.Xs');


/*----- event listeners -----*/
document.querySelector('.foodbutton')
    .addEventListener('click', foodNeedMet);

document.querySelector('.toybutton')
    .addEventListener('click', toyNeedMet);

document.querySelector('.bedbutton')
    .addEventListener('click', bedNeedMet);

document.querySelector('.coatbutton')
    .addEventListener('click', coatNeedMet);

document.querySelector('.fanbutton')
    .addEventListener('click', fanNeedMet);

document.querySelector('.replaybutton')
    .addEventListener('click', replay);



//Invoke the init function
init()


/*----- functions -----*/
//initial function for start of game
function init(){

}

//function for meeting needs
function init(){
    //set initial values
    score = 0;
    winner = null;

    render()
}

function render(){
    scoreEl.innerText = score;
}

function randomNeed() {
    Math.floor(Math.random(needs));
    return needs;
}

function foodNeedMet(){
    if(randomNeed === food){
        console.log("Your friend is hungry!");
    }
    if()
}

function toyNeedMet(){

}

function bedNeedMet(){

}

function coatNeedMet(){

}

function fanNeedMet(){

}

function replay(){

}

//render functions
//winner function will show a gif of fireworks over screen
function renderWinner(){

}

//loss function will show gif of rip over screen
function renderLoss(){

}

//Belongs in a function probably???
let food = console.log ("Your friend is hungry!");
let toy = console.log("Your friend is bored!");
let bed = console.log("Your friend is tired!");
let coat = console.log("Your friend is cold!");
let fan = console.log("Your friend is hot!");