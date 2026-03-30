function createStyleShiz(subjectId, cssPath) {
    const container = document.getElementById(subjectId);

    const styleElem = document.getElementById("styleSheetElem");
    var default_css = styleElem.getAttribute("href")

    container.innerHTML = `
        <button onclick='swapCSS("${cssPath}", "CssButton")' style="margin-left: auto;">Muuta CSS-</button>
        <button onclick='showCSS("CssButton")' id="CssButton">Näytä CSS-</button>
        <button onclick='loadCSS(null, "${default_css}")'>def CSS</button>
        <button onclick='loadCSS("${cssPath}","nazi_styles.css")'>teht CSS</button>
    `
}

function swapCSS(cssPath, showId = null) {
    const loopList = [
        "nazi_styles.css", "styles.css", "null.css", 
        "siiri (1).css", "siiri (2).css", "siiri (3).css", 
        "siiri (4).css", "siiri (5).css", "siiri (6).css", 
        "siiri (7).css", "siiri (8).css", "siiri (9).css", 
        "siiri (10).css", "siiri (11).css", "flex.css", "table.css"
    ];
    const styleElem = document.getElementById("styleSheetElem");

    var filename = styleElem.getAttribute("href").split("/").pop();
    let index = loopList.indexOf(filename);
    var nextIndex = index + 1;
    if (nextIndex >= loopList.length) {
        nextIndex = 0;
    }
    //console.log(cssPath);
    //console.log(filename);
    //console.log(index);
    //console.log(nextIndex);
    //console.log(loopList.length);
    //console.log(loopList[nextIndex]);
    styleElem.setAttribute("href", `${cssPath}/${loopList[nextIndex]}`);
    if (showId !== null) {
        showCSS(showId);
    }
}
function showCSS(showId) {
    const styleElem = document.getElementById("styleSheetElem");
    const showElem = document.getElementById(showId);
    const filename = styleElem.getAttribute("href").split("/").pop()
    if (filename === "nazi_styles.css") {
        showElem.innerText = 'CSS: css_teht.css'
    }else {
        showElem.innerText = `CSS: ${filename}`
    }
}

function loadCSS(cssPath=null, filename) {
    const styleElem = document.getElementById("styleSheetElem");

    if (cssPath !== null) {
        styleElem.setAttribute("href", `${cssPath}/${filename}`);
    } else {
        styleElem.setAttribute("href", `${filename}`);
    }
}