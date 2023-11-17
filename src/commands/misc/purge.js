module.exports = {
    name: 'purge',
    description: '🧹 Purges all command not older than 14 days!',

    callback: async (client, interaction) => {
        if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
            return interaction.reply('❌ You do not have the required permissions to use this command.');
          }
      
          const messages = await interaction.channel.messages.fetch({ limit: 200 });
      
          const filteredMessages = messages.filter(message => Date.now() - message.createdTimestamp <= 1209600000);
      
          try {
            await interaction.channel.bulkDelete(filteredMessages);
            interaction.reply(`🧹 Successfully purged ${filteredMessages.length} messages.`);
          } catch (error) {
            console.error('Error purging messages:', error);
            interaction.reply('❌ An error occurred while purging messages.');
          }
        },
      };