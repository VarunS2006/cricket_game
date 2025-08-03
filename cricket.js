let userScore = 0;
let generatedTarget = 0;

let targetButton = document.querySelector("#target-button");
let target = document.querySelector("#target");
let scores = document.querySelectorAll(".score");
scores.forEach(btn => btn.disabled = true);
let totalScore = document.querySelector("#updatescore");

targetButton.addEventListener("click", () => {
    generatedTarget = Math.floor(Math.random() * 110);
    console.log(generatedTarget);
    target.innerText = `${generatedTarget}`;
    userScore = 0;
    totalScore.innerText = userScore;
    scores.forEach(btn => btn.disabled = false);
});

scores.forEach(button => {
    button.addEventListener("click", () => {
        let playerScore = parseInt(button.innerText);
        let compScore = Math.floor(Math.random() * 7);

        console.log("You Scored:", playerScore);
        console.log("Comp Scored:", compScore);

        if (playerScore === compScore) {
            console.log("💥 OUT! Final Score:", userScore);
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
