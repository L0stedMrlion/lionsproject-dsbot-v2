require('dotenv').config();
const commandRegister = require('./commandRegister.js');
const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.DirectMessages,
  ],
});

// Console
client.on("ready", () => {
  if (client.user) {
    console.log("  Lion's Project™ - Loading files... ");
    console.log("  Lion's Project™ - Loaded! ");
    console.log("  Lion's Project™ - Bot have been successfully enabled! ");
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
        👨‍💻 Discord server [Discord](https://discord.gg/BYHTyMCJkh)

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

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'joke') {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    const embed = new EmbedBuilder();
    embed.setTitle(`🐸 Joke of the day`);
    embed.setDescription(joke);
    embed.setColor('#1d6340');
    embed.setFooter({
      text: "🦁 Lion's Project™ © 2023",
      iconURL: 'https://cdn.discordapp.com/attachments/1092013099168583781/1170441421900218448/lionsproject_logo.png?ex=65590d84&is=65469884&hm=e321b014c27e21524e8efe2b72823971d9dfe8ffff1fedcced5b65391c4816b3',
    });

    interaction.reply({ embeds: [embed] });
  }
});

const ping = Date.now();

// Command (/ping)
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    const ping = Date.now() - interaction.createdAt;

    await interaction.reply(
      `🏓  Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'purge') {
    const count = interaction.options.get('count').value;

    if (!Number.isInteger(count) || count < 1) {
      interaction.reply({ content: ":broom: You need purge more than 1 message!", ephemeral: true });
      return;
    }

    if (!Number.isInteger(count) || count > 250) {
      interaction.reply({ content: ":broom: You can purge more than 250 message!", ephemeral: true });
      return;
    }

    await interaction.channel.bulkDelete(count);

    interaction.reply({ content: ":broom: Messages successfully purged!", ephemeral: true });
  }
});


// Discord bot login & Error Handler
try {
  client.login(process.env.TOKEN);
} catch (error) {
  console.error(" Lion's Project™ - Unable to login to Discord ");
  process.exit(1);
}