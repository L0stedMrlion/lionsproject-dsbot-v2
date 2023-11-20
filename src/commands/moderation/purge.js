module.exports = {
  name: 'purge',
  description: '🧹 Purges a specified number of messages.',
  devOnly: true,

  callback: async (client, interaction) => {
    if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
      return interaction.reply('❌ You do not have the required permissions to use this command.');
    }

    const count = parseInt(interaction.options.getInteger('count'));

    if (!count || count < 1 || count > 100) {
      return interaction.reply('❌ Please enter a valid message count between 1 and 100.');
    }

    const messages = await interaction.channel.messages.fetch({ limit: 100 });

    const filteredMessages = messages.filter(message => Date.now() - message.createdTimestamp <= 1209600000);

    if (filteredMessages.length < count) {
      return interaction.reply('❌ Not enough messages found to purge the specified count.');
    }

    const messagesToDelete = filteredMessages.slice(0, count);

    try {
      await interaction.channel.bulkDelete(messagesToDelete);
      interaction.reply(`🧹 Successfully purged ${count} messages.`);
    } catch (error) {
      console.error('Error purging messages:', error);
      interaction.reply('❌ An error occurred while purging messages.');
    }
  },
};