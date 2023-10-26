import { config } from "dotenv";
import { Client, GatewayIntentBits, ActivityType, Collection, Events } from "discord.js";
config();

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
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
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
    client.user.setActivity("🦁 Lion's Project", {
      type: ActivityType.Listening,
    });
  }
});

client.on("interactionCreate", (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  switch (interaction.commandName) {
    case "hey":
      return interaction.reply("hey!");
    case "ping":
      return interaction.reply("Pong!");
  }
});

client.login(process.env.TOKEN);
