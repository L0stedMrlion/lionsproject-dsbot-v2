require("dotenv").config();
const {
  Client,
  Events,
  GatewayIntentBits,
} = require("discord.js");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

// Console
client.once(Events.ClientReady, (c) => {
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  console.log(" 🦁 Lion's Project™ - Discord bot", process.env.VERSION);
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
});

client.on("ready", () => {
  console.log(" Lion's Project™ - Loading...");
  console.log(" Lion's Project™ - Loaded! ");
  console.log(" Lion's Project™ - Bot have been successfully enabled! ");
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
});

// Token
client.login(process.env.TOKEN);
