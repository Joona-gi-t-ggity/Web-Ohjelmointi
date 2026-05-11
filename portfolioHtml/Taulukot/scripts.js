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
// opettaja on nazi saksa ja vittu muutti tehtävän ja mut piti lisää lisä paskaaa vittu kohta jotain sattuu (siis mua koska oon masokisti ja alan runkkaa koulun vessas saatana)
var filteredList = []
function printFiltered(output_id) {
    printList(output_id, filteredList);
}
// määritä vertaus arvo
var comparisonValue = 0;
function isOverN(value) {
    // palauta onko annettu arvo on yli vertaus arvon
    return (value > comparisonValue);
}
function isUnderN(value) {
    // palauta onko annettu arvo on alle vertaus arvon
    return (value < comparisonValue);
}

function filterOver(uin_id) {
    // hae käyttäjän antama arvo
    const uinVal = Number(document.getElementById(uin_id).value);
    // laita käyttäjän arvo vertaus arvoksi
    comparisonValue = uinVal;
    // tee numero listasta filtteröity numero lista käyttäen isOverN funktiota
    filteredList = numerot.filter(isOverN);
}

function filterUnder(uin_id) {
    // hae käyttäjän antama arvo
    const uinVal = Number(document.getElementById(uin_id).value);
    // laita käyttäjän arvo vertaus arvoksi
    comparisonValue = uinVal;
    // tee numero listasta filtteröity numero lista käyttäen isUnderN funktiota
    filteredList = numerot.filter(isUnderN);
}
