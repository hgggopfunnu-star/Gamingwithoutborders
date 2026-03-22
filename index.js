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


// ================= LOAD COMMANDS =================

const commandsPath = path.join(__dirname, "commands");

if (fs.existsSync(commandsPath)) {

  const files = fs.readdirSync(commandsPath);

  for (const file of files) {

    const command = require(`./commands/${file}`);

    if (command.name) {
      client.commands.set(command.name, command);
    }

  }

}


// ================= READY =================

client.once("ready", () => {

  console.log(`✅ GamingWithoutBorders Bot Online: ${client.user.tag}`);

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


// ================= COMMAND HANDLER =================

client.on("messageCreate", message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);

  const cmdName = args.shift().toLowerCase();

  const cmd = client.commands.get(cmdName);

  if (!cmd) return;

  try {

    cmd.execute(message, args, client);

  } catch (err) {

    console.log(err);

  }

});


// ================= WELCOME / LOGS SAFE =================

client.on("guildMemberAdd", member => {

  try {

    const file = "./data/config.json";

    if (!fs.existsSync(file)) return;

    const data = JSON.parse(fs.readFileSync(file));

    const cfg = data[member.guild.id];

    if (!cfg) return;

    if (!cfg.welcome) return;

    const ch = member.guild.channels.cache.get(cfg.welcome);

    if (!ch) return;

    ch.send(`Welcome ${member}`);

  } catch (err) {}

});


client.on("guildMemberRemove", member => {

  try {

    const file = "./data/config.json";

    if (!fs.existsSync(file)) return;

    const data = JSON.parse(fs.readFileSync(file));

    const cfg = data[member.guild.id];

    if (!cfg) return;

    if (!cfg.logs) return;

    const ch = member.guild.channels.cache.get(cfg.logs);

    if (!ch) return;

    ch.send(`${member.user.tag} left`);

  } catch (err) {}

});


// ================= CRASH PROTECTION =================

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);


// ================= LOGIN =================

client.login(process.env.TOKEN);
