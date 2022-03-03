
function menu() {
    const options = [
        "Full beard",
        "Corporate",
        "Chin Strap",
        "Goatee",
        "Anchor",
        "Mustache",
        "Sideburns",
    ]

    const main = document.createElement('main');

    for (let option in options) {
        const optionCard = document.createElement('div');
        optionCard.classList.add('option');
        optionCard.textContent = options[option];
        main.appendChild(optionCard);
    }

    return main;

};

export default menu;
