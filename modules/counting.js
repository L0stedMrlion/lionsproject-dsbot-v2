const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.js");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const COUNTING_CHANNEL = process.env.COUNTING_CHANNEL;
const reactionEmoji = process.env.COUNTING_REACTION;

let expectedNumber = 1;

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.channel.id !== COUNTING_CHANNEL) return;

    const content = message.content;

    if (isNumeric(content) && parseInt(content) === expectedNumber) {
        expectedNumber++;
        message.react(reactionEmoji);
    } else {
        if (content.toLowerCase() === "undo" && message.deletable) {
            const lastNumber = expectedNumber - 1;
            message.delete();
            message.channel.send(`Poslední číslo bylo smazáno, číslo bylo **${lastNumber}**.`);
        } else {
            message.delete();
        }
    }
});

function isNumeric(value) {
    return !isNaN(value) && isFinite(value);
}

client.login(config.token);
