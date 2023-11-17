require('dotenv').config();
const { ActivityType } = require('discord.js');

module.exports = (client) => {
  console.log(`🦁 LionBot -`, process.env.BOT_VERSION)
  console.log(`🦁 LionBot starting bot...`);
  console.log(`🦁 LionBot is online.`);
  client.user.setPresence({
    activities: [{ name: `🦁 Lion's Project™`, type: ActivityType.Listening }],
    status: 'online',
  });
};