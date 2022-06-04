'use strict';


// [player--#, name--#, score--#, current--#];
const player0 = setupPlayer(0);
const player1 = setupPlayer(1);
let player0Active;

const dieBtn = document.querySelector(`.btn--roll`);
const holdBtn = document.querySelector(`.btn--hold`);
const newGameBtn = document.querySelector(`.btn--new`);

const dieImage = document.querySelector(`.die`);


/* Event Listeners */

dieBtn.addEventListener(`click`, rollDie);
newGameBtn.addEventListener(`click`, newGame);
holdBtn.addEventListener(`click`, hold);


/* Functions */

// sets the die image based on the given roll
function changeDieImage(roll) {

    dieImage.style.display = `inline`;

    switch (roll) {
        case 1:
            dieImage.src = `die-1.png`;
            break;
        case 2:
            dieImage.src = `die-2.png`;
            break;
        case 3:
            dieImage.src = `die-3.png`;
            break;
        case 4:
            dieImage.src = `die-4.png`;
            break;
        case 5:
            dieImage.src = `die-5.png`;
            break;
        case 6:
            dieImage.src = `die-6.png`;
            break;
        default:
            console.error(`Invalid die value`);
            break;
    }
}

// add's active player's current score to total and swaps active status
function hold() {

    player0Active = isActive();

    if (player0Active) {
        player0[1].textContent = Number(player0[1].textContent) + Number(player0[2].textContent); // total += current
        player0[2].textContent = `0`; // current = 0

        isWinner(player0);
    }

    else {
        player1[1].textContent = Number(player1[1].textContent) + Number(player1[2].textContent);
        player1[2].textContent = `0`;
    }


    swapActiveStatus(player0Active);
}

function isActive() {
    return player0[0].classList.contains(`player--active`); // determine if player0 is active and don't use '.' operator
}

// TODO 
function isWinner(player) {

    if (Number(player[3].textContent) >= 100) console.log(`temp`);

}

// resets the game back to its original state
function newGame() {

    // reset active status
    player0Active = isActive();

    // set player0 as the active player if necessary
    if (!player0Active) {
        // swap active status
        player0[0].classList.add(`player--active`);
        player1[0].classList.remove(`player--active`);
    }

    // reset total score
    player0[1].textContent = 0;
    player1[1].textContent = 0;

    // reset current score
    player0[2].textContent = 0;
    player1[2].textContent = 0;

    // remove die image
    dieImage.style.display = `none`;

    // TODO reset winner?
}

/*
 - rolls the random value
 - adds value to active player's score
 - calls changeDieImage() to display correct die image
 */
function rollDie() {

    const roll = Math.trunc(Math.random() * 6 + 1); // value 1-6
    const currentScoreP0 = Number(player0[2].textContent);
    const currentScoreP1 = Number(player1[2].textContent);
    const player0Active = player0[0].classList.contains(`player--active`); // determine who is active and don't use '.' operator

    changeDieImage(roll); // update the image

    // if roll is 1 transfer 'active' status and reset current score
    if (roll == 1)
        swapActiveStatus(player0Active, currentScoreP0, currentScoreP1);

    // update score
    else player0Active ? player0[2].textContent = currentScoreP0 + roll : player1[2].textContent = currentScoreP1 + roll;
}

// populates are player variables with the needed attributes
function setupPlayer(i) {

    let player = [];

    player.push(document.querySelector(`.player--${i}`)); // section (needed to find active status)
    player.push(document.querySelector(`#score--${i}`)); // total score
    player.push(document.querySelector(`#current--${i}`)); // current score
    player.push(document.querySelector(`.name--${i}`)); // name (needed for win alert)

    return player;
}

// swaps active status and score between players
function swapActiveStatus(player0Active) {

    if (player0Active) {
        // swap active status
        player0[0].classList.remove(`player--active`);
        player1[0].classList.add(`player--active`);

        // reset active player's current score
        player0[2].textContent = 0;
    }

    else {
        // swap active status
        player1[0].classList.remove(`player--active`);
        player0[0].classList.add(`player--active`);

        // reset active player's current score
        player1[2].textContent = 0;
    }
}