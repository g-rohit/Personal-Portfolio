/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/


// game value variables

let min = 1,
    max = 100,
    winningNumber = 5,
    guessLeft = 3;

// UI variables
let form = document.querySelector('#number-guess-form');
let game = document.querySelector('#game');
let minNumber = document.querySelector('#min-num');
let maxNumber = document.querySelector('#max-num');
let userGuess = document.querySelector('#userGuess');
let guessButton = document.querySelector('#guessBtn');
let message = document.querySelector('.message');

// Assigning UI min and max numbers

minNumber.textContent = min;
maxNumber.textContent = max;


// adding event listener to submit button


form.addEventListener('submit', checkGuessedNumber);
// guessButton.addEventListener('submit', checkGuessedNumber);




function checkGuessedNumber(e) {

    let guessedNumber = parseInt(userGuess.value);
    console.log(`user input is ${guessedNumber}`);
    console.log(`Min is ${min}`);
    console.log(`Max is ${max}`);

    if (isNaN(guessedNumber) || guessedNumber < min || guessedNumber > max) {

        message.textContent = `Kindly enter a number between ${min} and ${max}`;



    } else if (guessedNumber == winningNumber) {

        message.textContent = `Congratulations you have guessed it correct: ${winningNumber} is the the answer !! `;
message.style.color = 'green';
        userGuess.setAttribute('disabled', true);
        guessButton.textContent = 'Play Again';
        
         
            // guessButton.addEventListener('click'),() => {
            //     window.location.reload();
            // }) 
         
    } else {

        message.textContent = `Your guess is not correct, You have ${guessLeft} more chances left.`;
        guessLeft--;

        if (guessLeft == 0) {

            message.textContent = `Oops, Game over. ${winningNumber} is the the answer !! `;
            userGuess.setAttribute('disabled', true);
            guessButton.textContent = 'Play Again';



        }
    }



    e.preventDefault();
}