const themesShop1 = document.querySelector("#themesShop1");
const themesShop2 = document.querySelector("#themesShop2");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const generateShop = () => {
    themesShop1.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        let randomNum = getRandomInt(4);
        //if(themesUnlocked[randomNum].unlocked) return;
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
}


generateShop();


const buyTheme = (btn, name) => {
    let themeObj = themesUnlocked.find(o => o.name === name);
    console.log(themeObj)
    if (themeObj) {
        if (themeObj.unlocked) themeObj.object.setTheme();
        else {
            // buy theme logic
            if(themeObj.gems){
                if(userGems >= themeObj.price){
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

const filterIt = (arr, searchKey) => {
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
}