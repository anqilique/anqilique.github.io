const textOptions = [
    "Made by a student in need of more sleep. 💤", 
    "Looking for something? 👁👄👁",
    "This website is a work in progress. 👷‍♀️",
    "Pick your poison. 👀",
    "Probably running on caffeine. ☕",
    "Proof I can organise something. ✅",
    "Click something, I dare you.",
    "Click responsibly.",
    "A collection of links you didn't ask for.",
    "Made this instead of doing something productive.",
    "Shh... The broken stuff is a ✨feature✨."
];

function replaceText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    document.getElementById("random-text").textContent = textOptions[randomIndex];
}

document.addEventListener("DOMContentLoaded", replaceText);