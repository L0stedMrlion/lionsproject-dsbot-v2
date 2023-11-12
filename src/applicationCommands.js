const dotenv = require('dotenv');
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

dotenv.config();

const commands = [
    {
        name: 'info',
        description: '🦁 Gives information about LionBot',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('  Lion’s Project™ - Checking and registering new slash commands... ');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('  Lion’s Project™ - Slash commands were registered successfully!  ');
    } catch (error) {
        console.error(`  Lion’s Project™ - There was an error: ${error}`);
    }
})();