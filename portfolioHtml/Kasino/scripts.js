// mun luomat random funktiot ei ole täydellisä :D 
// joten saattaa olla epä tasaiset tulokset
function randInt(min, max) {
    var random = min + Math.floor(Math.random() * (max - min + 1));
    return random;
}
function randFloat(min,max) {
    var random = min + (Math.random() * (max - min));
    return random;
}
function randChoice(list) {
    var random = list[randInt(0, list.length-1)];
    return random;
}

function diceroll(outputElem_Id) {
    const outputElem = document.getElementById(outputElem_Id);

    const result = randInt(1,6)
    if (outputElem == null) {
        alert(result);
    } else {
        outputElem.innerText = result;
    }
}

function addLottoSheet(outputElem_Id) {
    const outputElem = document.getElementById(outputElem_Id);
    
    for (let i = 0; i < 7; i++) {
        var inputElem = document.createElement("input");
        inputElem.id = `lottoInput_${i}`;
        inputElem.type = "number";

        inputElem.min = "1";
        inputElem.max = "40";

        inputElem.value = "1";

        inputElem.className = "lottoUinStl";
        outputElem.append(inputElem);
    }
}

function lottoroll(outputElem_Id) {
    const outputElem = document.getElementById(outputElem_Id);

    var resultList = [];
    var result = "";
    for (let i = 0; i < 7; i++) {
        var roll = randInt(1,40);
        if (i == 0) {
            result += `${roll}`;
        } else {
            result += `, ${roll}`;
        }
        resultList.push(roll)
    }
    
    if (outputElem == null) {
        alert(result);
    } else {
        outputElem.innerText = result;
    }
    return resultList;
}

function lottorollWguess(outputElem_Id, correctCountElem_Id){
    const lottoresults = lottoroll(outputElem_Id);
    
    var correctCount = 0;
    for (let i = 0; i < 7; i++) {
        var guessUinId = `lottoInput_${i}`; 
        var inputElem = document.getElementById(guessUinId)
        if (lottoresults[i] == Number(inputElem.value)) {
            correctCount++;
        }
    }
    const corCntOutElem = document.getElementById(correctCountElem_Id);
    corCntOutElem.innerText = correctCount;
}

window.onload = function () {
    addLottoSheet("lottoInputsDiv");
};