var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables for wins, losses, remaining guesses, and empty array for user guesses.
var wins = 0;
var losses = 0;
var guessesremaining = 9;
var userguesses = [];

//create variables that hold references to the places in the HTML with their respective element IDs to be displayed later.
var refWins = document.getElementById("wins-text");
var refLosses = document.getElementById("losses-text");
var refRemaining = document.getElementById("guessremain-text");
var refUsed = document.getElementById("guessedletters-text");

//Creating a variable (computerLetter) by selecting a random letter from the array of computerChoices.
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//This function is run when the user preses a key
document.onkeyup = function (event) {

    //Assigns the value for the user's letter based on which key was pressed.
    var userLetter = event.key;

    //Creating a variable to reset the computer letter if the user wins
    if (!userguesses.includes(userLetter)) {
        userguesses.push(userLetter);
        refUsed.textContent = userguesses;


        //If the user key matches the computer's randomly generated key, then the wins would increase by 1,
        //guesses left would be( reset to 9, 'Your guesses so far' would reset to a blank array, 
        if (userLetter === computerLetter) {
            wins++;
            guessesremaining = 9;
            userguesses = [];
            refUsed.textContent = userguesses;
            refWins.textContent = wins;
            refRemaining.textContent = guessesremaining;
            computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }
        //If the user's key does not match, the 'Guesses Left' number would be decreased by 1 each time and should display in the html.
        else {
            guessesremaining--;
            refRemaining.textContent = guessesremaining;
        }

        //When the 'Guesses Left' reaches 0, the losses gains 1 and is displayed, the 'Your guesses so far' blanks out again, and the 'Guesses Left' is reset to 9.
        if (guessesremaining === 0) {
            losses++;
            refLosses.textContent = losses;
            userguesses = [];
            refUsed.textContent = [];
            guessesremaining = 9;
            refRemaining.textContent = guessesremaining;
            computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

        //Resets game when user totals 5 losses.
        if (losses === 5) {
            wins = 0;
            refWins.textContent = wins;
            losses = 0;
            refLosses.textContent = losses;
            guessesremaining = 9;
            refRemaining.textContent = guessesremaining;
            userguesses = [];
            computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

    }
};