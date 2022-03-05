import optionImgSrc from './img/placeholder-option.png';

function createOptionCard(beard) {
    const optionCard = document.createElement('div');
    optionCard.classList.add('option-card');
    const optionImg = new Image();
    optionImg.src = optionImgSrc;
    optionCard.appendChild(optionImg);
    const optionText = document.createElement('p');
    optionText.textContent = beard;
    optionCard.appendChild(optionText);

    return optionCard;
};

function menu() {
    const options = [
        "Full beard",
        "Corporate",
        "Chin Strap",
        "Goatee",
        "Anchor",
        "Mustache",
        "Sideburns",
        "Wizard",
    ];

    const main = document.createElement('main');
    main.classList.add('menu');

    options.forEach(beard => {
        main.appendChild(createOptionCard(beard));
    });

    return main;

};

export default menu;
