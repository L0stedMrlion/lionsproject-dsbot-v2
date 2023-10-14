const { Client, GatewayIntentBits } = require("discord.js");
const config = require("./config.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

async function reloadBot() {
    await client.destroy(); 

    const mainBot = require("./config.js"); 

    const newClient = new mainBot.Client();

    newClient.login(config.token);
}

reloadBot();
