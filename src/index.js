const emojies = [
        "1F34E", "1F34C", "1F353", "1F349", "1F34A", "1F352", "1F34B", "1F34D", "1F348", "1F965", "1F95D", "1F96D", "1F347", "1FAD0", "1F345"
    ];

function pushEmoji(emojiList) {
    const chosenEmoji = emojies[Math.floor(emojies.length * Math.random())];
    emojiList.push(`&#x${chosenEmoji}`);
}

function clearEmojiesInDOM() {
    document.querySelectorAll(".in-showcase").forEach(el => el.remove());
}
function emojiCode() {
    clearEmojiesInDOM();

    let emojiList1 = [];
    let emojiList2 = [];
    let emojiList3 = [];

    do {
        pushEmoji(emojiList1);
        pushEmoji(emojiList2);
        pushEmoji(emojiList3);
    } while (emojiList1.length < 100);

    document.querySelector(".first").innerHTML = `
        <div class="in-showcase">
            ${emojiList1.map(e => `<span>${e}</span>`).join("")}
        </div>
    `;
    document.querySelector(".second").innerHTML = `
        <div class="in-showcase">
            ${emojiList2.map(e => `<span>${e}</span>`).join("")}
        </div>
    `;
    document.querySelector(".third").innerHTML = `
        <div class="in-showcase">
            ${emojiList3.map(e => `<span>${e}</span>`).join("")}
        </div>
    `;
}

const reloadButton = document.querySelector(".reload-span-button");
reloadButton.addEventListener("click", function (event) {
    event.preventDefault();

    clearEmojiesInDOM();
    document.querySelector(".container").innerHTML = `
        <div class="showcase first"></div>
        <div class="showcase second"></div>
        <div class="showcase third"></div>
    `;
    emojiCode();
});

document.addEventListener("DOMContentLoaded", emojiCode);

https://ru.pikbest.com/sound-effects/sound-effects-of-bonus-coins-in-slot-machines_1157389.html