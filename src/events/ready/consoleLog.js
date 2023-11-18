require('dotenv').config();
const { ActivityType } = require('discord.js');
const { bot_version } = require('../../../config.json');

module.exports = (client) => {
  console.log(`🦁 LionBot - ${bot_version}`,)
  console.log(`🦁 LionBot starting bot...`);
  console.log(`🦁 LionBot is online.`);
  client.user.setPresence({
    activities: [{ name: `🦁 Lion's Project™`, type: ActivityType.Listening }],
    status: 'online',
  });
};