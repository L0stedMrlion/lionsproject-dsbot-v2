require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require("discord.js");
require('./commandRegister.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
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

const jokes = [
  "Why do Czechs always drink beer? Because it's the only way to wash down the cabbage.",
  "What do you call a Czech who doesn't drink beer? A disappointment.",
  'Whats the Czech word for "beer" ? "Pivo".Whats the English word for "beer" ? "Pivo".Whats the Czech word for "more beer" ? "Ještě pivo".',
  "Why are Czechs so bad at driving? Because they're always looking for the nearest bar.",
  'Whats the Czech word for "traffic jam"? "A line of cars waiting to get to the bar',
  "Why are Czechs so good at chess? Because they're always planning their next beer.",
  "Why are Czechs so good at skiing? Because they're always trying to get away from their problems.",
  'Whats the Czech word for "money"? "Beer tokens".',
  "Why are Czechs so good at gambling? Because they're always willing to risk everything for a beer.",
  'Whats the Czech word for "everything"? "My last beer".',
  'Whats the Czech word for "attention" ? "Free beer".',
  'Whats the Czech word for "friend"? "Someone who will buy me a beer".',
  "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
  "What do you call a programmer from Finland? Nerdic.",
  'Why do programmers always mix up work and pleasure? Because they "byte" into both!',
  "Why did the programmer go broke? Because he used up all his cache.",
  'Why did the developer go broke? Because he lost his domain in a bet.',
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the computer catch a cold? It had a bad Windows.",
  'Why did the programmer quit his job? Because he didnt get arrays.',
  "Why do Java developers wear glasses? Because they don't see sharp.",
  'Why dont programmers like to go outside? The sunlight causes too many reflections.',
  'Why was the JavaScript developer sad? Because he didn’t "get" callbacks.',
  'Why did the programmer go broke? Because he used up all his "cache"!',
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "What do you call a fish with no eyes? Fsh.",
  'I told my wife she was drawing her eyebrows too high. She looked surprised.',
  "Parallel lines have so much in common. It's a shame they'll never meet.",
  'Why couldn’t the bicycle stand up by itself? Because it was two-tired.',
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  'I used to play piano by ear, but now I use my hands.',
  "I used to be a baker, but I couldn't make enough dough.",
  'I used to be a baker, but I couldn’t make enough dough.',
  "I'm on a whiskey diet. I've lost three days already.",
  'I used to be a baker, but I couldn’t make enough dough.',
];


try {
  client.login(process.env.TOKEN);
} catch (error) {
  console.error(" 🦁 Lion's Project™ - Unable to login to Discord:", error);
  process.exit(1);
}

client.login(process.env.TOKEN);