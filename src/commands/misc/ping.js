module.exports = {
  name: 'ping',
  description: 'Pong!',
  testOnly: false,
  callback: (client, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  },
};
