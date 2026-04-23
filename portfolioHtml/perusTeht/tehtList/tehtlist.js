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
function addItem() {
    // määritä input elementti...
    // määritä newTask muutuja ottamalla input elementin tän hetkinen arvo
    const inputBox = document.getElementById("taskInput");
    const newTask = inputBox.value;
    // jos uusi tehtävä ei ole tyhjä...
    if (newTask != "") {
        // lisää newTask listaan
        for (let i = 0; i < repCount; i)
        lista.push(newTask);
        // tyhjennä input elementti
        inputBox.value = ""
    }
    // kutsu listan päivitys funktio
    updateList();
}