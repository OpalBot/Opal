//// import modules
const Discord = require("discord.js");
const Moment = require("moment");
const fs = require("fs");
const Config = require("./src/config.json");
const _util = require("./src/util");

//// variables
var Commands = {};

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
	fs.readdir("bot_modules", "utf8", (err, data) => {
		if (err) throw new Error(err);

		data.forEach((file) => {
			if (file != "framework.js") {
				let module = require(`./bot_modules/${file.substring(0, file.length - 3)}`);

				Util.keys(module.commands).forEach((command) => {
					Commands[command] = module.commands[command];
				}); 

				console.log(`:: LOADED ${file.substring(0, 1).toUpperCase()}${file.substring(1, file.length - 3)}`);
			}
		});

		Util.log(`Connected to ${Bot.guilds.size} servers`);
	});
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

		case "modules":
			fs.readdir("bot_modules", "utf8", (err, data) => {
				if (err) return message.channel.send(`ERROR: ${err.message}`);

				let modules = "";
				data.forEach((file) => {
					modules += `${file.substring(0, 1).toUpperCase()}${file.substring(1, file.length - 3)}\n`;
				});

				let embed = new Discord.RichEmbed()
					.setTitle("Modules")
					.setDescription(modules);

				message.channel.send(embed);
			});
			break;

		default:
			if (Util.keys(Commands).includes(command)) Commands[command](message, args);
	}
});

//// login
Bot.login(require("./token.json").token);
