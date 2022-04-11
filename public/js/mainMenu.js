const startSingleplayerBtn = document.querySelector("#startSingleplayerBtn");
const goToMenuBtn = document.querySelector("#goToMenuBtn");

const mainMenuSection = document.querySelector("#mainMenuSection");

startSingleplayerBtn.addEventListener("click", () => {
    mainMenuSection.style.display = "none";
    gameplaySection.style.display = "block";
    startGame();
});
