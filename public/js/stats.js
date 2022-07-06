const hideShowNickname = () => {
        nicknameInput.parentElement.style.display = "none";
        mainMenuSection.style.display = "flex";
        
}
nicknameSubmit.addEventListener("click", () => {
    nickname = nicknameInput.value;
    yourNickname.innerHTML = nickname;
    socket.emit("updateNickname", nickname);
    saveData();
    hideShowNickname();
})

let themesUnlockedArray = ["Basic"];

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
    },
    {
        name: "Hacker",
        placeholder: "./assets/themes_placeholders/hacker.png",
        object: themes.hacker,
        unlocked: false,
        price: 10,
        gems: false,
        highValue: false,
        disabled: false
    },
    {
        name: "Cherry",
        placeholder: "./assets/themes_placeholders/cherry.png",
        object: themes.cherry,
        unlocked: false,
        price: 10,
        gems: false,
        highValue: false,
        disabled: false
    },
    {
        name: "Japan",
        placeholder: "./assets/themes_placeholders/japan.png",
        object: themes.japan,
        unlocked: false,
        price: 10,
        gems: false,
        highValue: false,
        disabled: false
    }
];