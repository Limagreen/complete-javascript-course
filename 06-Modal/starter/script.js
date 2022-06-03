'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const closeModalBtn = document.querySelector(`.close-modal`);
const showModalBtns = document.querySelectorAll(`.show-modal`); // querySelectorALL() returns a node list (array)


// see closeModal() for functionality
closeModalBtn.addEventListener(`click`, closeModal); // 'X' button
overlay.addEventListener(`click`, closeModal);

// funtionality to enable the ESC key to exit modals
document.addEventListener(`keydown`, function (e) {

    // if the Escape key was pressed and the modal is not already hidden, close the modal
    if (e.key === `Escape` && !modal.classList.contains(`hidden`))
        closeModal();

});

// loop through modals to assign each event listener
for (let i = 0; i < showModalBtns.length; i++)
    showModalBtns[i].addEventListener(`click`, openModal); // * see note at bottom


/*** Functions Start Here ***/


// functionality for the 'X' button on each modal to close that modal and hide the overlay
// likewise, clicking the overlay itself (aka clicking outside the modal) will close it
function closeModal() {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
}


// functionality for modals and overlay to appear when buttons are clicked
function openModal() {
    modal.classList.remove(`hidden`);
    overlay.classList.remove(`hidden`);
}



/*

*IMPORTANT NOTE: Do NOT include the () next to a pre-made function you assign to an event listener.

Including the () causes JavaScript to call the function as it reads the eventListener line, meaning it will occur at page load rather than waiting for the specified event. This can create weird, undefined behavior.

Excluding the () simply tells JS the name of the function to use when the event occurs, without auto-calling it at page load.

*/