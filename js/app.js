const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
const maxAttempts = 3;

function btnClickOnAction() {

    if (attempts >= maxAttempts) {
        Swal.fire({
            icon: "error",
            title: "Game Over!",
            html: `
                <p>You have used all <b>${maxAttempts}</b> attempts.</p>
                <p>The correct number was <b>${randomNumber}</b>.</p>
            `,
            confirmButtonColor: "red"
        });
        return;
    }

    const userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (userGuess === randomNumber) {

    Swal.fire({
        icon: "success",
        title: "🎉 Congratulations!",
        html: `
            <p>You guessed the number <b>${randomNumber}</b>.</p>
            <p>Attempts: <b>${attempts}</b></p>
        `,
        width: 400,
        padding: "3em",
        color: "#716add",
        background: "#ffffff",
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3ZwbDdwaGsybXU2ZzlpYzF1bXU1a3J0NzBpeGJ5MmhpdDB0c2VscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT0xezQGU5xCDJuCPe/giphy.gif")
            left center
            no-repeat
        `,
        confirmButtonColor: "green"
    });

    } else if (attempts === maxAttempts) {

        Swal.fire({
            icon: "error",
            title: "😔 Game Over!",
            html: `
                <p>You have used all <b>${maxAttempts}</b> attempts.</p>
                <p>The correct number was <b>${randomNumber}</b>.</p>
            `,
            width: 400,
            padding: "3em",
            color: "#716add",
            background: "#ffffff",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGs3bjU3MmNuMmZiZHpuejh1enluNjl1ZTZpZG01Z2ZoNGlmMHphYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6jGSATC6FpEVtRg2Ku/giphy.gif")
                left center
                no-repeat
            `,
            confirmButtonColor: "red"
        });

    } else if (userGuess < randomNumber) {

        Swal.fire({
            icon: "warning",
            title: "Too Low! ⬇️",
            text: `Try again. Attempts left: ${maxAttempts - attempts}`,
            confirmButtonColor: "blue"
        });

    } else {

        Swal.fire({
            icon: "warning",
            title: "Too High! ⬆️",
            text: `Try again. Attempts left: ${maxAttempts - attempts}`,
            confirmButtonColor: "blue"
        });

    }
}