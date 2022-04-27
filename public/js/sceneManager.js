const endScreen = document.querySelector("#endScreen");
const gameplaySection = document.querySelector("#gameplaySection");


const playPage = document.querySelector("#playPage");
const shopPage = document.querySelector("#shopPage");
const inventoryPage = document.querySelector("#inventoryPage");


const navPlayBtn = document.querySelector("#navPlayBtn");
const navShopBtn = document.querySelector("#navShopBtn");
const navInventorypBtn = document.querySelector("#navInventorypBtn");

const playAgainBtn = document.querySelector("#playAgainBtn");

const transitionHolder = document.querySelector("#transitionHolder");

const startSingleplayerBtn = document.querySelector("#startSingleplayerBtn");
const goToMenuBtn = document.querySelector("#goToMenuBtn");
const mulGoToMenuBtn = document.querySelector("#mulGoToMenuBtn");

const mainMenuSection = document.querySelector("#mainMenuSection");
/*
startSingleplayerBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        let l = setTimeout(() => {
            mainMenuSection.style.display = "none";
            gameplaySection.style.display = "block";
            clearTimeout(l);
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });
    startGame();

});

navPlayBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        let l = setTimeout(() => {
            shopPage.style.display = "none";
            playPage.style.display = "flex";
            navPlayBtn.classList.add("active");
            navShopBtn.classList.remove("active");
            clearTimeout(l);
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });

});

navShopBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        let l = setTimeout(() => {
            playPage.style.display = "none";
            shopPage.style.display = "flex";
            navShopBtn.classList.add("active");
            navPlayBtn.classList.remove("active");
            clearTimeout(l);
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });

});


playAgainBtn.addEventListener("click", () => {
    transitionHolder.classList.add("transition");
    transitionHolder.addEventListener("animationstart", () => {
        let l = setTimeout(() => {
            endScreen.style.display = "none";
            gameplaySection.style.display = "block";
            startCounter.parentElement.style.display = "flex";
            clearTimeout(l);
        }, 200);
    })
    transitionHolder.addEventListener('animationend', () => { transitionHolder.classList.remove("transition"); });

    startGame(fall);
});

*/


startSingleplayerBtn.addEventListener("click", () => {
    mainMenuSection.style.display = "none";
    gameplaySection.style.display = "block";
    startGame(false);

});

navPlayBtn.addEventListener("click", () => {
    shopPage.style.display = "none";
    playPage.style.display = "flex";
    inventoryPage.style.display = "none";
    navPlayBtn.classList.add("active");
    navShopBtn.classList.remove("active");
    navInventorypBtn.classList.remove("active");
});

navShopBtn.addEventListener("click", () => {
    playPage.style.display = "none";
    shopPage.style.display = "flex";
    inventoryPage.style.display = "none";
    navShopBtn.classList.add("active");
    navPlayBtn.classList.remove("active");
    navInventorypBtn.classList.remove("active");

});

navInventorypBtn.addEventListener("click", () => {
    refreshInventory();
    playPage.style.display = "none";
    shopPage.style.display = "none";
    inventoryPage.style.display = "flex";
    navInventorypBtn.classList.add("active");
    navPlayBtn.classList.remove("active");
    navShopBtn.classList.remove("active");

})


playAgainBtn.addEventListener("click", () => {
    endScreen.style.display = "none";
    gameplaySection.style.display = "block";
    startCounter.parentElement.style.display = "flex";

    startGame(false);
});
goToMenuBtn.addEventListener("click", () => {
    mainMenuSection.style.display = "flex";
    endScreen.style.display = "none";
    gameplaySection.style.display = "none";
    startCounter.parentElement.style.display = "flex";
});

