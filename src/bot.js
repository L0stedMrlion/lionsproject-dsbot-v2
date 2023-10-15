require("dotenv").config()
const { Client, Events, GatewayIntentBits, ActivityType, GuildInviteManager } = require('discord.js');

const client = new Client({
    intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
    ],
});

client.user.setPresence({ 
    activities: [{ 
        name: "🦁 Lion's Project™", 
        type: ActivityType.Watching, 
    }], 
    status: 'online' 
});

client.login(process.env.TOKEN);
