// määritä lista ja ul elementti
var lista = [];
const ulElem = document.getElementById("list");

// määritä listan tyhjennys functio
function clearLists() {
    // tyhjennä kummatkin listat :D
    ulElem.innerHTML = ""
    lista = []
}

// määritä listan päivitys funktio
function updateList() {
    // tyhjennä ul elementin sisällä oleva html
    ulElem.innerHTML = "";
    // käy läpi jokainen "task" listasta nimeltä "lista"
    lista.forEach(task => {
        // lisää ul elementin siäiseen html:ään teksti `<li> ${tänhetkinen task} </li>`
        ulElem.innerHTML += `<li> ${task} </li>`;
    });
}
// määritä tehtävän lisäys funktio
// ton laitoin varmistukseks että se repcount määritellään ku ei kohas toiminu
var repCount = 1
function addItem() {
    // määritä input elementit...
    const inputBox = document.getElementById("taskInput");
    const inputCountBox = document.getElementById("countInput");
    // talleta inputtejen arvot
    const newTask = inputBox.value;
    repCount = Number(inputCountBox.value);
    // varmista että repcount on ainakin 1
    if (repCount < 1) {
        repCount = 1
    }
    // jos uusi tehtävä ei ole tyhjä...
    if (newTask != "") {
        // toista repCount verran :D
        for (let i = 0; i < repCount; i++) {
            // lisää newTask listaan
            lista.push(newTask);
        }
        // tyhjennä input elementti
        inputBox.value = ""
    }
    // kutsu listan päivitys funktio
    updateList();
}