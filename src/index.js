const { Client, GatewayIntentBits } = require("discord.js")
const dotenv = require('dotenv');
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

client.login(process.env.TOKEN);