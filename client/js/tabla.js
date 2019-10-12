import { get as getSVGSprite } from "./cards-svg-sprite.js";

document.addEventListener("DOMContentLoaded", event => {

    const cardsSprite = getSVGSprite();
    const cards = document.querySelectorAll(".card");

    if (cardsSprite) {
        document.getElementById("cards-sprite").insertAdjacentHTML("afterbegin", cardsSprite);
    }

    function handleCardClickOrTab(event) {
        const card = (event.target.nodeName.toLowerCase() === "div") ? event.target : event.target.closest("div");
        const id = card.getAttribute("id") || "???";
        console.log(`You just clicked the card ${id}`);
    }

    cards.forEach(card => {
        card.addEventListener("mouseup", handleCardClickOrTab, true);
        card.addEventListener("touchend", handleCardClickOrTab, true);
    });
});