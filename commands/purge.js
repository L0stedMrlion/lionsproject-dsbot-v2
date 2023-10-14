const { Client, GatewayIntentBits } = require("discord.js");
const config = require("../config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

const prefix = config.prefix;

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + "purge")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply(":x: Nemáte oprávnění k použití tohoto příkazu.");
        }

        const channel = message.channel;

        const messages = await channel.messages.fetch();
        channel.bulkDelete(messages, true);

        const successMessage = await message.reply(":white_check_mark: Všechny zprávy byly úspěšně smazány.");
    }
});

client.login(config.token);
