require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType } = require("discord.js");

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

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'purge') {
    // Bulk delete 100 messages.
    try {
      interaction.channel.bulkDelete(100);
    } catch (error) {
      // Don't log the error to the console.
    }

    // Reply to the user to let them know that the messages have been deleted.
    interaction.reply('🧹 Messages in this channel were deleted!');
  }
});

client.login(process.env.TOKEN);