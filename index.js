const {
  Client,
  GatewayIntentBits,
  ActivityType,
  PermissionsBitField
} = require("discord.js");

const fs = require("fs-extra");
const ms = require("ms");

const prefix = "&";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
  ]
});

const dataDir = "./data";

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const configFile = dataDir + "/config.json";
const birthdayFile = dataDir + "/birthdays.json";
const todoFile = dataDir + "/todo.json";

if (!fs.existsSync(configFile)) fs.writeJsonSync(configFile, {});
if (!fs.existsSync(birthdayFile)) fs.writeJsonSync(birthdayFile, {});
if (!fs.existsSync(todoFile)) fs.writeJsonSync(todoFile, {});


// READY

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

  setInterval(checkBirthdays, 60000);

});


// JOIN

client.on("guildMemberAdd", async member => {

  const config = await fs.readJson(configFile);

  if (!config.welcome) return;

  const ch = member.guild.channels.cache.get(config.welcome);

  if (ch) ch.send(`👋 Welcome ${member.user.tag}`);

});


// LEAVE

client.on("guildMemberRemove", async member => {

  const config = await fs.readJson(configFile);

  if (!config.goodbye) return;

  const ch = member.guild.channels.cache.get(config.goodbye);

  if (ch) ch.send(`😢 ${member.user.tag} left`);

});


// COMMANDS

client.on("messageCreate", async message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");
  const cmd = args.shift().toLowerCase();


  if (cmd === "ping") return message.reply("pong");


  // kick

  if (cmd === "kick") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return;

    const user = message.mentions.members.first();
    const reason = args.slice(1).join(" ") || "No reason";

    if (!user) return;

    await user.kick(reason);

    message.reply("Kicked");

  }


  // ban

  if (cmd === "ban") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return;

    const user = message.mentions.members.first();

    if (!user) return;

    await user.ban();

    message.reply("Banned");

  }


  // mute

  if (cmd === "mute") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers))
      return;

    const user = message.mentions.members.first();
    const time = args[1];

    if (!user || !time) return;

    await user.timeout(ms(time));

    message.reply("Muted");

  }


  // setwelcome

  if (cmd === "setwelcome") {

    const ch = message.mentions.channels.first();

    const config = await fs.readJson(configFile);

    config.welcome = ch.id;

    await fs.writeJson(configFile, config);

    message.reply("Welcome set");

  }


  // setgoodbye

  if (cmd === "setgoodbye") {

    const ch = message.mentions.channels.first();

    const config = await fs.readJson(configFile);

    config.goodbye = ch.id;

    await fs.writeJson(configFile, config);

    message.reply("Goodbye set");

  }


  // setbirthday

  if (cmd === "setbirthday") {

    const user = message.mentions.users.first();
    const date = args[1];

    const data = await fs.readJson(birthdayFile);

    data[user.id] = date;

    await fs.writeJson(birthdayFile, data);

    message.reply("Birthday saved");

  }


  // setbirthdaychannel

  if (cmd === "setbirthdaychannel") {

    const ch = message.mentions.channels.first();

    const config = await fs.readJson(configFile);

    config.birthday = ch.id;

    await fs.writeJson(configFile, config);

    message.reply("Birthday channel set");

  }


  // todo create

  if (cmd === "createtodo") {

    const name = args[0];

    const data = await fs.readJson(todoFile);

    data[name] = [];

    await fs.writeJson(todoFile, data);

    message.reply("Todo created");

  }


  // todo add

  if (cmd === "addtodo") {

    const list = args[0];
    const text = args.slice(1).join(" ");

    const data = await fs.readJson(todoFile);

    data[list].push({
      text,
      status: "Not done"
    });

    await fs.writeJson(todoFile, data);

    message.reply("Added");

  }


  // todo status

  if (cmd === "todostatus") {

    const list = args[0];
    const index = args[1];
    const status = args[2];

    const data = await fs.readJson(todoFile);

    data[list][index].status = status;

    await fs.writeJson(todoFile, data);

    message.reply("Updated");

  }


  // todo delete

  if (cmd === "deltodo") {

    const list = args[0];
    const index = args[1];

    const data = await fs.readJson(todoFile);

    data[list].splice(index, 1);

    await fs.writeJson(todoFile, data);

    message.reply("Deleted");

  }

});


// birthday check

async function checkBirthdays() {

  const data = await fs.readJson(birthdayFile);
  const config = await fs.readJson(configFile);

  if (!config.birthday) return;

  const today = new Date();

  const now = `${today.getDate()}-${today.getMonth()+1}`;

  const ch = client.channels.cache.get(config.birthday);

  for (let id in data) {

    if (data[id] === now) {

      ch.send(`🎂 Happy Birthday <@${id}>`);

    }

  }

}


// crash protection

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);


client.login(process.env.TOKEN);
