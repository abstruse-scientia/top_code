import "./assets/styles/base.css"
import home from "./modules/home.js"
import contact from "./modules/contact.js";
import menu from "./modules/menu.js"

home();


const main = document.querySelector("main")
const contactBtn = document.querySelector("#contact");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");


contactBtn.addEventListener("click", () => {
    main.textContent = "";
    contact();
});

homeBtn.addEventListener("click", () => {
    main.textContent = "";
    home();
});

menuBtn.addEventListener("click", () => {
    menu();
})




