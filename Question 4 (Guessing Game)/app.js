
document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const userGuess = document.getElementById('userGuess');
    const submitGuess = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const restartGame = document.getElementById('restartGame');

    submitGuess.addEventListener('click', () => {
        const guess = Number(userGuess.value);
        attempts++;

        if (!guess || guess < 1 || guess > 100) {
            feedback.textContent = "Please enter a valid number between 1 and 100.";
        } else if (guess < randomNumber) {
            feedback.textContent = "Too low! Try again.";
        } else if (guess > randomNumber) {
            feedback.textContent = "Too high! Try again.";
        } else {
            feedback.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        }
        console.log(randomNumber);
        
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    });

    restartGame.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        feedback.textContent = '';
        attemptsDisplay.textContent = '';
        userGuess.value = '';
    });
});
