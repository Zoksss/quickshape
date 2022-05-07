let themeCounter = 0;
let el;
const refreshInventory = () => {
    themeCounter = 0;
    if (el) el.parentNode.removeChild(el);
    for (let i = 0; i < themesUnlocked.length; i++) {
        if (themesUnlocked[i].unlocked) {
            // insert theme
            if (i === 0) {
                el = document.createElement("div")
                el.classList.add("themes-unlocked-row")
                inventorySection.prepend(el);
            }
            let btn = document.createElement("button");
            btn.setAttribute("onclick", `inventorySetTheme("${themesUnlocked[i].name}")`)
            btn.innerHTML = `<img src="${themesUnlocked[i].placeholder}">`
            btn.style.backgroundImage = `url("${themesUnlocked[i].placeholder}")`
            el.prepend(btn)
            themeCounter++;
        }
    }
    themesUnlocedCounter.innerHTML = `Your Themes (${themeCounter}/${themesUnlocked.length})`
}

const inventorySetTheme = (themeName) => {
    console.log(themeName)
    let themeObj = themesUnlocked.find(o => o.name === themeName);
    if (themeObj) {
        if (themeObj.unlocked) themeObj.object.setTheme();
    }

}