let fullData = [];
fetch('https://mach-eight.uc.r.appspot.com/')
    .then(response => response.json()
    .then(data => fullData = data.values));

var sumCheckWithArrayOfIndices = (logicInput) => {
    const inputValue = logicInput || document.getElementById('input-value').value;;
    let heightsMap = {};
    let successPairings = [];
    if (isNaN(inputValue) || inputValue <= 0) return -1;
    for (let i = 0; i < fullData.length; i++) {
        currentNumber = fullData[i].h_in;
        let requiredPairValue = inputValue - currentNumber;
        let j = heightsMap[requiredPairValue];
        if (j != null) {
            j.map(innerIndex => {
                successPairings.push({
                    player1: i,
                    player2: innerIndex
                })
            }) 
        }
        if (heightsMap[currentNumber] != null) 
            heightsMap[currentNumber].push(i);
        else 
            heightsMap[currentNumber] = [ i ];
    }
    return successPairings;
}