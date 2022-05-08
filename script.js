'use strict';

// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    let randomNum = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${randomNum}.png`;

    // if number is not equal to 1, then keep updatig current score
    if (randomNum !== 1) {
        currentScore += randomNum;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    } else {
        // else change player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--active');
    }
});