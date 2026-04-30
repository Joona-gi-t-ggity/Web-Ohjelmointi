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
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
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
        // luo tyhjä tr elementti muuttujaan row
        var row = document.createElement("tr");
        // luo tyhjät td elementit muutujiin
        var nameTd = document.createElement("td");
        var ageTd = document.createElement("td");
        var jobTd = document.createElement("td");
        var licenseTd = document.createElement("td");
        // säädä td elementtien sisäinen html
        nameTd.innerHTML = person.name;
        if (Number(person.age) >= 18) {
            ageTd.innerHTML = `${person.age}🍺`;
        } else {
            ageTd.innerHTML = person.age;
        }
        if (person.job.toLowerCase() == "opiskelija") {
            jobTd.innerHTML = `${person.job}🎓`;
        } else {
            jobTd.innerHTML = person.job;
        }
        licenseTd.innerHTML = person.driversLicense;
        // lisää kaikki td elementit tr elementin sisään
        row.append(nameTd, ageTd, jobTd, licenseTd);
        
        console.log(row);
        // lisää tämä row rowssiin :D
        rows.append(row);
    });
}

function processForm(e) {
    e.preventDefault();
    const form = e.target.form;

    const name = form.nameInp.value;
    const age = Number(form.ageInp.value);
    const job = form.jobInp.value;
    const license = form.licenseInp.checked;
    if (name == "" || job == "") {
        alert("Jokin unohtui kertoa :D");
    } else if (age < 0) {
        alert("Iän pitää olla positiivinen luku");
    } else {
        const personObj = {
            name: name,
            age: age,
            job: job,
            driversLicense: license
        }
        people.push(personObj)

        form.reset()
        createRows()
    }
}

// pyöritä createRows funktio käynnistyksessä
document.addEventListener("DOMContentLoaded", createRows());