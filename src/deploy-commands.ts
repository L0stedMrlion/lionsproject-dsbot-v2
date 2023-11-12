import { REST, Routes } from "discord.js";

const commands: Array<import("discord.js").ApplicationCommandData> = [
  {
    name: "hedsdsdy",
    description: "Replies with hey!",
  },
  {
    name: "pingsdsdsd",
    description: "Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN as string);

(async () => {
  try {
    console.log("Registering slash commands...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID as string,
        process.env.GUILD_ID as string
      ),
      { body: commands }
    );

    console.log("Slash commands were registered successfully!");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();
