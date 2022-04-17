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
        document.querySelectorAll(".underline").forEach(e => { e.style.backgroundImage = `url("${this.lineSRC}")` });
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

let themes = {
    basic: new Theme("Basic",
        "./assets/themes/basic/back.png",
        "./assets/themes/basic/center.png",
        "./assets/themes/basic/btn.png",
        "./assets/themes/basic/btn_wide.png",
        "./assets/themes/basic/nav.png",
        "./assets/themes/basic/top.png",
        "./assets/themes/basic/line.png",
    ),
    science: new Theme("Science",
        "./assets/themes/science/back.png",
        "./assets/themes/science/center.png",
        "./assets/themes/science/btn.png",
        "./assets/themes/science/btn_wide.png",
        "./assets/themes/science/nav.png",
        "./assets/themes/science/top.png",
        "./assets/themes/science/line.png",
    ),
    desert: new Theme("Desert",
        "./assets/themes/desert/back.png",
        "./assets/themes/desert/center.png",
        "./assets/themes/desert/btn.png",
        "./assets/themes/desert/btn_wide.png",
        "./assets/themes/desert/nav.png",
        "./assets/themes/desert/top.png",
        "./assets/themes/desert/line.png",
    ),
    easter: new Theme("Easter 22",
        "./assets/themes/easter22/back.png",
        "./assets/themes/easter22/center.png",
        "./assets/themes/easter22/btn.png",
        "./assets/themes/easter22/btn_wide.png",
        "./assets/themes/easter22/nav.png",
        "./assets/themes/easter22/top.png",
        "./assets/themes/easter22/line.png",
    ),

}



let backDOMArray = [ // css back
    document.body
]
let centerDOMArray = [ // css back
    document.querySelector("#currShapeWindow"),
    document.querySelector("#badgeSection"),
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



//console.table(centerDOMArray);
themes.science.setTheme();