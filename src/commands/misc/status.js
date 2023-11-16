const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'status',
    description: '📊 Sends link to our status page!',

    callback: async (client, interaction) => {
        const statusPageLink = 'https://status.lionsproject.eu';

        const Embed = new EmbedBuilder()
            .setTitle('📊 Status page')
            .setDescription(`

            All statuses you can find here on your [Status page](https://status.lionsproject.eu)
    
          `)
          .setFooter({
            text: "🦁 Lion's Project™ © 2023",
            iconURL: 'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3',
          });

        interaction.reply({ embeds: [Embed] });
    },
};