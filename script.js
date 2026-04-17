function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    while(true) {
        let playerGuess = prompt("Enter a number between 1 and 100:");
        console.log("Player entered", playerGuess);

        if(playerGuess === null) {
            console.log("Game has been cancelled");
            alert("Game has been cancelled");
            return null;
        }

        playerGuess = playerGuess.trim();
        if(!/^\d+$/.test(playerGuess)) {
            console.log("Please enter a number. Remember - You can guess only numbers. Strings, special characters or anything else is not allowed");
            alert("Please enter a number. Remember - You can guess only numbers. Strings, special characters or anything else is not allowed");
            continue;
        }

        let numberGuessed = Number(playerGuess);

        if(numberGuessed < 1 || numberGuessed > 100) {
            console.log("Please enter a number between 1 and 100.");
            alert("Please enter a number between 1 and 100.");
            continue;
        }

        return numberGuessed;
    }
}

function checkGuess(playerGuess, randomNumberGenerated) {
    if(playerGuess < randomNumberGenerated) {
        return "low";
    } else if (playerGuess > randomNumberGenerated) {
        return "high";
    } else {
        return "correct";
    }
}

function game() {
    let randomNumber = generateRandomNumber();
    let numberOfAttempts = 0;
    console.log(getPlayerGuess());
}

game();