function swapCSS(cssPath, loopList) {
    const styleElem = document.getElementById("styleSheetElem");

    var filename = styleElem.getAttribute("href").split('/').pop();
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
}