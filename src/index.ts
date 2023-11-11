import 'dotenv/config';
import { Client } from 'discord.js';

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

try {
    client.login(process.env.TOKEN);
  } catch (error) {
    console.error(" Lion's Project™ - Unable to login to Discord ");
    client.destroy()
  }