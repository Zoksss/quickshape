const vsButton = document.querySelector("#vsButton");
const multiplayerSearching = document.querySelector("#multiplayerSearching");
const multiplayerCancelSearch = document.querySelector("#multiplayerCancelSearch");
const multiplayerMatchFound = document.querySelector("#multiplayerMatchFound");



vsButton.addEventListener("click", () => {
    mainMenuSection.style.display = "none";
    multiplayerSearching.style.display = "flex";
    socket.emit("startJoining");
});

multiplayerCancelSearch.addEventListener("click", () => {
    mainMenuSection.style.display = "flex";
    multiplayerSearching.style.display = "none";
    socket.emit("cancelSearch");
});

socket.on("startGame", () => {
    console.log("starting game");
    multiplayerSearching.style.display = "none";
    multiplayerMatchFound.style.display = "flex";
    setTimeout(() => {
        startGame(true);
        gameplaySection.style.display = "block";
        multiplayerMatchFound.style.display = "none";
    }, 3000);
});



mulGoToMenuBtn.addEventListener("click", () => {
    mainMenuSection.style.display = "flex";
    endScreen.style.display = "none";
    gameplaySection.style.display = "none";
    startCounter.parentElement.style.display = "flex";
    socket.emit("multiplayerDisconnect");
});

socket.on("averageShare", time => {
    opponetAverage.innerHTML = time;
});