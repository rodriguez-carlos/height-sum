let printResults = (e) => {
    e.preventDefault();
    let pairList = document.querySelector('.pair-list');
    pairList.innerHTML = "";
    let successPairings = sumCheckWithArrayOfIndices(false);
    if (successPairings === -1) {
        let noMatchMessageAbstract = document.createElement('li');
        let noMatchMessage = pairList.appendChild(noMatchMessageAbstract);
        noMatchMessage.style.listStyle = "none";
        noMatchMessage.innerHTML = "Invalid input! Remember to add a positive integer.";
        return null;
    }
    if (successPairings.length === 0) {
        let noMatchMessageAbstract = document.createElement('li');
        let noMatchMessage = pairList.appendChild(noMatchMessageAbstract);
        noMatchMessage.style.listStyle = "none";
        noMatchMessage.innerHTML = "No matches found";
    } else {
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
const inputForm = document.getElementById('input-form');
inputForm.addEventListener('submit', printResults);
inputForm.addEventListener('submit', inputForm.reset);
