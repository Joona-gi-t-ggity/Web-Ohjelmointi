function swapCSS(cssPath, showId = null) {
    const loopList = [
        "nazi_styles.css", "styles.css", "null.css", 
        "siiri (1).css", "siiri (2).css", "siiri (3).css", 
        "siiri (4).css", "siiri (5).css", "siiri (6).css", 
        "siiri (7).css", "siiri (8).css", "siiri (9).css", 
        "siiri (10).css", "siiri (11).css", "flex.css"
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