const Discord = require("discord.js");

class Command {
	constructor() {
		this.commands = {};
	}

	AddCommand(name, callback) {
		this.commands[name] = callback;
	}
}

module.exports = exports = Command;
