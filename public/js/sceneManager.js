const endScreen = document.querySelector("#endScreen");
const gameplaySection = document.querySelector("#gameplaySection");


const playAgainBtn = document.querySelector("#playAgainBtn");

playAgainBtn.addEventListener("click", () => {
    endScreen.style.display = "none";
    gameplaySection.style.display ="block";
    startCounter.parentElement.style.display = "flex";
    startGame();
});

goToMenuBtn.addEventListener("click", () => {
    mainMenuSection.style.display = "flex";
    endScreen.style.display = "none";
    startCounter.parentElement.style.display = "flex";
});