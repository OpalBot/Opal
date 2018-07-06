//// import modules
const Discord = require("discord.js");
const Moment = require("moment");
const _util = require("./src/util");

//// initialize
// discord.js
const Bot = new Discord.Client();

// moment
Moment.locale();

// util
const Util = new _util(Moment);

//// events
// bot ready
Bot.on("ready", () => {
	Util.log(`Connected to ${Bot.guilds} servers`);
});

//// login
Bot.login(require("./token.json").token);
