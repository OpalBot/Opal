const Discord = require("discord.js");
const Command = require("./framework");

const Test = new Command();

Test.AddCommand("test", (message, args) => {
	message.channel.send("Hello, World!");
});

module.exports = exports = Test;
