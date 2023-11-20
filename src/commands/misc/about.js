const { developer, bot_version } = require("../../../config.json");
const { discord } = require("../../../links.json");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'about',
  description: '🤖 Send information about bot.',

  callback: async (client, interaction) => {

    const info_embd = new EmbedBuilder()
      .setTitle('🦁 LionBot')
      .setDescription(`
        Hello, I'm LionBot! 🦁

        🔧  Developer **${config.developer}**
        📋  Version **${config.bot_version}**
        👨‍💻 Discord server ${links.discord}

      `)
      .setColor('#ffbc00')
      .setThumbnail('https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3')
      .setFooter({
        text: "🦁 Lion's Project™ © 2023",
        iconURL: 'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3',
      });

    interaction.reply({ embeds: [info_embd] });
  },
};