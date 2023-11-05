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

// Jokes
const jokes = [
  "Backendeři, drž se svého PHPka.",
  "Asi zkoušky webdesignu",
  "JS.",
  "Better than sex?",
  "Jak přitáhnout ženy?",
  "Slovo 'prográmátor' je v angličtině 'programmer'. Proč? Protože 'pro' znamená 'pro' a 'grám' znamená 'gram'.",
  "Proč se programátoři bojí jít do lesa? Protože tam jsou stromy.",
  "Proč je JavaScript tak pomalý? Protože je to skriptovací jazyk.",
  "Proč je JavaScript tak složitý? Protože je to objektově orientovaný jazyk.",
  "Proč je JavaScript tak neefektivní? Protože je to dynamický jazyk.",
  "Proč je JavaScript tak choulostivý? Protože je to interpretovaný jazyk.",
  "Proč je JavaScript tak náchylný k chybám? Protože je to jazyk s otevřeným zdrojovým kódem.",
  "Proč je JavaScript tak populární? Protože je to jazyk s krátkou učebnou křivkou.",
  "Proč je JavaScript tak užitečný? Protože je to jazyk s širokou škálou použití.",
  "Proč je JavaScript tak oblíbený? Protože je to jazyk s velkým množstvím knihoven a nástrojů.",
  "Proč je JavaScript tak těžké naučit se? Protože je to jazyk s mnoha nuansami.",
  "Proč je JavaScript tak frustrující? Protože je to jazyk s mnoha chybami.",
  "Proč je JavaScript tak zábavný? Protože je to jazyk s mnoha vtipy.",
];

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

// Command (/joke)
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

client.login(process.env.TOKEN);