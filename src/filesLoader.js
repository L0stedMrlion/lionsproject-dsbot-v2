const dotenv = require('dotenv');
const commandRegister = require('./commandRegister.js');
const commands = require('./commands.js');
const pingInteraction = require('./pingInteraction.js');
const { Client, GatewayIntentBits } = require("discord.js");
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