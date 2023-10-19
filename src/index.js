require("dotenv").config();
const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");

const client = new Client({
  intents: [
    // Guilds
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
    // DirectMessage
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    // Message
    GatewayIntentBits.MessageContent,
    // Moderation
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
  ],
});

// Console & Status
client.once(Events.ClientReady, (c) => {
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  console.log(" 🦁 Lion's Project™ - Discord bot", process.env.VERSION);
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
});

client.on("ready", () => {
  console.log(" Lion's Project™ - Loading... ");
  console.log(" Lion's Project™ - Loaded! ");
  console.log(" Lion's Project™ - Bot have been successfully enabled! ");
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  client.user.setActivity("🦁 Lion's Project", { type: ActivityType.Watching });
});

// Commands 
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'purge') {
    // Get the channel where the command was run.
    const channel = interaction.channel;

    // Get the number of messages to delete.
    const numberOfMessages = interaction.options.options.first ? interaction.options.options.first : Infinity;

    // Fetch all of the messages in the channel.
    const messages = await channel.messages.fetch({
      limit: numberOfMessages,
    });

    // Delete all of the messages.
    await messages.delete();

    // Reply to the user to let them know that the messages have been deleted.
    await interaction.reply(`${numberOfMessages} messages in this channel have been deleted.`);
  }
});

// Token
client.login(process.env.TOKEN);
