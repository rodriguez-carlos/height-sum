// This is where dreams go to die

// ↓ This approach is O(n) (one for loop, and an object lookup inside) but it fails to register every possible pair as it continuously overwrites players in the hash table when encountering a repeated height. The selected approach is a modification of this that accounts for that

let sumCheckWithPlayerOverwriting = () => {
    let inputValue = document.getElementById('input-value').value;
    let checkedValues = {};
    let successPairings = [];
    for (let i = 0; i < fullData.length; i++) {
        currentNumber = fullData[i].h_in;
        let requiredPairValue = inputValue - currentNumber;
        let j = checkedValues[requiredPairValue];
        if (j != null) {
            successPairings.push({
                player1: i,
                player2: j
            });
            checkedValues[currentNumber] = i;
        }
        else 
            checkedValues[currentNumber] = i;
    }
    console.log(successPairings);
    let pairList = document.querySelector('.pair-list');
    pairList.innerHTML = "";
    successPairings.map(pairing => {
        let pairListItemAbstract = document.createElement('li');
        let pairListItem = pairList.appendChild(pairListItemAbstract);
        pairListItem.innerHTML = `
        ${fullData[pairing.player1].first_name.replace('NA', '')} ${fullData[pairing.player1].last_name.replace('NA', '')} (${fullData[pairing.player1].h_in})
        and
        ${fullData[pairing.player2].first_name.replace('NA', '')} ${fullData[pairing.player2].last_name.replace('NA', '')} (${fullData[pairing.player2].h_in})`;
    });
}

// ↓ This was made to find out what the worst case scenario in process counting would be 

let naiveApproach = () => {
    fullData = fullData.map(element => {
        return { ...element, h_in: element.h_in = 70 };
    });
    let processCounter = 0;
    let inputValue = document.getElementById('input-value').value;
    let successPairings = [];
    for (let i = 0; i < fullData.length; i++) {
        for (let j = i + 1; j < fullData.length; j++) {
            processCounter++;
            if (parseInt(fullData[i].h_in) + parseInt(fullData[j].h_in) == inputValue) {
                successPairings.push({
                    player1: i,
                    player2: j
                })
            }
        }
    }
    console.log("process counter: " + processCounter);
    return successPairings;
}

// ↓ This multi-step approach adds many unnecessary processes when sorting, eliminating extremes, and creating divisions for conquering

let dataSortLoToHi = () => {
    let sortedData = fullData.sort((a, b) => {
        processCounter++;
        return a.h_in - b.h_in;
    })
    console.log("data sort processes: " + processCounter);
    return sortedData;
}

let extremesElimination = () => {
    let inputValue = document.getElementById('input-value').value;
    let sortedData = dataSortLoToHi();
    let maxAcceptableValue = inputValue - sortedData[0].h_in;
    let minAcceptableValue = inputValue - sortedData[sortedData.length - 1].h_in;
    let cleanedData = [...sortedData];
    for (let iElimination = sortedData.length - 1; sortedData[iElimination].h_in > maxAcceptableValue; iElimination--) {
        cleanedData.splice(iElimination, 1);
        processCounter++;
    }
    for (let iElimination = 0; sortedData[iElimination].h_in < minAcceptableValue; iElimination++) {
        cleanedData.splice(iElimination, 1);
        processCounter++;
    }
    console.log(cleanedData);
    return cleanedData;
}

let divideBeforeConquering = () => {
    let cleanedData = extremesElimination();
    let L = [];
    let M = [];
    let R = [];
    let inputValue = document.getElementById('input-value').value;
    let middlePoint = inputValue / 2;
    for (let iGrouping = 0; iGrouping < cleanedData.length; iGrouping++) {
        processCounter++;
        if (parseInt(cleanedData[iGrouping].h_in) < middlePoint)
            L.push(cleanedData[iGrouping].h_in)
        else if (parseInt(cleanedData[iGrouping].h_in) === middlePoint)
            M.push(cleanedData[iGrouping].h_in)
        else
            R.push(cleanedData[iGrouping].h_in);
    }
    console.log("L: " + L);
    console.log("M: " + M);
    console.log("R: " + R);
    console.log("overall process counter: " + processCounter);
}