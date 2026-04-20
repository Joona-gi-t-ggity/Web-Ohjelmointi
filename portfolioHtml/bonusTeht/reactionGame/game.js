function randint(min, max) {
    var random = min + Math.floor(Math.random() * (max - min + 1));
    return random;
}
function randChoice(list) {
    var random = list[randint(0, list.length-1)];
    return random;
}

// Copioin netistä. Tarkotus on käyttää siihen että odottelee kunnes focus nappia on painettu :D.
// Function that returns a Promise resolved when the button is clicked
function waitForButtonClick(buttonId) {
    return new Promise((resolve) => {
        const button = document.getElementById(buttonId);
        // Event listener for click
        const handler = () => {
            button.removeEventListener('click', handler); // Clean up listener
            resolve(); // Resolve the promise
        };

        button.addEventListener('click', handler);
    });
}
// Copioin netistä. Tätä käytetään pausejen tekemisessä.
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function testRand() {
    console.log(randint(5,10));
    console.log(randChoice(["moi","hei","hej","woof"]));
}
var timeSum = 0;
async function round() {
    const focus_id = randChoice(["gB_1", "gB_2", "gB_3", "gB_4"]);
    const focus_button = document.getElementById(focus_id);

    focus_button.style.backgroundColor = "#ffaaaa";
    const start_time = Date.now();

    await waitForButtonClick(focus_id);

    const end_time = Date.now();
    focus_button.style.backgroundColor = "";
    const time_taken = end_time - start_time;

    console.log(`time taken: ${time_taken} ms`);

    timeSum += time_taken;
}

var bestTime = null;

const roundCount = 4;
async function runGame() {
    let counter = 0;
    const countDown = document.getElementById("countDown");
    countDown.innerText = 3;
    while (counter < 3) {
        await delay(1000);
        countDown.innerText = 3-(counter+1);
        counter++;
    }

    countDown.textContent = "Go";

    let i = 0;
    while (i < roundCount) {
        await delay(randint(500,2000));
        await round();
        i++;
    }
    const timeAve = timeSum / roundCount;
    timeSum /= 1000;
    
    if ((bestTime == null) || (timeSum < bestTime)) {
        bestTime = timeSum;
        
        const scoreboardBest = document.getElementById("scoreboardBest");
        scoreboardBest.innerText = `Best: ${bestTime.toFixed(2)} s`;
    }

    const scoreboardSum = document.getElementById("scoreboardSum");
    const scoreboardAve = document.getElementById("scoreboardAve");

    scoreboardSum.textContent = `Time sum: ${timeSum.toFixed(2)} s`;
    scoreboardAve.textContent = `Average: ${timeAve.toFixed(2)} ms`;

    countDown.innerText = "Waiting...";
    
    
}
