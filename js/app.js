const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;

function btnClickOnAction() {
    if (attempts >= maxAttempts) {
        document.getElementById("result").innerHTML = `
            <h3 style="color:red;">Game Over!</h3>
            <p>You have used all ${maxAttempts} attempts.</p>
            <p>The correct number was <b>${randomNumber}</b>.</p>
        `;
        return;
    }

    const userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById("result").innerHTML = `
            <h3 style="color:green;">🎉 Congratulations!</h3>
            <p>You've guessed the number <b>${randomNumber}</b> in <b>${attempts}</b> attempt(s).</p>
        `;
    } 
    else if (attempts === maxAttempts) {
        document.getElementById("result").innerHTML = `
            <h3 style="color:red;">Game Over!</h3>
            <p>You have used all ${maxAttempts} attempts.</p>
            <p>The correct number was <b>${randomNumber}</b>.</p>
        `;
    } 
    else if (userGuess < randomNumber) {
        document.getElementById("result").innerHTML = `
            <span style="color:blue;">Too low! Try again.</span>
            <p>Attempts left: <b>${maxAttempts - attempts}</b></p>
        `;
    } 
    else {
        document.getElementById("result").innerHTML = `
            <span style="color:red;">Too high! Try again.</span>
            <p>Attempts left: <b>${maxAttempts - attempts}</b></p>
        `;
    }
}