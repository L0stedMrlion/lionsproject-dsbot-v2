const { minecraft_domain } = require('../../../minecraft.json');
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ip",
  description: "😁 Send you IP adress for our Minecraft server!",

  callback: async (client, interaction) => {
    const ip_embd = new EmbedBuilder()
      .setTitle("🎮 Minecraft server")
      .setDescription(`IP adress for our server is **${minecraft_domain}**`)
      .setColor("#00AA00")
      .setFooter({
        text: "🦁 Lion's Project™ © 2023",
        iconURL: "https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3",
      });

    interaction.reply({ embeds: [ip_embd] });
  },
};