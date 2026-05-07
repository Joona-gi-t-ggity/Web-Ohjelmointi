function getNthChar(uinTextId, uinNumId, outputId) {
    const uinTextElem = document.getElementById(uinTextId);
    const uinNumElem = document.getElementById(uinNumId);

    const outputElem = document.getElementById(outputId);

    if (uinTextElem == null || uinNumElem == null) {
        alert("Napille annetut idt on varmaan väärät mene gittiin ja laita korjaus sinne :D");
        return false;
    } else if (uinTextElem.value == "" || uinNumElem.value == "") {
        alert("Muistathan täyttää syöttö laatikot XP");
        return false;
    } else if ((uinTextElem.value).length < Number(uinNumElem.value) || Number(uinNumElem.value) <= 0) {
        alert("Antamasi numeron ei saisi olla pidempi kuin tekstin pituus tai pienempi kuin 1... voisisitko korjata sen ><");
        return false;
    } else {
        const charAtIndex = (uinTextElem.value)[Number(uinNumElem.value) - 1];
        if (outputElem != null) {
            outputElem.innerText = `Paikassa ${uinNumElem.value} tekstiäsi on kirjain "${charAtIndex}"`;
        } else {
            alert(`Paikassa ${uinNumElem.value} tekstiäsi on kirjain "${charAtIndex}"`);
        }
        return true;
    }
}

function findIndexOfChar(uinTextId, uinCharId, outputId) {
    const uinTextElem = document.getElementById(uinTextId);
    const uinCharElem = document.getElementById(uinCharId);

    const outputElem = document.getElementById(outputId);

    if (uinTextElem == null || uinCharElem == null) {
        alert("Napille annetut idt on varmaan väärät mene gittiin ja laita korjaus sinne :D");
        return false;
    } else if (uinTextElem.value == "" || uinCharElem.value == "") {
        alert("Muistathan täyttää syöttö laatikot XP");
        return false;
    } else {
        var indexOfChar = (uinTextElem.value).indexOf(uinCharElem.value);
        if (indexOfChar == "-1") {
            indexOfChar = "Ei missään";
        }
        if (outputElem != null) {
            outputElem.innerText = `Kirjain ${uinCharElem.value} tekstissäsi on paikalla "${indexOfChar}"`;
        } else {
            alert(`Kirjain ${uinCharElem.value} tekstissäsi on paikalla "${indexOfChar}"`);
        }
        return true;
    }
}

function cutStr(uinTextId, uinFNumId, uinSNumId, outputId) {
    const uinTextElem = document.getElementById(uinTextId);
    const uinFNumElem = document.getElementById(uinFNumId);
    const uinSNumElem = document.getElementById(uinSNumId);

    const outputElem = document.getElementById(outputId);

    if (uinTextElem == null || uinFNumElem == null || uinSNumElem == null) {
        alert("Napille annetut idt on varmaan väärät mene gittiin ja laita korjaus sinne :D");
        return false;
    } else if (uinTextElem.value == "" || uinFNumElem.value == "" || uinSNumElem.value == null) {
        alert("Muistathan täyttää syöttö laatikot XP");
        return false;
    } else {
        const text = uinTextElem.value;
        const cutStart = Number(uinFNumElem.value);
        const cutEnd = Number(uinSNumElem.value);
        
        const txtAfterSlice = text.slice(cutStart, cutEnd);

        if (outputElem != null) {
            outputElem.innerText = `Tekstisi leikkauksen jälkeen on "${txtAfterSlice}"`;
        } else {
            alert(`Tekstisi leikkauksen jälkeen on "${txtAfterSlice}"`);
        }
        return true;
    }
}
function repParts(uinTextId, uinWhatId, uinWithId, outputId) {
    const uinTextElem = document.getElementById(uinTextId);
    const uinWhatElem = document.getElementById(uinWhatId);
    const uinWithElem = document.getElementById(uinWithId);

    const outputElem = document.getElementById(outputId);

    if (uinTextElem == null || uinWhatElem == null || uinWithElem == null) {
        alert("Napille annetut idt on varmaan väärät mene gittiin ja laita korjaus sinne :D");
        return false;
    } else if (uinTextElem.value == "" || uinWhatElem.value == "") {
        alert("Muistathan täyttää syöttö laatikot XP paitsi vikan jos haluaa poistaa jotain :p");
        return false;
    } else {
        const text = uinTextElem.value;
        const repWhat = uinWhatElem.value;
        const repWith = uinWithElem.value;
        
        const txtAfterReplace = text.replaceAll(repWhat, repWith);

        if (outputElem != null) {
            outputElem.innerText = `Tekstisi korvauksien jälkeen on "${txtAfterReplace}"`;
        } else {
            alert(`Tekstisi korvauksien jälkeen on "${txtAfterReplace}"`);
        }
        return true;
    }
}

function stackParts(uinTextId, uinOnId, outputId) {
    const uinTextElem = document.getElementById(uinTextId);
    const uinOnElem = document.getElementById(uinOnId);

    const outputElem = document.getElementById(outputId);

    if (uinTextElem == null || uinOnElem == null) {
        alert("Napille annetut idt on varmaan väärät mene gittiin ja laita korjaus sinne :D");
        return false;
    } else if (uinTextElem.value == "" || uinOnElem.value == "") {
        alert("Muistathan täyttää syöttö laatikot XP paitsi vikan jos haluaa poistaa jotain :p");
        return false;
    } else {
        const text = uinTextElem.value;
        const onWhat = uinOnElem.value;
        
        const txtAfterSplit = text.split(onWhat);

        if (outputElem != null) {
            outputElem.innerHTML = "";
            txtAfterSplit.forEach(part => {
                var listPartElem = document.createElement("li")
                listPartElem.innerText = part
                outputElem.append(listPartElem)
            });
            
        } else {
            alert(txtAfterSplit);
        }
        return true;
    }
}