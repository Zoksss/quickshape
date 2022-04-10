const p1 = document.querySelector("#playPage");
const p2 = document.querySelector("#inventoryPage");

const p3 = document.querySelector("#shopPage");

let startingX;


p1.addEventListener("touchstart", (evt) => {
    startingX = evt.touches[0].clientX;
});

p1.addEventListener("touchmove", (evt) => {
    var touch = evt.touches[0];
    var change = startingX - touch.clientX;
    if (change < 0) {
        return
    } else {
        p1.style.left = '-' + change + 'px';
        p2.style.display = 'flex';
        p2.style.left = (screen.width + change) + 'px';
        evt.preventDefault();
    }
});

p1.addEventListener("touchend", (evt) => {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1.style.left = 0;
        p2.style.left = '100%';
        p2.style.display = 'none';
    } else {
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p1.style.left = '-100%';
        p2.style.left = '0';
        p2.style.display = 'flex';
    }
});

p2.addEventListener("touchstart", (evt) => {
    startingX = evt.touches[0].clientX;
    p1.style.transition = '';
    p2.style.transition = '';
    p1.style.display = 'none';
});

p2.addEventListener("touchmove", (evt) => {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        p2.style.display = 'flex';
        p2.style.left = (change - screen.width) + 'px';
        p3.style.left = -change + 'px';
        evt.preventDefault();
        return;
    }
    p1.style.display = 'flex';
    p1.style.left = (change - screen.width) + 'px';
    p2.style.left = change + 'px';
    evt.preventDefault();
});

p2.addEventListener("touchend", (evt) => {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p1.style.left = '-100%';
        p1.style.display = 'none';
        p2.style.left = '0';
    } else {
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p1.style.left = '0';
        p2.style.left = '100%';
    }
});




p3.addEventListener("touchstart", (evt) => {
    startingX = evt.touches[0].clientX;
    p2.style.transition = '';
    p3.style.transition = '';
    p2.style.display = 'none';
});

p3.addEventListener("touchmove", (evt) => {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p2.style.display = 'flex';
    p2.style.left = (change - screen.width) + 'px';
    p3.style.left = change + 'px';
    evt.preventDefault();
});

p3.addEventListener("touchend", (evt) => {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        p2.style.left = '-100%';
        p2.style.display = 'none';
        p3.style.left = '0';
    } else {
        p2.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p3.style.left = '0';
        p3.style.left = '100%';
    }
});