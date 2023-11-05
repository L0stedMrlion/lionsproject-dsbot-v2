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
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
        console.log(" 🦁 Lion's Project™ - Registering slash commands... ");

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log(" 🦁 Lion's Project™ - Slash commands were registered successfully! ");
        console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();