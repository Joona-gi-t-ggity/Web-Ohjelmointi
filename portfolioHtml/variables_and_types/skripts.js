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