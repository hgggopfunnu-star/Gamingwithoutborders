const {
  Client,
  GatewayIntentBits,
  ActivityType,
  Collection
} = require("discord.js");

const fs = require("fs");
const path = require("path");

const { getGuild } = require("./utils/config");

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


// ================= COMMAND LOADER =================

const commandsPath = path.join(__dirname, "commands");

const files = fs.readdirSync(commandsPath);

for (const file of files) {

  const cmd = require(`./commands/${file}`);

  client.commands.set(cmd.name, cmd);

}


// ================= READY =================

client.once("ready", () => {

  console.log(`Online as ${client.user.tag}`);

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

client.on("messageCreate", async message => {

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

    console.error(err);

  }

});


// ================= WELCOME =================

client.on("guildMemberAdd", member => {

  const cfg = getGuild(member.guild.id);

  if (!cfg.welcome) return;

  const ch = member.guild.channels.cache.get(cfg.welcome);

  if (!ch) return;

  ch.send(`Welcome ${member}`);

});


// ================= LEAVE / LOGS =================

client.on("guildMemberRemove", member => {

  const cfg = getGuild(member.guild.id);

  if (!cfg.logs) return;

  const ch = member.guild.channels.cache.get(cfg.logs);

  if (!ch) return;

  ch.send(`${member.user.tag} left`);

});


// ================= CRASH PROTECTION =================

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);


// ================= LOGIN =================

client.login(process.env.TOKEN);
