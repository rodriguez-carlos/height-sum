let fullData = [];

fetch('https://mach-eight.uc.r.appspot.com/')
    .then(response => response.json()
    .then(data => fullData = data.values));

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
let sumCheckWithArrayOfIndices = () => {
    let inputValue = document.getElementById('input-value').value;
    let checkedValues = {};
    let successPairings = [];
    const start = performance.now();
    for (let i = 0; i < fullData.length; i++) {
        currentNumber = fullData[i].h_in;
        let requiredPairValue = inputValue - currentNumber;
        let j = checkedValues[requiredPairValue];
        if (j != null) {
            j.map(innerIndex => {
                successPairings.push({
                    player1: i,
                    player2: innerIndex
                })
            }) 
        }
        if (checkedValues[currentNumber] != null) 
            checkedValues[currentNumber].push(i);
        else 
            checkedValues[currentNumber] = [ i ];
    }
    console.log(`checkedValues: ${checkedValues}`);
    console.log(`successPairings: ${successPairings}`);
    const duration = performance.now() - start;
    console.log(`Process took ${duration} milisecond(s)`);
    return successPairings;
}

let printResults = () => {
    let pairList = document.querySelector('.pair-list');
    pairList.innerHTML = "";
    let successPairings = sumCheckWithArrayOfIndices();
    console.log(successPairings);
    if (successPairings.length === 0) {
        console.log("inside the printResults if");
        let noMatchMessageAbstract = document.createElement('li');
        let noMatchMessage = pairList.appendChild(noMatchMessageAbstract);
        noMatchMessage.style.listStyle = "none";
        noMatchMessage.innerHTML = "No matches found";
    } else {
        console.log("inside the printResults else");
        successPairings.map(pairing => {
            let pairListItemAbstract = document.createElement('li');
            let pairListItem = pairList.appendChild(pairListItemAbstract);
            pairListItem.innerHTML = `
            ${fullData[pairing.player1].first_name.replace('NA', '')} ${fullData[pairing.player1].last_name.replace('NA', '')} (${fullData[pairing.player1].h_in})
            and
            ${fullData[pairing.player2].first_name.replace('NA', '')} ${fullData[pairing.player2].last_name.replace('NA', '')} (${fullData[pairing.player2].h_in})`;
        });
    }
}