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
let playing = true;

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    if (playing) {
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
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', () => {
    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 20) {
            // Finish the game
            playing = false;
            dice.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});