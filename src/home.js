import HomeImg from './img/intro-man-cropped-s.jpg';
import BeforeAfterImg from './img/beard-before-and-after.jpg';

function home() {
    const main = document.createElement('main');

    const welcome = document.createElement('h2');
    welcome.textContent = "Welcome!";
    main.appendChild(welcome);

    const p1 = document.createElement('p');
    p1.innerHTML = 
        "At <em>The Beard Shop</em> we aim to offer our customers \
        the best service when it comes to beards.";
    main.appendChild(p1);

    const homeImg = new Image();
    homeImg.src = HomeImg;
    main.appendChild(homeImg);

    const p2 = document.createElement('p');
    p2.textContent =
        "The bearded family has more than 60 years of experience \
        serving and taking care of beards, offering a warm, friendly \
        atmosphere to get a beard with family and friends at any time \
        of the day or evening. All of our beards are made with hand-made \
        lotions and fresh products from the best local growers.";
    main.appendChild(p2);

    const beforeAfterImg = new Image();
    beforeAfterImg.src = BeforeAfterImg;
    main.appendChild(beforeAfterImg);

    const p3 = document.createElement('p');
    p3.textContent =
        "Our customers will be served with nothing but the best and \
        have their satisfaction guaranteed, or get their beard back.";
    main.appendChild(p3);

    return main;
}

export default home;
