const discord = require("discord.js");
const moment = require("moment");

moment.locale();

function log(text) {
	console.log(moment().format('LTS') + ' | ' + text);
}
