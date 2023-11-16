const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'status',
    description: '👀 Give link to our status page!',

    callback: async (client, interaction) => {
        const statusPageLink = 'https://status.lionsproject.eu';

        const Embed = new EmbedBuilder()
            .setTitle('Check Our Status')
            .setURL(statusPageLink)
            .setDescription('Stay up-to-date on our service status with this handy link.')
            .setColor('#0099ff')
            .setFooter({ text: 'Always monitoring for any issues.' });

        interaction.reply({ embeds: [Embed] });
    },
};