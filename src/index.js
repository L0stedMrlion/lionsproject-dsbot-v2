require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, SlashCommandBuilder } = require("discord.js");

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

  const info = new SlashCommandBuilder()
    .setName("info")
    .setDescription("🦁 Gives information about LionBot");
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
    await interaction.reply(`> Hello, I'm LionBot! 🦁
> ‎ 
> I'm developed by **${process.env.AUTHOR}**
> Version: **${process.env.BOT_VERSION}**
> ‎ 
> If you have any feedback or suggestions, please let us know at our [Discord](https://discord.gg/BYHTyMCJkh)
> ‎ 
> Thank you for using LionBot ❤️`);
  }
});

client.login(process.env.TOKEN);