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

let opponetNickname = "Player";
socket.on("startGame", (nicksData) => {
    opponetNickname = (nicksData[0] === nickname) ? nicksData[1] : nicksData[0];
    console.log("starting game");
    multiplatyerOpponetNickname.innerHTML = opponetNickname;
    opponetAverageTitle.innerHTML = opponetNickname+":";
    multiplatyerYourNickname.innerHTML = nickname + "(YOU)";
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
    multiplayerEndScreen.style.display = "none";
    startCounter.parentElement.style.display = "flex";
    socket.emit("multiplayerDisconnect");
});

socket.on("averageShare", time => {
    opponetAverage.innerHTML = time;
    opponetSent = true;
    if(opponetSent && yourReady){
        // cal winner
        // cal winner
        let yourTimeNum = parseFloat(currRoundAverage.innerHTML);
        let opponetTimeNum = parseFloat(opponetAverage.innerHTML);
        if (yourTimeNum < opponetTimeNum) winnerText.innerHTML = "You won!";
        else if (yourTimeNum > opponetTimeNum) winnerText.innerHTML = opponetNickname + " won!";
        else winnerText.innerHTML = "Tie!";
    }
});