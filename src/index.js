require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  console.log(" 🦁 Lion's Project™ - Discord bot", process.env.BOT_VERSION);
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
});

client.on("ready", () => {
  if (client.user) {
    console.log(" 🦁 Lion's Project™ - Loading... ");
    console.log(" 🦁 Lion's Project™ - Loaded! ");
    console.log(" 🦁 Lion's Project™ - Bot have been successfully enabled! ");
    console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
    client.user.setActivity("🦁 Lion's Project", {
      type: ActivityType.Listening,
    });
  }
});

// Command (/info)
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'info') {
    const embed = new EmbedBuilder()
      .setTitle('🦁 LionBot')
      .setDescription(`
        Hello, I'm LionBot! 🦁

        🔧  Developer **${process.env.AUTHOR}**
        📋  Version **${process.env.BOT_VERSION}**
        📻  Discord server [Discord](https://discord.gg/BYHTyMCJkh)

      `)
      .setColor('#ffbc00')
      .setThumbnail('https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3')
      .setFooter({
        text: "🦁 Lion's Project™ © 2023",
        iconURL: 'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3',
      });
    interaction.reply({ embeds: [embed] });
  }
});

// Command (/status)
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'status') {
    const embed = new EmbedBuilder()
      .setTitle('📊 Status')
      .setDescription(`
        
        All statuses you can find here on your [Status page](https://status.lionsproject.eu)

      `)
      .setColor('#64a338')
      .setFooter({
        text: "🦁 Lion's Project™ © 2023",
        iconURL: 'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3',
      });
    interaction.reply({ embeds: [embed] });
  }
});

// Command (/dice)
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'dice') {
    const dice_number = Math.floor(Math.random() * 6) + 1;

    await interaction.reply(`🎲 The dice rolled a ${dice_number}`);
  }
});

client.login(process.env.TOKEN);