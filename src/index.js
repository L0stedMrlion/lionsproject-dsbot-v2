require("dotenv").config();
const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");

eventHandler(client);
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
  console.log(" Lion's Project™ - Bot have been successfully enabled :)! ");
  console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  client.user.setActivity("🦁 Lion's Project", { type: ActivityType.Watching });
});

// Token
client.login(process.env.TOKEN);
