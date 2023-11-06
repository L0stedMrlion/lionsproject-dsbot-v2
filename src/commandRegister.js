require('dotenv').config();
const { REST, Routes } = require('discord.js');

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
        description: '🐸 Generate random funny joke',
    },
    {
        name: 'ping',
        description: '🏓 Replies with pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
        console.log(" 🦁 Lion's Project™ - Discord bot", process.env.BOT_VERSION);
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
        console.log(" 🦁 Lion's Project™ (Command Register) - Checking and registering new slash commands... ");

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log(" 🦁 Lion's Project™ (Command Register) - Slash commands were registered successfully! ");
    } catch (error) {
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
        console.log(` 🦁 Lion's Project™ (Command Register) - There was an error: ${error}`);
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
    }
})();