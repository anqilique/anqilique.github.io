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

const kaomojis = [
    "(＾▽＾)",
    "(^_^)/",
    "(^_^)",
    "(*≧▽≦)",
    "(^o^)/",
    "（＾ｖ＾）",
    "(・o・)",
    "(O_O)",
    "(°o°)",
    "(@_@)",
    "(・_・ヾ)",
    "(*´ω｀*)",
    "(❤ω❤)",
    "( ˘ ³˘)♥",
    "(づ￣ ³￣)づ",
    "ʕ•ᴥ•ʔ",
    "(^・ω・^ )",
    "(=^･ω･^=)",
    "（￣～￣;）"
];

function replaceText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    document.getElementById("random-text").textContent = textOptions[randomIndex];
}

function changeKao() {
	const randomNumber = Math.floor(Math.random() * kaomojis.length);
	const randomKaomoji = kaomojis[randomNumber];
	document.getElementById("kaomoji").innerText = randomKaomoji;
}

document.addEventListener("DOMContentLoaded", replaceText);
document.addEventListener("DOMContentLoaded", changeKao);