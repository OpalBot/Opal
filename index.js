//// import modules
const Discord = require("discord.js");
const Moment = require("moment");
const Config = require("./src/config.json");
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
	Util.log(`Connected to ${Bot.guilds.size} servers`);
});

// bot command
Bot.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(Config.Prefix)) return;

	let args = message.content.split(" ");
	let command = args[0].substring(Config.Prefix.length);
	args.shift();

	Util.log(`${Config.Prefix}${command} FROM ${message.author.username} IN ${message.guild.name} (${message.author.id} SENT IN ${message.guild.id})`);

	switch (command) {
		case "ping":
			message.channel.send(":ping_pong: Pinging...").then((m) => {
				let botPing = `**Bot** ${m.createdTimestamp - message.createdTimestamp}ms`;
				let apiPing = `**API** ${Math.round(Bot.ping)}ms`;

				m.edit(`:ping_pong: ${botPing} ${apiPing}`);
			});
			break;

		default:
			// get module
	}
});

//// login
Bot.login(require("./token.json").token);
