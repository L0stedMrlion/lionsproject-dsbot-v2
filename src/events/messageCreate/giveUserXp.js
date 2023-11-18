const { Client, Message, EmbedBuilder } = require('discord.js');
const calculateLevelXp = require('../../utils/calculateLevelXp');
const Level = require('../../models/Level');
const cooldowns = new Set();

function getRandomXp(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = async (client, message) => {
  if (!message.inGuild() || message.author.bot || cooldowns.has(message.author.id)) return;

  const xpToGive = getRandomXp(3, 10);

  const query = {
    userId: message.author.id,
    guildId: message.guild.id,
  };

  try {
    const level = await Level.findOne(query);

    if (level) {
      level.xp += xpToGive;

      if (level.xp > calculateLevelXp(level.level)) {
        level.xp = 0;
        level.level += 1;

        const levelup = new EmbedBuilder()
          .setTitle('🆙  Level')
          .setDescription(`${message.member} you have leveled up to **level ${level.level}**.`)
          .setColor('#0085ff')
          .setFooter({
            text: "🦁 Lion's Project™ © 2023",
            iconURL: 'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3',
          });

        message.channel.send({ embeds: [levelup] });
      }

      await level.save().catch((e) => {
        console.log(`Error saving updated level ${e}`);
        return;
      });
      cooldowns.add(message.author.id);
      setTimeout(() => {
        cooldowns.delete(message.author.id);
      }, 30000);
    }

    // if (!level)
    else {
      const newLevel = new Level({
        userId: message.author.id,
        guildId: message.guild.id,
        xp: xpToGive,
      });

      await newLevel.save();
      cooldowns.add(message.author.id);
      setTimeout(() => {
        cooldowns.delete(message.author.id);
      }, 30000);
    }
  } catch (error) {
    console.log(`❗ Error giving xp: ${error}`);
  }
};
