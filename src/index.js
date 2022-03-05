import Logo from './img/beard-mc-s.jpg';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const content = document.getElementById("content");

const header = document.createElement("header");

const logo = new Image();
logo.src = Logo;
logo.alt = "logo";

const restaurantName = document.createElement("h1");
restaurantName.textContent = "The Beard Shop";

const nav = document.createElement("nav");

const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
nav.appendChild(homeBtn);

const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
nav.appendChild(menuBtn);

const contactBtn = document.createElement("button");
contactBtn.textContent = "Contact";
nav.appendChild(contactBtn)

header.appendChild(logo);
header.appendChild(restaurantName);
header.appendChild(nav);

content.appendChild(header);


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

content.insertBefore(home(), header.nextSibling);


homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);

function loadHome() {
    content.removeChild(content.children[1]);
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.remove('active');
    content.insertBefore(home(), header.nextSibling);
};

function loadMenu() {
    content.removeChild(content.children[1]);
    menuBtn.classList.add('active');
    homeBtn.classList.remove('active');
    contactBtn.classList.remove('active');
    content.insertBefore(menu(), header.nextSibling);
}

function loadContact() {
    content.removeChild(content.children[1]);
    contactBtn.classList.add('active');
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    content.insertBefore(contact(), header.nextSibling);
}