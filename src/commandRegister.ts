require("dotenv").config();
import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
];

const rest = new REST({ version: "10" }).setToken("process.env.TOKEN");

(async () => {
  try {
    console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
    console.log(" 🦁 Lion's Project™ - Discord bot", process.env.BOT_VERSION);
    console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID!,
        process.env.GUILD_ID!
      ),
      { body: commands }
    );

    console.log("Slash commands were registered successfully!");
    console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
