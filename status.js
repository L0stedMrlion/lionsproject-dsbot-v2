const { Client } = require('discord.js');
const config = require('./config.js');

const client = new Client();

client.once('ready', () => {
    client.user.setPresence({
        status: 'process.env.PRESENCE_STATUS', 
        activity: {
            name: 'process.env.PRESENCE_NAME',
            type: 'process.env.PRESENCE_TYPE',
        },
    });
});

client.login(config.token);
