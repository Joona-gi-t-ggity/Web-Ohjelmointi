function summa(a, b) {
    alert(`${a} + ${b} = ${a + b}`)
}
function vahennys(a, b) {
    alert(`${a} - ${b} = ${a - b}`)
}
function kerto(a, b) {
    alert(`${a} * ${b} = ${a * b}`)
}
function jako(a, b) {
    alert(`${a} / ${b} = ${a / b}`)
}

function laskin_summa() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    summa(num1, num2)
}
function laskin_vahennys() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    vahennys(num1, num2)
}
function laskin_kerto() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    kerto(num1, num2)
}
function laskin_jako() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);

    jako(num1, num2)
}

const weekdayArray = ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"]
const monthArray = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"]

function datetimeLoad() {
    let dateObj = new Date();

    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();

    const datetime = `${date}, klo: ${time}`;

    const weekday = dateObj.getDay();
    //weekdayArray[weekday]
    const month = dateObj.getMonth();

    var dateDiv = document.getElementById("date");
    var timeDiv = document.getElementById("time");
    var datetimeDiv = document.getElementById("datetime");
    var weekdayDiv = document.getElementById("weekday");
    var monthDiv = document.getElementById("month");

    dateDiv.innerHTML = `Päivämäärä = ${date}`;
    timeDiv.innerHTML = `Aika = ${time}`;
    datetimeDiv.innerHTML = `Päivä ja aika = ${datetime}`;
    weekdayDiv.innerHTML = `Vikkonpäivä = ${weekdayArray[weekday]}`;
    monthDiv.innerHTML = `Kuukausi = ${monthArray[month]}`;
}

var Veijo = new Set(["luku", "poisto"]);
var Elvira = new Set(["luku", "kirjoitus", "muokkaus"]);
var Mehdi = new Set(["luku", "muokkaus", "poisto"]);
var Tuuli = new Set(["kirjoitus", "poisto"]);

var array_OfArrays_OfSets = [
            [Veijo, "veijo"],
            [Elvira, "elvira"],
            [Mehdi, "mehdi"],
            [Tuuli, "tuuli"]
        ];

for (set of array_OfArrays_OfSets) {
    var fSect =  document.getElementById(set[1]);
    var fUl = fSect.getElementsByTagName("ul")[0];
    for (right of set[0]) {
        var listPart = document.createElement("li");
        listPart.innerHTML = right;
        fUl.append(listPart);
    }
}
var veituul = new Set([]);
for (right of Veijo){
    veituul.add(right);
}
for (right of Tuuli) {
    veituul.add(right);
}
console.log(veituul);

var mehdielvira = new Set([]);
for (right of Mehdi) {
    if (Elvira.has(right)) {
        mehdielvira.add(right);
    }
}
console.log(mehdielvira);

var elviratuuli = new Set([]);
for (right of Elvira) {
    if (!Tuuli.has(right)) {
        elviratuuli.add(right);
    }
}
for (right of Tuuli) {
    if (!Elvira.has(right)) {
        elviratuuli.add(right);
    }
}
console.log(elviratuuli);

for (right of veituul) {
    var listPart = document.createElement("li");
    listPart.innerHTML = right;
    document.getElementById("veijotuuli").append(listPart);
}
for (right of mehdielvira) {
    var listPart = document.createElement("li");
    listPart.innerHTML = right;
    document.getElementById("mehdielvira").append(listPart);
}
for (right of elviratuuli) {
    var listPart = document.createElement("li");
    listPart.innerHTML = right;
    document.getElementById("elviratuuli").append(listPart);
}