const startSingleplayerBtn = document.querySelector("#startSingleplayerBtn");
const goToMenuBtn = document.querySelector("#goToMenuBtn");

const mainMenuSection = document.querySelector("#mainMenuSection");

startSingleplayerBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        setTimeout(() => {
            mainMenuSection.style.display = "none";
            gameplaySection.style.display = "block";
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });
    startGame();

});
