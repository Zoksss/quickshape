let userCoins = 0;
let userGems = 1000;

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
        price: 150,
        gems: true,
        highValue: false,
        disabled: false
    },
    {
        name: "Science",
        placeholder: "./assets/themes_placeholders/science.png",
        object: themes.science,
        unlocked: true,
        price: 300,
        gems: false,
        highValue: false,
        disabled: false
    },
    {
        name: "Easter",
        placeholder: "./assets/themes_placeholders/easter22.png",
        object: themes.easter22,
        unlocked: false,
        price: 300,
        gems: true,
        highValue: false,
        disabled: true
    }
];