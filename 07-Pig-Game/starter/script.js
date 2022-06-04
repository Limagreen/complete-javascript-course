'use strict';


// [player--#, name--#, score--#, current--#];
const player0 = setupPlayer(0);
const player1 = setupPlayer(1);

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

    const player0Active = player0[0].classList.contains(`player--active`); // determine who is active and don't use '.' operator

    if (player0Active) {
        player0[1].textContent = Number(player0[1].textContent) + Number(player0[2].textContent);
        player0[2].textContent = `0`;
    }

    else {
        player1[1].textContent = Number(player1[1].textContent) + Number(player1[2].textContent);
        player1[2].textContent = `0`;
    }


    swapActiveStatus(player0Active, 0, 0, 0)
}

// resets the game back to its original state
function newGame() {

    // reset active status
    const player0Active = player0[0].classList.contains(`player--active`); // determine who is active and don't use '.' operator

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

    // if roll is 1 transfer 'active' status and current score
    if (roll == 1)
        swapActiveStatus(player0Active, currentScoreP0, currentScoreP1, roll);

    // update score
    else player0Active ? player0[2].textContent = currentScoreP0 + roll : player1[2].textContent = currentScoreP1 + roll;
}

// populates are player variables with the needed attributes
function setupPlayer(i) {

    let player = [];

    player.push(document.querySelector(`.player--${i}`)); // section (need to find active status)
    player.push(document.querySelector(`#score--${i}`)); // total score
    player.push(document.querySelector(`#current--${i}`)); // current score

    return player;
}

// swaps active status and score between players
function swapActiveStatus(player0Active, currentScoreP0, currentScoreP1, roll) {

    if (player0Active) {
        // swap active status
        player0[0].classList.remove(`player--active`);
        player1[0].classList.add(`player--active`);

        // swap scores
        player1[2].textContent = currentScoreP0 + roll;
        player0[2].textContent = 0;
    }

    else {
        // swap active status
        player1[0].classList.remove(`player--active`);
        player0[0].classList.add(`player--active`);

        // swap scores
        player0[2].textContent = currentScoreP1 + roll;
        player1[2].textContent = 0;
    }
}