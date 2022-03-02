import Logo from './img/beard-mc-s.jpg';
import home from './home.js';

const content = document.getElementById("content");

// Header
const header = document.createElement("header");

const logo = new Image();
logo.src = Logo;
logo.alt = "logo";

const restaurantName = document.createElement("h1");
restaurantName.textContent = "The Beard Shop";

const nav = document.createElement("nav");

const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
// TODO addEventListener => loadHome();
nav.appendChild(homeBtn);

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
// TODO addEventListener => loadMenu();
nav.appendChild(menuBtn);

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";
// TODO addEventListener => loadContact();
nav.appendChild(contactBtn)

header.appendChild(logo);
header.appendChild(restaurantName);
header.appendChild(nav);

content.appendChild(header);

// Main
content.appendChild(home);

// Footer
const footer = document.createElement("footer");

const p = document.createElement("p");
p.innerHTML = 
    "Made with ♥ by \
    <a href=\"https://github.com/i-Portillo\">i-Portillo</a> \
    for \
    <a href=\"https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page\"> \
        TOP \
    </a>";
footer.appendChild(p);

content.appendChild(footer);