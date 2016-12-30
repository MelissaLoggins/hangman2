// Global Variables **********************************************************************
	// Arrays and variables for holding data.
var bandName = ["oasis", "beck", "sublime", "gorillaz", "radiohead", "ramones", "rush"];
var selectedWord = " ";
var lettersInWord =[];
var numBlanks = 0;
var blanksAndSuccesses = []; // m _ d _ _ _ _
var wrongLetters = [];

// Game Counters:
var winCount = 0;
var lossCount = 0;
var guessesLeft = 6;


// Functions ****************************************************************************
	// Reusable blocks of code I will call when needed.
function startGame() {
	selectedWord = bandName[Math.floor(Math.random() * bandName.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;
// Reset
guessesLeft = 6;
wrongLetters = [];
blanksAndSuccesses = [];

// Populate blanks and succeses w/ right number of blanks.
for (var i=0; i < numBlanks; i++) {
	blanksAndSuccesses.push("_");
}

// Change HTML to reflect round conditions.
document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
document.getElementById("numGuesses").innerHTML = guessesLeft;
document.getElementById("winCounter").innerHTML = winCount;
document.getElementById("lossCounter").innerHTML = lossCount;


	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
	console.log(guessesLeft);
	console.log(winCount);
	console.log(lossCount);
}


function checkLetters(letter) {
	// check if letter exists in code at all.
var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++) {
			if (selectedWord[i] == letter) {
				isLetterInWord = true;
			}
		}

// Check where in the word the letter exists, then populate out blanksAndSuccesses array. 
if (isLetterInWord) {
	for (var i=0; i < numBlanks; i++) {
		if (selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
		}
	}
}

// Letter wasn't found
else {
	wrongLetters.push(letter);
	guessesLeft --;
 }

// Testing and debugging.
console.log(blanksAndSuccesses);

}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left; "  + guessesLeft);
	
 
 // Update the HTML to reflect the most recent count stats.
 document.getElementById("numGuesses").innerHTML = guessesLeft;
 document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
 document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" "); 

// If we have gotten all the letters to match the solution...
  if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
    // ..add to the win counter & give the user an alert.
    winCount++;
    alert("You win!");

    // Update the win counter in the HTML & restart the game.
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
  }

  // If we've run out of guesses..
  else if (guessesLeft === 0) {
    // Add to the loss counter.
    lossCount++;
    // Give the user an alert.
    alert("You lose");

    // Update the loss counter in the HTML.
    document.getElementById("lossCounter").innerHTML = lossCount;
    // Restart the game.
    startGame();
  }

}
// Main Process *************************************************************************
	// Here we call upong the functions to make something happen.
// Initiates code the first time.
 startGame();	

// Register keyclicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
	

// Testing
console.log(letterGuessed); 

};

