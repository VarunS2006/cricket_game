let userScore = 0;
let generatedTarget = 0;

const targetButton = document.querySelector("#target-button");
const target = document.querySelector("#target");
const scores = document.querySelectorAll(".score");
const totalScore = document.querySelector("#updatescore");
const restartBtn = document.querySelector("#restart");

// Disable buttons initially
scores.forEach(btn => btn.disabled = true);

targetButton.addEventListener("click", () => {
    generatedTarget = Math.floor(Math.random() * 110);
    target.innerText = `${generatedTarget}`;
    userScore = 0;
    totalScore.innerText = userScore;
    scores.forEach(btn => btn.disabled = false);
});

scores.forEach(button => {
    button.addEventListener("click", () => {
        const playerScore = parseInt(button.innerText);
        const compScore = Math.floor(Math.random() * 7);

        if (playerScore === compScore) {
            alert(`💥 You're OUT! Final Score: ${userScore}`);

            if (userScore >= generatedTarget) {
                alert("🎉 You WON! 🏆");
            } else if (userScore === generatedTarget - 1) {
                alert("🤝 Match TIED!");
            } else {
                alert("❌ You LOST! Final Score: " + userScore);
            }

            scores.forEach(btn => btn.disabled = true);
            return;
        }

        userScore += playerScore;
        totalScore.innerText = userScore;

        if (userScore >= generatedTarget) {
            alert("🎉 You WON! 🏆");
            scores.forEach(btn => btn.disabled = true);
        }
    });
});

restartBtn.addEventListener("click", () => {
    target.innerText = "0";
    totalScore.innerText = "0";
    userScore = 0;
    generatedTarget = 0;
    scores.forEach(btn => btn.disabled = true);
});
