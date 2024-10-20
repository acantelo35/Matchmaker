const desiredAnswers = [4, 5, 3, 5, 4]; // Your desired answers
const THRESHOLD_LOVE = 80;
const THRESHOLD_FRIENDS = 50;

document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    let totalScore = 0;
    let isValid = true;

    for (let i = 1; i <= 5; i++) {
        const answer = parseInt(document.getElementById(`q${i}`).value);
        if (isNaN(answer) || answer < 1 || answer > 5) {
            isValid = false;
            alert(`Please enter a valid number (1-5) for question ${i}.`);
            break;
        }
        const difference = Math.abs(answer - desiredAnswers[i - 1]);
        totalScore += difference;
    }

    if (isValid) {
        const compatibilityScore = 100 - totalScore * 5; // Max score 100
        displayResult(compatibilityScore);
    }
});

function displayResult(score) {
    const resultDiv = document.getElementById('result');
    const scoreSpan = document.getElementById('score');
    const remarkP = document.getElementById('remark');

    scoreSpan.textContent = score;

    if (score >= THRESHOLD_LOVE) {
        remarkP.textContent = "Congratulations! You've found your true love! 💖";
    } else if (score >= THRESHOLD_FRIENDS) {
        remarkP.textContent = "You could be great friends! 😊";
    } else {
        remarkP.textContent = "Run away! This isn't meant to be! 😱";
    }

    resultDiv.classList.remove('hidden');
}
