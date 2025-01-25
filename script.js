let bot = new RiveScript();

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
    "./brains/dictionary.rive",
    "./brains/help.rive",
    "./brains/search.rive",
    "./brains/about.rive",
    "./brains/contact.rive",
    "./brains/linktree.rive",  // Because 'links' is a reserved word in RiveScript
    "./brains/status.rive",
    "./brains/fun.rive",
    "./brains/convo.rive",
];

const greeting = `Hi there! I am <span class="green">LeekBot</span>. 🥬
<br><br>
I've been created by <span class="green">Anqilique</span> to answer your questions. <br> I can fetch links, 
search the web, and more! 😁

<br><br><br>
Try typing in one of the following:<br>
<span class="lightgreen">help / about / contact / links / status / fun / clear</span>
`

const no_brains_msg = `Uh oh! LeekBot's brains not found. 😱🧠
<br>Please let Anqilique know or come back later!
`

const loading_brains_msg = "<sub>Loading brains... 🧠 <br><br>If nothing appears, please let Anqilique know or come back later! 😱</sub>"

const brains_loaded_msg = "<sub>Brains loaded! 🧠 <br><br>---</sub>"

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
}