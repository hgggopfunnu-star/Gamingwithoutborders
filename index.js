const {
  Client,
  GatewayIntentBits,
  ActivityType,
  PermissionsBitField,
  EmbedBuilder
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

  console.log(`✅ GamingWithoutBorders Online`);

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


// EMBED COLORS

const colors = {
  red: 0xff0000,
  green: 0x00ff88,
  blue: 0x0099ff,
  yellow: 0xffcc00
};


// JOIN

client.on("guildMemberAdd", async member => {

  const config = await fs.readJson(configFile);

  if (!config.welcome) return;

  const ch = member.guild.channels.cache.get(config.welcome);

  if (!ch) return;

  const embed = new EmbedBuilder()
    .setColor(colors.green)
    .setTitle("Welcome")
    .setDescription(`Welcome ${member}`)
    .setThumbnail(member.user.displayAvatarURL());

  ch.send({ embeds: [embed] });

});


// LEAVE

client.on("guildMemberRemove", async member => {

  const config = await fs.readJson(configFile);

  if (!config.goodbye) return;

  const ch = member.guild.channels.cache.get(config.goodbye);

  if (!ch) return;

  const embed = new EmbedBuilder()
    .setColor(colors.red)
    .setTitle("Member Left")
    .setDescription(`${member.user.tag} left`);

  ch.send({ embeds: [embed] });

});


// COMMANDS

client.on("messageCreate", async message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(" ");
  const cmd = args.shift().toLowerCase();


  // HELP

  if (cmd === "help") {

    const embed = new EmbedBuilder()
      .setColor(colors.blue)
      .setTitle("Commands")
      .setDescription(`
&ping
&say text
&kick @user reason
&ban @user reason
&mute @user 10m
&setwelcome #channel
&setgoodbye #channel
&setbirthday @user 22-3
&setbirthdaychannel #channel
&createtodo name
&addtodo name text
&todostatus name id status
&deltodo name id
`);

    return message.reply({ embeds: [embed] });

  }


  // SAY

  if (cmd === "say") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return;

    const text = args.join(" ");

    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor(colors.blue)
      .setDescription(text);

    message.channel.send({ embeds: [embed] });

  }


  // PING

  if (cmd === "ping") {

    const embed = new EmbedBuilder()
      .setColor(colors.green)
      .setDescription("Pong");

    return message.reply({ embeds: [embed] });

  }


  // KICK

  if (cmd === "kick") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return;

    const user = message.mentions.members.first();

    if (!user) return;

    await user.kick();

    const embed = new EmbedBuilder()
      .setColor(colors.red)
      .setDescription(`Kicked ${user.user.tag}`);

    message.reply({ embeds: [embed] });

  }


  // BAN

  if (cmd === "ban") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return;

    const user = message.mentions.members.first();

    if (!user) return;

    await user.ban();

    const embed = new EmbedBuilder()
      .setColor(colors.red)
      .setDescription(`Banned ${user.user.tag}`);

    message.reply({ embeds: [embed] });

  }


  // MUTE

  if (cmd === "mute") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers))
      return;

    const user = message.mentions.members.first();
    const time = args[1];

    if (!user || !time) return;

    await user.timeout(ms(time));

    const embed = new EmbedBuilder()
      .setColor(colors.yellow)
      .setDescription(`Muted ${user.user.tag} for ${time}`);

    message.reply({ embeds: [embed] });

  }

});


// BDAY

async function checkBirthdays() {

  const data = await fs.readJson(birthdayFile);
  const config = await fs.readJson(configFile);

  if (!config.birthday) return;

  const today = new Date();

  const now = `${today.getDate()}-${today.getMonth()+1}`;

  const ch = client.channels.cache.get(config.birthday);

  for (let id in data) {

    if (data[id] === now) {

      const embed = new EmbedBuilder()
        .setColor(colors.green)
        .setTitle("Birthday")
        .setDescription(`Happy Birthday <@${id}>`);

      ch.send({ embeds: [embed] });

    }

  }

}


process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(process.env.TOKEN);
