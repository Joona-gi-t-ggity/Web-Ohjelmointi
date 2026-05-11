var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

function pickElement(index_id, output_id) {
    const outputElem = document.getElementById(output_id);
    const inputIndex = Number(document.getElementById(index_id).value);

    outputElem.innerText = sanat[inputIndex - 1];
}

function getIndex(wordUin_id, output_id) {
    const outputElem = document.getElementById(output_id);
    const searchWord = document.getElementById(wordUin_id).value;

    outputElem.innerText = sanat.indexOf(searchWord);
}

function printList(output_id, list) {
    const outputElem = document.getElementById(output_id);

    outputElem.innerHTML = "";
    list.forEach(element => {
        var liElem = document.createElement("li");
        liElem.innerText = element;

        outputElem.append(liElem);
    });
}

function cutList(num1_uinId, num2_uinId, output_id) {
    const num1 = Number(document.getElementById(num1_uinId).value);
    const num2 = Number(document.getElementById(num2_uinId).value);

    printList(output_id, sanat.slice(num1, num2))
}

function printTxt(output_id) {
    printList(output_id, sanat);
}

function printNum(output_id) {
    printList(output_id, numerot);
}

function sortTxt() {
    sanat.sort();
}
function sortNum() {
    numerot.sort(function(a, b){return a - b});
}

function reverseTxt() {
    sanat.reverse();
}
function reverseNum() {
    numerot.reverse();
}

var comparisonValue = 0;
function isOverN(value) {
    return (value > comparisonValue);
}
function isUnderN(value) {
    return (value < comparisonValue);
}

function filterOver(uin_id) {
    const uinVal = Number(document.getElementById(uin_id).value);
    comparisonValue = uinVal;

    numerot = numerot.filter(isOverN);
}

function filterUnder(uin_id) {
    const uinVal = Number(document.getElementById(uin_id).value);
    comparisonValue = uinVal;
    
    numerot = numerot.filter(isUnderN);
}
