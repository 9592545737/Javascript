/*
GAME Rules:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// ####################################################################################################

// Variables
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  message = document.querySelector('.message'),
  guessBtn = document.querySelector('#guess-Btn'),
  guessInput = document.querySelector('#guess-Input');

// Assigning UI values to Variables
minNum.textContent = min;
maxNum.textContent = max;

// Event Listener to Play Again
guessBtn.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});
//Event listener
guessBtn.addEventListener('click', function () {

  let guess = parseInt(guessInput.value);

  //To check the range of the input
  if (isNaN(guess) || guess < min || guess > max) {
    showMessage(`Please Enter Value between ${min} and ${max}.`, 'red');
  }

  //To Validate the Number
  if (guess === winningNum) {
    // GameOver - won, if user has correct input.
    gameOver(true, `Congratulation. You Win. Your answer is correct.`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      // GameOver- loss, if user finished his all attempts.
      gameOver(false, `Game Over. The correct answer is ${winningNum}.`);

    } else {
      // Clear the Input
      guessInput.value = '';
      // Color the border
      guessInput.style.borderColor = 'red';
      // Display message for wrong input and guesses left.
      showMessage(`${guess} is Incorrect. You have ${guessesLeft} guesses Left.`, 'red');

    }
  }

});

//Game Over
function gameOver(won, msg) {
  let color;
  won = true ? color = 'green' : color = 'red';
  // Set message to User
  showMessage(msg);
  // Clear Input
  guessInput.value = '';
  // Disable Input
  guessInput.disabled = true;
  // Color message
  message.style.color = color;
  // Color Border
  guessInput.style.borderColor = color;

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Show message to User
function showMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

// Get RANDOM Number
function getRandomNum(min, max) {
  return (Math.floor(Math.random() * (max - min + 1) + min));
}