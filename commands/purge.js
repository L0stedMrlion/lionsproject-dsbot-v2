const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const prefix = config.prefix;

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + "purge")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(":x: Nemáte oprávnění k použití tohoto příkazu.");
        }

        const channel = message.channel;

        // Získejte všechny zprávy v kanálu
        const messages = await channel.messages.fetch();

        // Smazání zpráv
        channel.bulkDelete(messages, true);

        // Vytvoření zprávy o úspěšném smazání
        const successMessage = await message.reply(":white_check_mark: Všechny zprávy byly úspěšně smazány.");
    }
});

client.login(config.token);
