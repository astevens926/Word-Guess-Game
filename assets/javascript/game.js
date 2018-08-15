var wins = 0;
var losses = 0;
var guesses = "";
var tries = 9;
var possibleLetters = "abcdefghijklmnopqrstuvwxyz"
var randomLetter = possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));

document.onkeyup = function(event) {
    var guess = event.key;
    if (tries > 0) {
        if (guess === randomLetter) {
            wins++;
            randomLetter = possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
            tries = 9;
            guesses = "";
            document.getElementById("winID").value = wins;
            document.getElementById("triesID").value = tries;
            document.getElementById("guessID").value = guesses;
        }
        else {
            tries--;
            guesses += event.key + ", ";
            document.getElementById("triesID").value = tries;
            document.getElementById("guessID").value = guesses;
        }
    }
    else {
        losses++;
        randomLetter = possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
        tries = 9;
        guesses = "";
        document.getElementById("lossID").value = losses;
        document.getElementById("triesID").value = tries;
        document.getElementById("guessID").value = guesses;
    }
}