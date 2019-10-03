document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM LOADED.");
    const cards = document.querySelectorAll(".card");

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