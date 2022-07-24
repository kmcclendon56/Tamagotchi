/*----- constants -----*/
// const food;
// const toy;
// const bed;
// const coat;
// const fan;


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

/*----- functions -----*/
//initial function for start of game
function init(){

}

//function for meeting needs
function foodNeedMet(){

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