
const updateUI = () => {
    socket.emit("updateNickname", nickname);
    topCoins.children[1].innerHTML = userCoins;
    topGems.children[1].innerHTML = userGems;
    yourNickname.innerHTML = nickname;
    themesUnlockedArray.forEach(el => {
        let obj = themesUnlocked.find(o => o.name === el);
        console.log(obj);
        if(obj) obj.unlocked = true;
    });
    refreshInventory();
    
    
}

const loadData = () => {
    let savedDataa = localStorage.getItem("data");
    savedDataa = JSON.parse(savedDataa);
    if (savedDataa) {
        nickname = savedDataa.nickname;
        userCoins = savedDataa.coins;
        userGems = savedDataa.gems;
        themesUnlockedArray = savedDataa.themes;
        nicknameInput.parentElement.style.display = "none";
        mainMenuSection.style.display = "flex";
        updateUI();
    }else{
        nicknameInput.parentElement.style.display = "flex";
        mainMenuSection.style.display = "none";
    }
}

const saveData = () => {
    let data = JSON.stringify({
        nickname: nickname,
        coins: userCoins,
        gems: userGems,
        themes: themesUnlockedArray
    });
    localStorage.setItem("data", data);
    console.log(JSON.parse(data));
}