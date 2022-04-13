const endScreen = document.querySelector("#endScreen");
const gameplaySection = document.querySelector("#gameplaySection");


const playPage = document.querySelector("#playPage");
const shopPage = document.querySelector("#shopPage");

const navPlayBtn = document.querySelector("#navPlayBtn");
const navShopBtn = document.querySelector("#navShopBtn");

const playAgainBtn = document.querySelector("#playAgainBtn");

const transitionHolder = document.querySelector("#transitionHolder");

navPlayBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        setTimeout(() => {
            shopPage.style.display = "none";
            playPage.style.display = "flex";
            navPlayBtn.classList.add("active");
            navShopBtn.classList.remove("active");
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });

});

navShopBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        setTimeout(() => {
            playPage.style.display = "none";
            shopPage.style.display = "flex";
            navShopBtn.classList.add("active");
            navPlayBtn.classList.remove("active");
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });

});


playAgainBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        setTimeout(() => {
            endScreen.style.display = "none";
            gameplaySection.style.display = "block";
            startCounter.parentElement.style.display = "flex";

        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });

    startGame();
});

goToMenuBtn.addEventListener("click", () => {
    mainMenuSection.style.display = "flex";
    endScreen.style.display = "none";
    startCounter.parentElement.style.display = "flex";    
});