import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

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

client.on('ready', (c) => {
  console.log(`${c.user.username} is online.`);
});

try {
    client.login(process.env.TOKEN);
  } catch (error) {
    console.error(" Lion's Project™ - Unable to login to Discord ");
    client.destroy()
  }