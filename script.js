let bot = new RiveScript();
let xpPoints = 0;

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const xpCounter = document.querySelector('#xpPoints');
const xpKey = 1;  // XP per keypress
const xpMsg = 5;  // XP per message

const xpTitles = {
    0: "🌱 Newcomer",
    100: "🌿 Wanderer",
    200: "🌲 Explorer",
    300: "🗻 Adventurer",
    400: "🌄 Navigator",
    500: "🌟 Legend"
};

const brains = [
    // "./brains/dictionary.rive",
    "./brains/help.rive",
    "./brains/search.rive",
    "./brains/about.rive",
    "./brains/linktree.rive",  // Because 'links' is a reserved word in RiveScript
    "./brains/more.rive",
    // "./brains/fun.rive", --> Disabled for now.
    // "./brains/convo.rive",
];

const greeting = `<span class="title">anqilique.github.io</span>

<br><br>

<span style="font-style: italic; color: var(--silver)">Welcome to Anqilique's personal website. Take a look around?</span>

<br><br>
Try typing in one of the following:<br>
<span style="color: var(--red);">about / links / more / clear / help </span>
`

const loading_brains_msg = `<span class="sub">Attempting to load page content...</span>`

const brains_loaded_msg = `<span class="sub">Page loaded successfully! <br><br>---</span>`

const brains_fail_msg = `<span class="sub">Failed to load. Check back later!<br><br>---</span>`


// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input_box.value.trim() !== '') {
        selfReply(input_box.value);
        incrementXP(xpMsg);

        input_box.value = '';
    }
});

// Increment XP on keypress (excluding Enter)
window.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') {
        incrementXP(xpKey);
    }
});

// Disable audio by default
if (typeof (Storage) !== "undefined") {
    localStorage.audio_enabled = false;
} else {
    // No web storage support.
}

// Load saved XP/title from localStorage
function loadXPFromStorage() {
    if (typeof (Storage) === "undefined") return;

    const storedPoints = parseInt(localStorage.getItem('xpPoints'));
    const storedTitle = localStorage.getItem('xpTitle');

    if (!isNaN(storedPoints)) {
        xpPoints = storedPoints;
        if (xpCounter) xpCounter.textContent = xpPoints;
    }

    const titleElement = document.querySelector('.xp-title');
    if (titleElement) {
        // Prefer stored title, otherwise derive from xp
        const titleToShow = storedTitle || getTitleByXP(xpPoints);
        titleElement.textContent = titleToShow;
    }
}

function saveXPToStorage(title) {
    if (typeof (Storage) === "undefined") return;
    try {
        localStorage.setItem('xpPoints', String(xpPoints));
        if (typeof title === 'string') localStorage.setItem('xpTitle', title);
    } catch (e) {
        console.warn('Unable to save XP to storage:', e);
    }
}

// Immediately restore previously saved values (if any)
loadXPFromStorage();

// Load the bot
botReply(loading_brains_msg);
window.addEventListener('resize', checkResize);


/* Bot Functions */

function checkResize() {
    if (window.innerWidth < 1000) {
        window.location.replace("./links.html");
    }
}

function botReply(message) {
    message_container.innerHTML += `<div class="bot">${message}</div>`;
    location.href = '#latest';

    input_box.focus();
}

function selfReply(message) {
    message_container.innerHTML += `<div class="self">> ${message}</div>`;
    location.href = '#latest';

    bot.reply("local-user", message).then(function (reply) {
        botReply(reply);
    });
}

function botLoaded() {
    if (window.innerWidth < 1000) {
        window.location.replace("./links.html");
    } else {
        bot.loadFile(brains).then(botReady).catch(botNotReady);
    }
}

function botReady() {
    bot.sortReplies();
    botReply(brains_loaded_msg);
    botReply(greeting);

    input_box.focus();
}

function botNotReady(err) {
    console.log("Failed to load brains:", err);
    botReply(brains_fail_msg);
}


/* XP Functions */

function incrementXP(amount) {
    xpPoints += amount;
    if (xpCounter) xpCounter.textContent = xpPoints;

    const newTitle = getTitleByXP(xpPoints);
    updateTitle(newTitle);
    // Persist updated points (title saved inside updateTitle when it changes)
    saveXPToStorage();
}

function getTitleByXP(xp) {
    let currentTitle = "";
    for (let milestone in xpTitles) {
        if (xp >= milestone) {
            currentTitle = xpTitles[milestone];
        }
    }
    return currentTitle;
}

function updateTitle(title) {
    const titleElement = document.querySelector('.xp-title');
    if (!titleElement) return;

    if (titleElement.textContent !== title) {
        titleElement.textContent = title;
        botReply(lvlUpMessage(title));
        saveXPToStorage(title);
    }
}

function lvlUpMessage(title) {
    let title_text = `<span style="color: var(--red)">You've achieved the title:</span> <span style="color: var(--yellow)">${title}</span>`;
    let xp_text = `<span style="color: var(--red)">You now have</span> <span style="color: var(--yellow)">${xpPoints} XP</span>`;
    let flavour = `<span class="sub" style="color: var(--silver)">Keep exploring to unlock more titles!</span><br><br>`;

    return `<span class="heading"><br>Level Up! ✨<br></span><br>${title_text}<br>${xp_text}<br><br>${flavour}`;
}