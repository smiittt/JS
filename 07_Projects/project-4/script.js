const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remaining");
const LowOrHi = document.querySelector(".loworhi");
const StartOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuessArray = [];
let guesses = 1;

let playGames = true;

if (playGames) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const userGuess = parseInt(userinput.value);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
    // Check if the input is not a number or outside the valid range
    if (isNaN(guess)) {
      displayMessage("Please enter a valid number between 1 and 100.");
    } else if (guess < 1) {
      displayMessage("Please enter a number greater than or equal to 1.");
    } else if (guess > 100) {
      displayMessage("Please enter a number less than or equal to 100.");
    } else {
      // If the guess is valid, proceed with the game logic
      prevGuessArray.push(guess);
      if (guesses === 11) {
        displayGuess(guess);
        displayMessage("Game Over!!!");
        EndGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }
  

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulations!! You guessed it right!");
    EndGame();
  } else if (guess < randomNumber) {
    displayMessage("The number is too low!");
  } else if (guess > randomNumber) {
    displayMessage("The number is too high!");
  }
}

function displayGuess(guess) {
  userinput.value = "";
  guessSlot.innerHTML += `${guess} `;
  guesses++;
  remaining.innerHTML = `${11 - guesses}`;
}

function displayMessage(msg) {
  LowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuessArray = [];
    guesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - guesses}`;
    userinput.removeAttribute("disabled");
    StartOver.removeChild(p);
    playGames = true;
  });
}

function EndGame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  StartOver.appendChild(p);
  playGames = false;
  newGame();
}
