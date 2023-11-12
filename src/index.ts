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
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log("  Lion’s Project™ - Discord bot - ", process.env.BOT_VERSION);
  console.log("  Lion's Project™ - Loading files... ");
  console.log("  Lion's Project™ - Loaded! ");
  console.log("  Lion's Project™ - Bot have been successfully enabled! ");
  console.log("  ${c.user.username} was successfully started!  ");
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});

try {
    client.login(process.env.TOKEN);
  } catch (error) {
    console.error(" Lion's Project™ - Unable to login to Discord ");
    client.destroy()
  }