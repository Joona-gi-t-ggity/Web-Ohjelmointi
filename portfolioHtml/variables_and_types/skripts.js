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