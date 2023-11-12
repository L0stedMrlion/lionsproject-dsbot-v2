import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.DirectMessages,
  ],
});

client.once('ready', (c) => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log("  Lion’s Project™ - LionBot - ", process.env.BOT_VERSION);
  console.log("  Lion's Project™ - Loading files... ");
  console.log("  Lion's Project™ - Loaded! ");
  console.log("  Lion's Project™ - Bot have been successfully enabled! ");
  console.log("  Lion's Project™ - LionBot was successfully started!  ");
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  });

try {
    client.login(process.env.TOKEN);
  } catch (error) {
    console.error(" Lion's Project™ - Unable to login to Discord ");
    client.destroy()
  }