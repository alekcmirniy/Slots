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

let audioCanStart = false;

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

    [".first", ".second", ".third"].forEach((cls, idx) => {
        const list = [emojiList1, emojiList2, emojiList3][idx];
        document.querySelector(cls).innerHTML = `
            <div class="in-showcase">
                ${list.map(e => `<span>${e}</span>`).join("")}
            </div>
        `;
    });
    const showcase = document.querySelector(".third")
    const startingAudio = document.getElementById("starting-audio");
    const handleAnimationStart = () => {
        if (audioCanStart) {
            startingAudio.currentTime = 0;
            startingAudio.play().catch(e => console.log(e.message));
        }
    }
    const handleAnimationEnd = () => {
        if (audioCanStart) {
            startingAudio.pause();
            startingAudio.currentTime = 0;
            document.getElementById("ending-audio").play();

        }
    }
    showcase.removeEventListener("animationstart", handleAnimationStart);
    showcase.removeEventListener("animationend", handleAnimationEnd);

    showcase.addEventListener("animationstart", handleAnimationStart);
    showcase.addEventListener("animationend", handleAnimationEnd);
}

document.querySelector(".reload-span-button").addEventListener("click", function (event) {
    event.preventDefault();

    clearEmojiesInDOM();
    document.querySelector(".slots-container").innerHTML = `
        <div class="showcase first"></div>
        <div class="showcase second"></div>
        <div class="showcase third"></div>
    `;
    emojiCode();
});

document.addEventListener("DOMContentLoaded", () => {
    const startingAudio = document.getElementById("starting-audio");
    startingAudio.volume = 0.35;


    document.addEventListener("visibilitychange", () => {
        const animations = document.getAnimations().filter(anim => (anim.effect.target.classList.contains('showcase')));
        if (document.hidden) {
            startingAudio.pause();
            animations.forEach(anim => anim.pause());
        }
        else {
            if (startingAudio.paused 
                && audioCanStart
                && animations.some((anim) => (anim.playState !== "finished"))) {
                    startingAudio.play();
                }
            animations.forEach(anim => anim.play());
        }
    })
    
    const btn = document.getElementById("confirm-playing");
    if (btn) {
        setTimeout(() => {
            btn.removeAttribute("disabled");
        }, 2000);
    }
    console.log(audioCanStart)
    btn.addEventListener("click", () => {
        startingAudio.currentTime = 0;
        audioCanStart = true;
        emojiCode();

        const welcomeScreen = document.querySelector(".welcome-screen");
        welcomeScreen.classList.add("fade-out");
        welcomeScreen.addEventListener("animationend", () => {
            welcomeScreen.style.display = "none";
        })
        console.log(audioCanStart);
    }, { once: true });
});