const {
  Client,
  GatewayIntentBits,
  ActivityType,
  Collection
} = require("discord.js");

const fs = require("fs");
const path = require("path");

const prefix = "&";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

client.commands = new Collection();


// LOAD COMMANDS

const commandsPath = path.join(__dirname, "commands");
const files = fs.readdirSync(commandsPath);

for (const file of files) {

  const cmd = require(`./commands/${file}`);

  client.commands.set(cmd.name, cmd);

}


// READY

client.once("ready", () => {

  console.log(`✅ UltraPro Online: ${client.user.tag}`);

  client.user.setPresence({
    status: "online",
    activities: [
      {
        name: "GamingWithoutBorders",
        type: ActivityType.Playing
      }
    ]
  });

});


// COMMAND HANDLER

client.on("messageCreate", async message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");
  const cmdName = args.shift().toLowerCase();

  const cmd = client.commands.get(cmdName);

  if (!cmd) return;

  cmd.execute(message, args, client);

});


process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(process.env.TOKEN);
