class Person {
    constructor(name, age, job, driversLicense) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.driversLicense = driversLicense; 
    }
    isUnderage(){
        if (this.age < 18) {
            return true;
        } else {
            return false;
        }
    }
    isStudent(){
        if (this.job.toLowerCase() == "opiskelija" || 
            this.job.toLowerCase() == "student") {
            return true;
        } else {
            return false;
        }
    }
}

var people = [
    new Person("Merja Meikäläinen", 20, "Opiskelija", true),
    new Person("Teppo Teikäläinen", 25, "Sähköteknikko", true),
    new Person("Helena Heikäläinen", 30, "Ohjelmistosuunnittelija", false),
    new Person("Semir Sikäläinen", 18, "Opiskelija", true),
    new Person("Tomas Täkäläinen", 22, "Linja-autonkuljettaja", true)
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
        if (person.isUnderage()) {
            ageTd.innerHTML = person.age;
        } else {
            ageTd.innerHTML = `${person.age}🍺`;
        }
        if (person.isStudent()) {
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
        const personObj = new Person(name, age, job, license)
        people.push(personObj)

        form.reset()
        createRows()
    }
}

// pyöritä createRows funktio käynnistyksessä
document.addEventListener("DOMContentLoaded", createRows());

