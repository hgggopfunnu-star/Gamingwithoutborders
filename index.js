const {
  Client,
  GatewayIntentBits,
  PermissionsBitField
} = require("discord.js");

const fs = require("fs-extra");
const ms = require("ms");

const prefix = "$";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

if (!fs.existsSync("./data")) fs.mkdirSync("./data");

const birthdaysFile = "./data/birthdays.json";
const todoFile = "./data/todo.json";
const configFile = "./data/config.json";

if (!fs.existsSync(birthdaysFile)) fs.writeJsonSync(birthdaysFile, {});
if (!fs.existsSync(todoFile)) fs.writeJsonSync(todoFile, {});
if (!fs.existsSync(configFile)) fs.writeJsonSync(configFile, {});


// ================= READY =================

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  setInterval(checkBirthdays, 60000);
});


// ================= JOIN / LEAVE =================

client.on("guildMemberAdd", async member => {
  const config = await fs.readJson(configFile);

  if (!config.welcome) return;

  const ch = member.guild.channels.cache.get(config.welcome);
  if (ch) ch.send(`👋 Welcome ${member.user.tag}`);
});

client.on("guildMemberRemove", async member => {
  const config = await fs.readJson(configFile);

  if (!config.goodbye) return;

  const ch = member.guild.channels.cache.get(config.goodbye);
  if (ch) ch.send(`😢 ${member.user.tag} left the server`);
});


// ================= COMMAND =================

client.on("messageCreate", async msg => {
  if (!msg.content.startsWith(prefix)) return;
  if (msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(" ");
  const cmd = args.shift().toLowerCase();



  // ---------- MUTE ----------

  if (cmd === "mute") {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return;

    const user = msg.mentions.members.first();
    const time = args[1];
    const reason = args.slice(2).join(" ") || "No reason";

    if (!user) return msg.reply("Mention user");
    if (!time) return msg.reply("Give time");

    await user.timeout(ms(time), reason);

    msg.reply(`Muted ${user.user.tag} for ${time}`);
  }


  // ---------- BAN ----------

  if (cmd === "ban") {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return;

    const user = msg.mentions.members.first();
    const reason = args.slice(1).join(" ");

    if (!user) return;

    await user.ban({ reason });

    msg.reply(`Banned ${user.user.tag}`);
  }


  // ---------- KICK ----------

  if (cmd === "kick") {
    if (!msg.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return;

    const user = msg.mentions.members.first();
    const reason = args.slice(1).join(" ");

    if (!user) return;

    await user.kick(reason);

    msg.reply(`Kicked ${user.user.tag}`);
  }


  // ---------- SET BIRTHDAY ----------

  if (cmd === "setbirthday") {
    const user = msg.mentions.users.first();
    const date = args[1];

    if (!user || !date) return;

    const data = await fs.readJson(birthdaysFile);

    data[user.id] = date;

    await fs.writeJson(birthdaysFile, data);

    msg.reply("Birthday saved");
  }


  // ---------- SET BDAY CHANNEL ----------

  if (cmd === "setbirthdaychannel") {
    const ch = msg.mentions.channels.first();
    if (!ch) return;

    const config = await fs.readJson(configFile);

    config.birthday = ch.id;

    await fs.writeJson(configFile, config);

    msg.reply("Birthday channel set");
  }



  // ---------- TODO CREATE ----------

  if (cmd === "createtodo") {

    const name = args[0];
    if (!name) return;

    const data = await fs.readJson(todoFile);

    data[name] = [];

    await fs.writeJson(todoFile, data);

    msg.reply("Todo created");
  }


  // ---------- TODO ADD ----------

  if (cmd === "addtodo") {

    const list = args[0];
    const text = args.slice(1).join(" ");

    const data = await fs.readJson(todoFile);

    if (!data[list]) return;

    data[list].push({
      text,
      status: "Not done"
    });

    await fs.writeJson(todoFile, data);

    msg.reply("Added");
  }


  // ---------- TODO STATUS ----------

  if (cmd === "todostatus") {

    const list = args[0];
    const index = args[1];
    const status = args[2];

    const data = await fs.readJson(todoFile);

    if (!data[list]) return;

    data[list][index].status = status;

    await fs.writeJson(todoFile, data);

    msg.reply("Updated");
  }


  // ---------- DELETE ITEM ----------

  if (cmd === "deltodo") {

    const list = args[0];
    const index = args[1];

    const data = await fs.readJson(todoFile);

    data[list].splice(index, 1);

    await fs.writeJson(todoFile, data);

    msg.reply("Deleted");
  }



  // ---------- SET WELCOME ----------

  if (cmd === "setwelcome") {

    const ch = msg.mentions.channels.first();

    const config = await fs.readJson(configFile);

    config.welcome = ch.id;

    await fs.writeJson(configFile, config);

    msg.reply("Welcome channel set");
  }


  // ---------- SET GOODBYE ----------

  if (cmd === "setgoodbye") {

    const ch = msg.mentions.channels.first();

    const config = await fs.readJson(configFile);

    config.goodbye = ch.id;

    await fs.writeJson(configFile, config);

    msg.reply("Goodbye channel set");
  }

});



// ================= BDAY CHECK =================

async function checkBirthdays() {

  const data = await fs.readJson(birthdaysFile);
  const config = await fs.readJson(configFile);

  if (!config.birthday) return;

  const today = new Date();
  const now = `${today.getDate()}-${today.getMonth() + 1}`;

  const channel = client.channels.cache.get(config.birthday);

  for (let id in data) {

    if (data[id] === now) {
      channel.send(`🎂 Happy Birthday <@${id}>`);
    }

  }
}



client.login("YOUR_TOKEN_HERE");
