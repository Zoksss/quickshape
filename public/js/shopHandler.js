const themesShop1 = document.querySelector("#themesShop1");
const themesShop2 = document.querySelector("#themesShop2");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const generateShop = () => {
    let usedNumbers = [];
    themesShop1.innerHTML = "";
    let randomNum;
    for (let i = 0; i < 3; i++) {
        while (true) {
            randomNum = getRandomInt(themesUnlocked.length);
            if (!usedNumbers.includes(randomNum)) break;
        }
        usedNumbers.push(randomNum);
        if (!themesUnlocked[randomNum].unlocked) {
            themesShop1.innerHTML += `
            <button class="theme1" onclick='buyTheme(this, "${themesUnlocked[randomNum].name}")' style="background-image: url('${themesUnlocked[randomNum].placeholder}');">
                <div class="theme-price">
                    <img src="./assets/${themesUnlocked[randomNum].gems ? 'gem' : "coin_icon"}.png" alt="">
                    <p id="shopThemePrice">${themesUnlocked[randomNum].price}</p>
                </div>
            </button>
        `;
        } else {
            themesShop1.innerHTML += `
            <button class="theme1" onclick='buyTheme(this, "${themesUnlocked[randomNum].name}")' style="background-image: url('${themesUnlocked[randomNum].placeholder}');">
                <div class="theme-price">
                    <p id="shopThemePrice">Owned</p>
                </div>
                <img class="checkmark" src="./assets/checkmark.png">
            </button>
        `;
        }
    }
    for (let i = 0; i < 3; i++) {
        while (true) {
            randomNum = getRandomInt(themesUnlocked.length);
            if (!usedNumbers.includes(randomNum)) break;
        }
        usedNumbers.push(randomNum);
        if (!themesUnlocked[randomNum].unlocked) {
            themesShop2.innerHTML += `
            <button class="theme1" onclick='buyTheme(this, "${themesUnlocked[randomNum].name}")' style="background-image: url('${themesUnlocked[randomNum].placeholder}');">
                <div class="theme-price">
                    <img src="./assets/${themesUnlocked[randomNum].gems ? 'gem' : "coin_icon"}.png" alt="">
                    <p id="shopThemePrice">${themesUnlocked[randomNum].price}</p>
                </div>
            </button>
        `;
        } else {
            themesShop2.innerHTML += `
            <button class="theme1" onclick='buyTheme(this, "${themesUnlocked[randomNum].name}")' style="background-image: url('${themesUnlocked[randomNum].placeholder}');">
                <div class="theme-price">
                    <p id="shopThemePrice">Owned</p>
                </div>
                <img class="checkmark" src="./assets/checkmark.png">
            </button>
        `;
        }
    }
    
}

generateShop();

const buyTheme = (btn, name) => {
    let themeObj = themesUnlocked.find(o => o.name === name);
    if (themeObj) {
        if (themeObj.unlocked) themeObj.object.setTheme();
        else {
            // buy theme logic
            if (themeObj.gems) {
                if (userGems >= themeObj.price) {
                    userGems -= themeObj.price;
                    topGems.children[1].innerHTML = userGems;
                    themeObj.unlocked = true;
                    btn.innerHTML = `
                        <div class="theme-price">
                            <p id="shopThemePrice">Owned</p>
                        </div>
                        <img class="checkmark" src="./assets/checkmark.png">
                    `;
                }
            }else{
                if (userCoins >= themeObj.price) {
                    userCoins -= parseInt(themeObj.price);
                    topCoins.children[1].innerHTML = userCoins;
                    themeObj.unlocked = true;
                    btn.innerHTML = `
                        <div class="theme-price">
                            <p id="shopThemePrice">Owned</p>
                        </div>
                        <img class="checkmark" src="./assets/checkmark.png">
                    `;
                }
            }
        }
    }
}

