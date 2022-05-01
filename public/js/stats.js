let userCoins = 75;
let userGems = 10;
let nickname = "Player";
topCoins.children[1].innerHTML = userCoins;
topGems.children[1].innerHTML = userGems;
yourNickname.innerHTML = nickname;

const nicknameInput = document.querySelector("#nicknameInput");
const nicknameSubmit = document.querySelector("#nicknameSubmit");


const hideShowNickname = (hide) => {
    if(hide){

        nicknameInput.parentElement.style.display = "none";
        mainMenuSection.style.display = "flex";

    }
    else{
        mainMenuSection.style.display = "none";
    }
}
nicknameSubmit.addEventListener("click", () => {
    nickname = nicknameInput.value;
    yourNickname.innerHTML = nickname;
    hideShowNickname(true)
})
hideShowNickname(false)


let themesUnlocked = [
    {
        name: "Basic",
        placeholder: "./assets/themes_placeholders/basic.png",
        object: themes.basic,
        unlocked: true,
        price: 0,
        gems: false,
        highValue: false,
        disabled: false
    },
    {
        name: "Desert",
        placeholder: "./assets/themes_placeholders/desert.png",
        object: themes.desert,
        unlocked: false,
        price: 10,
        gems: true,
        highValue: false,
        disabled: false
    },
    {
        name: "Science",
        placeholder: "./assets/themes_placeholders/science.png",
        object: themes.science,
        unlocked: false,
        price: 10,
        gems: false,
        highValue: false,
        disabled: false
    },
    {
        name: "Easter",
        placeholder: "./assets/themes_placeholders/easter22.png",
        object: themes.easter22,
        unlocked: false,
        price: 10,
        gems: true,
        highValue: false,
        disabled: false
    },
    {
        name: "Mountain",
        placeholder: "./assets/themes_placeholders/mountain.png",
        object: themes.mountain,
        unlocked: false,
        price: 10,
        gems: false,
        highValue: false,
        disabled: false
    },
    {
        name: "Dark",
        placeholder: "./assets/themes_placeholders/dark.png",
        object: themes.dark,
        unlocked: false,
        price: 10,
        gems: false,
        highValue: false,
        disabled: false
    }
];