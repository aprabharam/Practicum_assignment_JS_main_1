function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
    while(true) {
        let playerGuess = prompt("Enter a number between 1 and 100:");

        if(playerGuess === null) {
            let confirmExit = confirm("Are you sure you want to exit the game?");
            if (confirmExit) {
                alert("You pressed cancel. \nGame exited. The AI wins");
                return null;
            } else {
                continue;
            }
        }

        playerGuess = playerGuess.trim();
        if(!/^\d+$/.test(playerGuess)) {
            alert("Please enter a number. \nRemember - You can guess only numbers. Strings, special characters or anything else is not allowed");
            continue;
        }

        let numberGuessed = Number(playerGuess);

        if(numberGuessed < 1 || numberGuessed > 100) {
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
    const randomNumberGenerated = generateRandomNumber();
    let numberOfAttempts = 0;
    const maxAttempts = 10;

    alert("Welcome to the Number Guessing game. \nAre you ready to beat the evil AI? Let's see if you are capable of defeating the AI. \nWhat you have to do is, DUH! Use your brain. The AI generates a number between 1 and 100, and you have to guess what the number is. \nYou have 10 CORRECT attempts to guess the number. Remember, the attempt is considered invalid if you enter any text, special character or anything else other than numbers. You can take all your time to enter something, but if it is not a number, then sorry the attempt will not be counted. \n\nSoooooo, enter a number between 1 and 100 and win a prize (only if you guessed it right). For your correct guess you get a score. BONUS - If you guessed it before you exhaust your attempts, you get a higher score!!! \n\nNow, ARE YOU READYYYYY?????");
    while(numberOfAttempts < maxAttempts) {
        let playerGuess = getPlayerGuess();

        if(playerGuess === null) {
            return;
        }

        numberOfAttempts++;

        let guessResult = checkGuess(playerGuess, randomNumberGenerated);
        if(guessResult === "low") {
            alert(`Oh no! You have guessed ${playerGuess}, which is TOO LOW. \nYou have ${maxAttempts - numberOfAttempts} attempts left to guess again`);
        } else if(guessResult === "high") {
            alert(`Oh no! You have guessed ${playerGuess}, which is TOO HIGH. \nYou have ${maxAttempts - numberOfAttempts} attempts left to guess again`);
        } else {
            let playerScore = (maxAttempts - numberOfAttempts + 1) * 10;
            alert(`Awesome! You won! \nThe evil AI has been defeated. Humans rule the world!!!! \nIt was a correct guess. You guessed it in ${numberOfAttempts} attempts! \n\nYour score: ${playerScore} \n\n The end.`);
            return;
        }
    }
    alert(`Oh no. You are out of attempts. \nThe evil AI won. No, that's bad. AI is going to take over the human world. \n\nThe correct number was ${randomNumberGenerated} \n\n The end.`);
}

game();