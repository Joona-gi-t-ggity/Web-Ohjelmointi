var people = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "linja-autonkuljettaja",
        driversLicense: true
    }
]
// hakee rivit elementin
var rows = document.getElementById("rows");
// määrittää rivien luomis funktion
function createRows() {
    // tyhjennä rows elementin sisäistetty html
    rows.innerHTML = "";
    // jokaiselle ihmiselle listassa ihmiset
    people.forEach(person => {
        // ite oisin tehy tolleen :c kun mun silmiin selvempi
        //var row = `
        //    <tr>
        //        <td> ${person.name} </td>
        //        <td> ${person.age} </td>
        //        <td> ${person.job} </td>
        //        <td> ${person.driversLicense} </td>
        //    </tr>
        //`;
        // luo tyhjä tr elementti muuttujaan row
        var row = document.createElement("tr");
        // luo tyhjät td elementit muutujiin
        var nameTd = document.createElement("td");
        var ageTd = document.createElement("td");
        var jobTd = document.createElement("td");
        var licenseTd = document.createElement("td");
        // säädä td elementtien sisäinen html
        nameTd.innerHTML = person.name;
        ageTd.innerHTML = person.age;
        jobTd.innerHTML = person.job;
        licenseTd.innerHTML = person.driversLicense;
        // lisää kaikki td elementit tr elementin sisään
        row.append(nameTd, ageTd, jobTd, licenseTd);
        
        console.log(row);
        // lisää tämä row rowssiin :D
        rows.append(row);
    });
}
// pyöritä createRows funktio käynnistyksessä
document.addEventListener("DOMContentLoaded", createRows());