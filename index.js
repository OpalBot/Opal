//// import modules
const discord = require("discord.js");
const moment = require("moment");

//// initialize
// discord.js
const bot = new discord.Client();

// moment
moment.locale();

//// functions
// log
function log(text) {
	console.log(moment().format('LTS') + ' | ' + text);
}
