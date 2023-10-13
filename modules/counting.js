const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const COUNTING_CHANNEL = "process.env.COUNTING_CHANNEL"; 

let expectedNumber = 1; 
const reactionEmoji = "👍"

client.on("messageCreate", async (message) => {
    if (message.author.bot) return; 

    if (message.channel.id !== COUNTING_CHANNEL) return; 

    const content = message.content;

    if (parseInt(content) === expectedNumber) {
        expectedNumber++;
        message.react(reactionEmoji);
    } else {
        message.delete();
    }
});

client.login(config.token);
