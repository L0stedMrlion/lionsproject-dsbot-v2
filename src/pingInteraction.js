const dotenv = require('dotenv');
const { Client, Events, GatewayIntentBits } = require("discord.js");
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

  client.on("messageCreate", async (message) => {
    if (message.author.bot) {
      return;
    }

    if (message.content.includes("<@1018249171720998983>")) {
      message.reply("Zdravím, jak ti mohu pomoci?");
      console.log("sds")
    }
  });