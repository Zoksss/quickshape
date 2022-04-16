class Theme {
    constructor(name, backSRC, centerSRC, btnSRC, btnWideSRC, navSRC, topSRC, lineSRC) {
        this.name = name;
        this.backSRC = backSRC;
        this.centerSRC = centerSRC;
        this.btnSRC = btnSRC;
        this.btnWideSRC = btnWideSRC;
        this.navSRC = navSRC;
        this.topSRC = topSRC;
        this.lineSRC = lineSRC;
    }
    setTheme() {

        document.body.style.backgroundImage = `url("${this.backSRC}")`;
        document.querySelector("#lowerNav").style.backgroundImage = `url("${this.navSRC}")`;
        document.querySelectorAll(".underline").forEach(e => {e.style.backgroundImage = `url("${this.lineSRC}")`});
        for (let i = 0; i < centerDOMArray.length; i++) {
            centerDOMArray[i].style.backgroundImage = `url("${this.centerSRC}")`;
            console.log(centerDOMArray[i]);
        }
        for (let i = 0; i < btnWideDOMArray.length; i++)
            btnWideDOMArray[i].style.backgroundImage = `url("${this.btnWideSRC}")`;
        for (let i = 0; i < topDOMArray.length; i++)
            topDOMArray[i].style.backgroundImage = `url("${this.topSRC}")`;
        for (let i = 0; i < btnDOMArray.length; i++)
            btnDOMArray[i].style.backgroundImage = `url("${this.btnSRC}")`;
    }
}


let backDOMArray = [ // css back
    document.body
]
let centerDOMArray = [ // css back
    document.querySelector("#currShapeWindow"),
    document.querySelector("#badgeSection"),
    document.querySelector("#specialDealContainer"),
    document.querySelector("#startSingleplayerBtn"),
]
let btnDOMArray = [ // css back
    document.querySelectorAll(".shape-btn")[0],
    document.querySelectorAll(".shape-btn")[1],
    document.querySelectorAll(".shape-btn")[2],
    document.querySelectorAll(".shape-btn")[3],
    document.querySelector(".settings"),
    document.querySelector("#goToMenuBtn"),
    document.querySelector("#playAgainBtn"),
]

let btnWideDOMArray = [ // css back
    document.querySelector("#vsButton"),
]

let topDOMArray = [ // css back
    document.querySelector("#topNickname"),
    document.querySelector("#topCoins"),
    document.querySelector("#topGems"),
    document.querySelector(".time"),
    document.querySelector(".rounds"),
]

let navDOMArray = [ // css back
    document.querySelector("#lowerNav"),
]

const test2 = new Theme("tett",
    "/public/assets/themes/desert/back.png",
    "/public/assets/themes/desert/center.png",
    "/public/assets/themes/desert/btn.png",
    "/public/assets/themes/desert/btn_wide.png",
    "/public/assets/themes/desert/nav.png",
    "/public/assets/themes/desert/top.png",
    "/public/assets/themes/desert/line.png",
)

test2.setTheme();