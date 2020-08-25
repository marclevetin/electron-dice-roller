document.getElementById('number-dice').addEventListener('input', (event) => {
    const value = event.target.value;


    document.querySelectorAll('.num').forEach(element => {
        element.textContent = value;
    });
});

document.querySelectorAll('#buttons button').forEach(node => {
    node.addEventListener('click', (event) => {
        const numberRolls = parseInt(document.getElementById('number-dice').value);
        const diceValue = parseInt(event.currentTarget.dataset.dice);
        const rolledDiceArray = [];

        for (let i = 0; i < numberRolls; i++) {
            const thisRoll = roll(diceValue);
            rolledDiceArray.push(thisRoll);
        }

        document.getElementById('roll').textContent = `${numberRolls}d${diceValue}`;
        document.getElementById('results').textContent = rolledDiceArray.join(', ');
    })
});

function roll(number) {
    return Math.floor(Math.random() * number) + 1;
}