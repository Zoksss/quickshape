const pentagonBtn = document.querySelector("#pentagonBtn");
const circleBtn = document.querySelector("#circleBtn");
const triangleBtn = document.querySelector("#triangleBtn");
const squareBtn = document.querySelector("#squareBtn");

const currShapeImg = document.querySelector("#currShapeImg");
const time = document.querySelector("#time");
const round = document.querySelector("#round");

let currRound = 0;
let prevShape = null;

const gameSettings = {
    rounds: 10,
    missTime: 1.5
};


let timeBegan = null
    , timeStopped = null
    , stoppedDuration = 0
    , started = null;

let currentTime, timeElapsed, min, sec, ms;


let times = [];



let shapes = [
    {
        name: "pentagon",
        src: "./assets/shapes/pentagon_pix.png"
    },
    {
        name: "circle",
        src: "./assets/shapes/circle_pix.png"
    },
    {
        name: "triangle",
        src: "./assets/shapes/triangle_pix.png"
    },
    {
        name: "square",
        src: "./assets/shapes/square_pix.png"
    },
]

const generateRandomShape = () => {
    currRound++;
    round.innerHTML = currRound + "/" + gameSettings.rounds;
    let num = getRandomInt(4);
    if (shapes[num].name != prevShape) {
        prevShape = shapes[num].name;
        currShapeImg.src = shapes[num].src;
    } else {
        num = (num == 3) ? 0 : 3;
        prevShape = shapes[num].name;
        currShapeImg.src = shapes[num].src;
    }
}

pentagonBtn.addEventListener("click", () => {
    console.log("Pentagon Clicked");
    timerReset();
    generateRandomShape();
    console.table(times);
    timerStart();
});

circleBtn.addEventListener("click", () => {
    console.log("Circle Clicked");
});
triangleBtn.addEventListener("click", () => {
    console.log("Triangle Clicked");
});
squareBtn.addEventListener("click", () => {
    console.log("Square Clicked");
});


const timerStart = () => {
    if (timeBegan === null) timeBegan = new Date();
    if (timeStopped !== null) stoppedDuration += (new Date() - timeStopped);
    started = setInterval(clockRunning, 10);
}

const timerReset = () => {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = null;
    timeStopped = null;
    times.push({ seconds: sec, milliseconds: (ms / 10).toFixed(0) });
}

const clockRunning = () => {
    currentTime = new Date()
        , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
        , sec = timeElapsed.getUTCSeconds()
        , ms = timeElapsed.getUTCMilliseconds();
    let secString = (sec > 9 ? sec : "0" + sec)
        , milisString = (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms)
    timeString = secString + "." + ((ms < 100) ? "0" + (ms / 10).toFixed(0) : (ms / 10).toFixed(0));
    time.innerHTML = timeString;
    if (sec >= 59) pentagonBtn.click();
};

timerStart();






function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}