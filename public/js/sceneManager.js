const endScreen = document.querySelector("#endScreen");
const gameplayScreen = document.querySelector("#gameplayScreen");


const playAgainBtn = document.querySelector("#playAgainBtn");

playAgainBtn.addEventListener("click", () => {
    endScreen.style.display = "none";
    gameplayScreen.style.display ="block";
    startCounter.parentElement.style.display = "flex";
    startGame();
});