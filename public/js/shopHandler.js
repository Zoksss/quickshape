const themesShop1 = document.querySelector("#themesShop1");
const themesShop2 = document.querySelector("#themesShop2");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const generateShop = () => {
    themesShop1.innerHTML = "";

    for(let i = 0; i < 3; i++){
        let randomNum = getRandomInt(4);
        //if(themesUnlocked[randomNum].unlocked) return;
        themesShop1.innerHTML += `
        <button class="theme1" style="background-image: url('${themesUnlocked[randomNum].placeholder}');">
            <div class="theme-price">
                <img src="./assets/coin_icon.png" alt="">
                <p id="shopThemePrice">${themesUnlocked[randomNum].price}</p>
            </div>
        </button>
    `;
    }
    themesShop2.innerHTML = "";
    for(let i = 0; i < 3; i++){
        let randomNum = getRandomInt(4);
        //if(themesUnlocked[randomNum].unlocked) return;
        themesShop2.innerHTML += `
        <button class="theme1" style="background-image: url('${themesUnlocked[randomNum].placeholder}');">
            <div class="theme-price">
                <img src="./assets/coin_icon.png" alt="">
                <p id="shopThemePrice">${themesUnlocked[randomNum].price}</p>
            </div>
        </button>
    `;
    }
}


generateShop();