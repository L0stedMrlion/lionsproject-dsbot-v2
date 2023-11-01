require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
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


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'info') {
    const embed = new EmbedBuilder()
      .setTitle('Discord.js Bot Information')
      .setColor(0x00FFFF)
      .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
      .addField('Bot Name', client.user.username, true)
      .addField('Bot ID', client.user.id, true)
      .addField('Guilds', client.guilds.cache.size, true)
      .addField('Users', client.users.cache.size, true)
      .addField('Uptime', process.uptime(), true)

    await interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);