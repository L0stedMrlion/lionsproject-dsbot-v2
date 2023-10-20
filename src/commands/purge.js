client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'purge') {
    const channel = interaction.channel;
    channel.bulkDelete(100)
    interaction.reply(":broom: Zprávy byly promazány")
  }
});