require('dotenv').config();

module.exports = (client) => {
  console.log(`${client.user.tag} - `, process.env.BOT_VERSION)
  console.log(`${client.user.tag} starting bot...`);
  console.log(`${client.user.tag} is online.`);
};