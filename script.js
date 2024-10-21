const desiredAnswers = [5, 5, 5, 5, 5]; // Your desired answers
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
        totalScore += difference; // Sum differences
    }

    if (isValid) {
        const compatibilityScore = Math.max(0, 100 - totalScore * 5); // Cap the score at 0
        displayResult(compatibilityScore);
    }
});

function displayResult(score) {
    const resultDiv = document.getElementById('result');
    const scoreSpan = document.getElementById('score');
    const remarkP = document.getElementById('remark');

    scoreSpan.textContent = score;

    if (score >= THRESHOLD_LOVE) {
        remarkP.textContent = "We are a match";
    } else if (score >= THRESHOLD_FRIENDS) {
        remarkP.textContent = "We could be friends"; // Fixed missing quote
    } else {
        remarkP.textContent = "We are not a match at all";
    }

    resultDiv.classList.remove('hidden');
}
