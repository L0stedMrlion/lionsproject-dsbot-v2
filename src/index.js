require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
//const mongoose = require('mongoose');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// (async () => {
// try {
// mongoose.set('strictQuery', false);
//    await mongoose.connect(process.env.MONGODB);
//  console.log('🌿 Connected to Database.');
// eventHandler(client);

// } catch (error) {
// console.log(`❗ There was an error: ${error}`);
// }
//})();
//

client.login(process.env.TOKEN);
