let currRound = 0;
let prevShape = null;
let currShape = null;


let timeBegan = null, timeStopped = null, stoppedDuration = 0, started = null;
let currentTime, timeElapsed, min, sec, ms;
let timeString;

let add = false;

let times = [];

let shapes = [{ name: "pentagon", src: "./assets/shapes/pentagon_pix.png" }, { name: "circle", src: "./assets/shapes/circle_pix.png" }, { name: "triangle", src: "./assets/shapes/triangle_pix.png" }, { name: "square", src: "./assets/shapes/square_pix.png" },]


pentagonBtn.addEventListener("click", () => {
    checkIsCorrect("pentagon");
    console.log("Pentagon Clicked");
});

circleBtn.addEventListener("click", () => {
    console.log("Circle Clicked");
    checkIsCorrect("circle");

});
triangleBtn.addEventListener("click", () => {
    console.log("Triangle Clicked");
    checkIsCorrect("triangle");
});
squareBtn.addEventListener("click", () => {
    console.log("Square Clicked");
    checkIsCorrect("square");
});


const timerStart = () => {
    if (timeBegan === null) timeBegan = new Date();
    if (timeStopped !== null) stoppedDuration += (new Date() - timeStopped);
    started = setInterval(clockRunning, 10);
}

const timerReset = () => {
    clearInterval(started);
    stoppedDuration = 0;
    timeBegan = timeStopped = null;
    if (add) {
        let privDate = new Date(timeElapsed.getUTCSeconds() * 1000 + timeElapsed.getUTCMilliseconds() + 1500);
        sec = privDate.getUTCSeconds();
        ms = privDate.getMilliseconds();
    }
    times.push({ seconds: sec, milliseconds: (ms / 10).toFixed(0) });
}

const clockRunning = () => {
    currentTime = new Date(), timeElapsed = new Date(currentTime - timeBegan - stoppedDuration), sec = timeElapsed.getUTCSeconds(), ms = timeElapsed.getUTCMilliseconds();
    let secString = sec, milisString = (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms)
    timeString = secString + "." + ((ms < 100) ? "0" + (ms / 10).toFixed(0) : (ms / 10).toFixed(0));
    time.innerHTML = timeString;
    if (sec >= 59) pentagonBtn.click();
};

const generateRandomShape = () => {
    currRound++;
    round.innerHTML = currRound + "/" + 10;
    let num = getRandomInt(4);
    if (shapes[num].name != prevShape) {
        prevShape = shapes[num].name;
        currShapeImg.src = shapes[num].src;
        currShape = shapes[num].name;
    } else {
        num = (num == 3) ? 0 : 3;
        prevShape = shapes[num].name;
        currShapeImg.src = shapes[num].src;
        currShape = shapes[num].name;
    }
}


const endScreenCoins = document.querySelector("#endScreenCoins");
const endScreenGems = document.querySelector("#endScreenGems");

let isMultiplayerG = false;

const checkIsCorrect = (shape) => {
    if (shape === currShape) add = false;
    else {
        add = true;
        roundplustime.classList.remove("plustimeAnim");
        roundplustime.classList.add("plustimeAnim");
        roundplustime.addEventListener('animationend', () => { roundplustime.classList.remove("plustimeAnim"); });
    }
    timerReset();
    if (currRound >= 10) {
        timerReset();
        //
        currRoundAverage.innerHTML = calculateAverage();
        mulCurrRoundAverage.innerHTML = currRoundAverage.innerHTML;
        yourReady = true;
        if (opponetSent && yourReady) {
            // cal winner
            let yourTimeNum = parseFloat(currRoundAverage.innerHTML);
            let opponetTimeNum = parseFloat(opponetAverage.innerHTML);
            if (yourTimeNum < opponetTimeNum) winnerText.innerHTML = "You won!";
            else if (yourTimeNum > opponetTimeNum) winnerText.innerHTML = "Guest3904 won!";
            else winnerText.innerHTML = "Tie!";
        }

        socket.emit("averageSend", currRoundAverage.innerHTML);
        let avg = parseFloat(currRoundAverage.innerHTML);
        if (!isNaN(avg)) {
            if (avg >= 0 && avg <= 0.040) {
                userCoins += 83;
                userGems += 6;
                endScreenCoins.innerHTML = "+83";
                endScreenGems.innerHTML = "+6";
                mulEndScreenCoins.innerHTML = "+83";
                mulEndScreenGems.innerHTML = "+6";
            }
            else if (avg > 0.040 && avg <= 0.070) {
                userCoins += 61;
                userGems += 3;
                endScreenCoins.innerHTML = "+61";
                endScreenGems.innerHTML = "+3";
                mulEndScreenCoins.innerHTML = "+61";
                mulEndScreenGems.innerHTML = "+3";
            }
            else if (avg > 0.070 && avg <= 0.01) {
                userCoins += 33;
                userGems += 1;
                endScreenCoins.innerHTML = "+33";
                endScreenGems.innerHTML = "+1";
                mulEndScreenCoins.innerHTML = "+33";
                mulEndScreenGems.innerHTML = "+1";
            }
            else if (avg > 0.01 && avg <= 0.14) {
                userCoins += 21;
                userGems += 1;
                endScreenCoins.innerHTML = "+21";
                endScreenGems.innerHTML = "+1";
                mulEndScreenCoins.innerHTML = "+21";
                mulEndScreenGems.innerHTML = "+1";
            }
            else if (avg > 0.14 && avg <= 0.19) {
                userCoins += 17;
                userGems += 1;
                endScreenCoins.innerHTML = "+17";
                endScreenGems.innerHTML = "+1";
                mulEndScreenCoins.innerHTML = "+17";
                mulEndScreenGems.innerHTML = "+1";
            }
            else if (avg > 0.19 && avg <= 0.25) {
                userCoins += 11;
                endScreenCoins.innerHTML = "+11";
                endScreenGems.innerHTML = "+0";
                mulEndScreenCoins.innerHTML = "+11";
                mulEndScreenGems.innerHTML = "+0";
            }
            else if (avg > 0.25 && avg <= 0.45) {
                userCoins += 8;
                endScreenCoins.innerHTML = "+8";
                endScreenGems.innerHTML = "+0";
                mulEndScreenCoins.innerHTML = "+8";
                mulEndScreenGems.innerHTML = "+0";
            }
            else if (avg > 0.22 && avg <= 0.3) {
                userCoins += 4;
                endScreenCoins.innerHTML = "+4";
                endScreenGems.innerHTML = "+0";
                mulEndScreenCoins.innerHTML = "+4";
                mulEndScreenGems.innerHTML = "+0";
            }
            else {
                endScreenCoins.innerHTML = "+0";
                endScreenGems.innerHTML = "+0";
                mulEndScreenCoins.innerHTML = "+0";
                mulEndScreenGems.innerHTML = "+0";
            }
            saveData();
            topCoins.children[1].innerHTML = userCoins;
            topGems.children[1].innerHTML = userGems;

            
        }
        gameplaySection.style.display = "none";
        // calculate times and coins
        if (!isMultiplayerG) endScreen.style.display = "flex";
        else {
            multiplayerEndScreen.style.display = "flex";
        }
    } else {
        generateRandomShape();
        timerStart();
    }
};



var test = null;
const startGame = (isMultiplayer) => {
    isMultiplayerG = isMultiplayer;
    let step = 3;
    resetGameplayParamters();
    startCounter.parentElement.classList.remove("slide");
    startCounter.innerHTML = step;
    startCounter.classList.add("shake");
    startCounter.addEventListener('animationend', () => { startCounter.classList.remove("shake"); });

    test = setInterval(() => {
        step--;
        startCounter.innerHTML = step;
        console.log(step);
        startCounter.classList.add("shake");
        startCounter.addEventListener('animationend', () => { startCounter.classList.remove("shake"); });
        if (step == 0) {
            clearInterval(test);
            startCounter.parentElement.classList.add("slide");
            setTimeout(() => {
                startCounter.parentElement.classList.remove("slide"); startCounter.parentElement.style.display = "none";
            }, 130);
            generateRandomShape();
            timerStart();
        }
    }, 1000);
}



const resetGameplayParamters = () => {
    startCounter.parentElement.classList.remove("slide");
    test = null;
    currShapeImg.src = "";
    times = [];
    currRound = 0;
    prevShape = currShape = null;
    round.innerHTML = currRound + "/" + "10";
    time.innerHTML = "0.00";
    winnerText.innerHTML = "Waiting..."
}


const calculateAverage = () => {
    let averageSeconds = 0, averageMilliseconds = 0;
    let counter = 0;
    for (let i = 0; i < 10; i++) {
        averageSeconds += parseInt(times[i].seconds);
        averageMilliseconds += parseInt(times[i].milliseconds);
        counter++;
    }
    let allMillisecodns = averageMilliseconds + averageSeconds * 1000;
    return msToTime(Math.round(allMillisecodns /= counter));
}


const msToTime = (s) => {
    const pad = (n, z) => {
        z = z || 2;
        if (n == 0) return "";
        return ('00' + n).slice(-z);
    }
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    return secs + '.' + pad(ms, 3);
}