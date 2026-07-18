const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const userGuess = parseInt(document.getElementById('guessInput').value);
            attempts++;

            if (userGuess === randomNumber) {
                document.getElementById('result').textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`;
            } else if (userGuess < randomNumber) {
                document.getElementById('result').textContent = 'Too low! Try again.';
            } else {
                document.getElementById('result').textContent = 'Too high! Try again.';
            }
        }