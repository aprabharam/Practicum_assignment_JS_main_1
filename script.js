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
    const randomNumberGenerated = generateRandomNumber();
    let numberOfAttempts = 0;
    const maxAttempts = 10;

    alert("Welcome to the Number Guessing game. Are you ready to beat the evil AI? Let's see if you are capable of defeating the AI. What you have to do is, DUH! Use your brain. The AI generates a number between 1 and 100, and you have to guess what number it is. You have 10 CORRECT attempts to guess the number. Remember, the attempt is considered invalid if you enter any text, special character or anything else other than numbers. You can take all your time to enter something, but if it is not a number, then sorry the attempt will not be counted. Soooooo, enter a number between 1 and 100 and win a prize (only if you guessed it right). For your correct guess you get a score. BONUS - If you guessed it before you exhaust your attempts, you get a higher score!!! Now, ARE YOU READYYYYY?????");
    console.log("Welcome to the Number Guessing game. Are you ready to beat the evil AI? Let's see if you are capable of defeating the AI. What you have to do is, DUH! Use your brain. The AI generates a number between 1 and 100, and you have to guess what number it is. You have 10 CORRECT attempts to guess the number. Remember, the attempt is considered invalid if you enter any text, special character or anything else other than numbers. You can take all your time to enter something, but if it is not a number, then sorry the attempt will not be counted. Soooooo, enter a number between 1 and 100 and win a prize (only if you guessed it right). For your correct guess you get a score. BONUS - If you guessed it before you exhaust your attempts, you get a higher score!!! Now, ARE YOU READYYYYY?????");
    while(numberOfAttempts < maxAttempts) {
        let playerGuess = getPlayerGuess();

        if(playerGuess === null) {
            return;
        }

        numberOfAttempts++;

        let guessResult = checkGuess(playerGuess, randomNumberGenerated);
        if(guessResult === "low") {
            alert(`Oh no! You have guessed too low. You have ${maxAttempts - numberOfAttempts} attempts left to guess again`);
            console.log(`Oh no! You have guessed too low. You have ${maxAttempts - numberOfAttempts} attempts left to guess again`);
        } else if(guessResult === "high") {
            alert(`Oh no! You have guessed too high. You have ${maxAttempts - numberOfAttempts} attempts left to guess again`);
            console.log(`Oh no! You have guessed too high. You have ${maxAttempts - numberOfAttempts} attempts left to guess again`);
        } else {
            let playerScore = (maxAttempts - numberOfAttempts + 1) * 10;
            alert(`Awesome! That's a correct guess. You guessed it in ${numberOfAttempts} attempts!
                Your score: ${playerScore}`);
            console.log(`Awesome! That's a correct guess. You guessed it in ${numberOfAttempts} attempts!
                Your score: ${playerScore}`);
            return;
        }
    }
    alert(`Oh no. You are out of attempts. Maximum attempt reached.
        The correct number was ${randomNumberGenerated}`);
    console.log(`Oh no. You are out of attempts. Maximum attempt reached.
        The correct number was ${randomNumberGenerated}`);
}

game();