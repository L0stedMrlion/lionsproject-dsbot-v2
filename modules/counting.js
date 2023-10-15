const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client();
const countingChannelName = process.env.COUNTING_CHANNEL;
const countingNumbers = new Map();

// Counting
client.on('message', (message) => {
    if (message.channel.name === countingChannelName) {
        const content = message.content;
        const authorId = message.author.id;

        if (!countingNumbers.has(authorId) || countingNumbers.get(authorId) === Number(content) - 1) {
            countingNumbers.set(authorId, Number(content));
            message.react('👍');
        } else {
            message.react('👎');
            message.delete();
        }
    }
});
