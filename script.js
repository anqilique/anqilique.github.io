let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
    "./brains/dictionary.rive",
    "./brains/help.rive",
    "./brains/search.rive",
    "./brains/about.rive",
    "./brains/linktree.rive",  // Because 'links' is a reserved word in RiveScript
    "./brains/status.rive",
    // "./brains/fun.rive", --> Disabled for now.
    "./brains/convo.rive",
];

const greeting = `<span class="title">anqilique.github.io</span>

<br><br>

<span style="font-style: italic; color: var(--silver)">Welcome to anqilique's personal website. Take a look around?</span>

<br><br>
Try typing in one of the following:<br>
<span style="color: var(--red);">help / about / links / status / clear</span>
`

const loading_brains_msg = `<span class="sub">Attempting to load page content...</span>`

const brains_loaded_msg = `<span class="sub">Page loaded successfully! <br><br>---</span>`

const brains_fail_msg = `<span class="sub">Failed to load. Check back later!<br><br>---</span>`

form.addEventListener('submit', (event) => {
    event.preventDefault();
    selfReply(input_box.value);
    input_box.value = '';
});


botReply(loading_brains_msg);
window.addEventListener('resize', checkResize);

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
    message_container.innerHTML += `<div class="self">${message}</div>`;
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
    console.log(no_brains_msg, err);
    botReply(brains_fail_msg);
}