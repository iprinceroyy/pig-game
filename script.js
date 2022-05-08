'use strict';

// Selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNum);
    dice.classList.remove('hidden');
    dice.src = `dice-${randomNum}.png`;
});