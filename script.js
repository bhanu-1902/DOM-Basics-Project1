'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Congrats 🔥! Correct Number!'

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 100;

// console.log(document.querySelector('.guess').value);

// const x = function () {
//     console.log(document.querySelector('.guess').value);
// }

let score = 20;

let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Congrats 🔥! Correct Number!';

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
    }

    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Guess is high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💔 You lost!!!!!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'crimson';
        }
    }

    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 Guess is low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💔 You lost!!!!!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'crimson';
        }
    }

    //document.querySelector('.message').textContent = 'Congrats 🔥! Correct Number!';
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
})