'use strict';

// our state variables
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
let hasWon = false;

// both 'btn' and 'check' are their own CSS classes, but 'check' is specific to the button we want
document.querySelector(`.check`).addEventListener(`click`, function () {

    // if empty, assigns 0 by default
    const guess = Number(document.querySelector(`.guess`).value);

    if (score === 0 || hasWon) return; // the game is over and must be reset

    // the user hasn't input anything
    if (!guess) { // 0 is a falsy value

        document.querySelector(`.message`).textContent = `⛔ No number given!`;
    }

    // if  guess is correct
    else if (guess === secretNumber) {
        document.querySelector(`.message`).textContent = `🏆 Correct Number! 🏆`;

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

        if (score === 0) document.querySelector(`.message`).textContent = `💥 GAME OVER 💥`;

        else if (guess < secretNumber) document.querySelector(`.message`).textContent = ` 📈 Go higher!`;

        else document.querySelector(`.message`).textContent = ` 📉 Go lower!`;

    }
});


document.querySelector(`.again`).addEventListener(`click`, function () {

    // reset the win condition
    hasWon = false;

    // reset the score
    score = 20;
    document.querySelector(`.score`).textContent = score;

    // create a new secret number
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    // reset message
    document.querySelector(`.message`).textContent = `Start guessing...`;

    // reset guess box
    document.querySelector(`.guess`).value = ``;

    // reset background and number width
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
});