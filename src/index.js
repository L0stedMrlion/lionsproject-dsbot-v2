const dotenv = require('dotenv');
const commandRegister = require('./commandRegister.js');
const commands = require('./commands.js');
const { Client, GatewayIntentBits, ActivityType, EmbedBuilder, Events} = require("discord.js");
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.DirectMessages,
  ],
});

// Console
client.once("ready", () => {
  if (client.user) {
    console.log("  Lion's Project™ - Loading files... ");
    console.log("  Lion's Project™ - Loaded! ");
    console.log("  Lion's Project™ - Bot have been successfully enabled! ");
    console.log("  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  ");
    client.user.setActivity("🦁 Lion's Project", {
      type: ActivityType.Listening,
    });
  }
});

// Discord bot login & Error Handler
try {
  client.login(process.env.TOKEN);
} catch (error) {
  console.error(" Lion's Project™ - Unable to login to Discord ");
  destroy()
}