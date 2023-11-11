const dotenv = require('dotenv');
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');
dotenv.config();

const commands = [
    {
        name: 'info',
        description: '🦁 Gives information about LionBot',
    },
    {
        name: 'dice',
        description: '🎲 Generate number from 1 to 6',
    },
    {
        name: 'status',
        description: '📊 Gives all stats to our bot and other services',
    },
    {
        name: 'joke',
        description: '🐸 Generate some funny joke',
    },
    {
        name: 'ping',
        description: '🏓 Replies with pong!',
    },
    {
        name: 'purge',
        description: '🗑️ Deletes a specified number of messages',
        options: [
            {
                name: 'count',
                description: 'The number of messages to delete',
                type: ApplicationCommandOptionType.Integer,
                required: true,
            },
        ],
    },
    {
        name: 'authentication',
        description: '✉️ Sends a DM to the specified user',
        options: [
            {
                name: 'user',
                description: 'The user you want to send this message',
                type: ApplicationCommandOptionType.User,
                required: true
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log("  Lion’s Project™ - Discord bot - ", process.env.BOT_VERSION);
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.log('  Lion’s Project™ - Checking and registering new slash commands... ');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('  Lion’s Project™ - Slash commands were registered successfully!  ');
    } catch (error) {
        console.error('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
        console.error(`  Lion’s Project™ - There was an error: ${error}`);
        console.error('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    }
})();