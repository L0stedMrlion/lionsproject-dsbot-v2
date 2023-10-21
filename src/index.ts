require("dotenv").config();
const { Client, Events, GatewayIntentBits, ActivityType, Collection } = require("discord.js");
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
  console.log(" 🦁 Lion's Project™ - Discord bot", process.env.BOT_VERSION);
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
});

client.on("ready", () => {
  console.log(" Lion's Project™ - Loading... ");
  console.log(" Lion's Project™ - Loaded! ");
  console.log(" Lion's Project™ - Bot have been successfully enabled! ");
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  client.user.setActivity("🦁 Lion's Project", { type: ActivityType.Watching });
});

// Command Listener
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'purge') {
    const channel = interaction.channel;

    interaction.deferReply();

    try {
      await channel.bulkDelete(100);

      interaction.editReply(":broom: Zprávy byly promazány");
    } catch (error) {
      if (error.message.includes("You can only bulk delete messages that are under 14 days old")) {
        interaction.editReply(":warning: Můžete hromadně mazat pouze zprávy, které jsou staré méně než 14 dní.");
      } else {
        interaction.editReply(":x: Při mazání zpráv došlo k chybě.");
      }
    }
  }
});

// Token
client.login(process.env.TOKEN);