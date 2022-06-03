'use strict';

// our state variables
let secretNumber = getSecretNumber()
let score = 20;
let highScore = 0;
let hasWon = false;

// Check button functionality
document.querySelector(`.check`).addEventListener(`click`, function () { // both 'btn' and 'check' are their own CSS classes, but 'check' is specific to the button we want

    // if empty, assigns 0 by default
    const guess = Number(document.querySelector(`.guess`).value);

    if (score === 0 || hasWon) return; // the game is over and must be reset

    // the user hasn't input anything
    if (!guess) { // 0 is a falsy value

        setMessage(`⛔ No number given!`);
    }

    // if  guess is correct
    else if (guess === secretNumber) {
        setMessage(`🏆 Correct Number! 🏆`);

        hasWon = true; // player won

        // green win background
        document.querySelector(`body`).style.backgroundColor = `#60b347`; // no "." because it's not a class

        // increase the number element's width
        document.querySelector(`.number`).style.width = `30rem`;

        // if high score is beaten
        if (highScore < score) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
    }

    else {

        // decrement the score for a wrong answer
        document.querySelector(`.score`).textContent = --score;

        if (score === 0) setMessage(`💥 GAME OVER 💥`);

        else guess < secretNumber ? setMessage(`📈 Go higher!`) : setMessage(`📉 Go lower!`);

    }
});

// Again button functionality
document.querySelector(`.again`).addEventListener(`click`, function () {

    // reset the win condition
    hasWon = false;

    // reset the score
    score = 20;
    document.querySelector(`.score`).textContent = score;

    // create a new secret number
    secretNumber = getSecretNumber();

    // reset message
    setMessage(`Start guessing...`);

    // reset guess box
    document.querySelector(`.guess`).value = ``;

    // reset background and number width
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
});


// helper function to change the onscreen message
function setMessage(message) {
    document.querySelector(`.message`).textContent = message;
}


// helper function to obtain the secret number
function getSecretNumber() {
    return Math.trunc(Math.random() * 20 + 1);
}