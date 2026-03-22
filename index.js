const {
  Client,
  GatewayIntentBits,
  PermissionsBitField
} = require("discord.js");

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

client.once("ready", () => {
  console.log("Bot online");
});

client.on("messageCreate", async (message) => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();


  // ping

  if (cmd === "ping") {
    return message.reply("@1485151155918082100");
  }


  // KICK

  if (cmd === "kick") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return message.reply("No permission");

    const user = message.mentions.members.first();
    const reason = args.slice(1).join(" ") || "No reason";

    if (!user) return message.reply("Mention user");

    await user.kick(reason);

    message.reply(`Kicked ${user.user.tag}`);
  }


  // BAN

  if (cmd === "ban") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return message.reply("No permission");

    const user = message.mentions.members.first();
    const reason = args.slice(1).join(" ") || "No reason";

    if (!user) return message.reply("Mention user");

    await user.ban({ reason });

    message.reply(`Banned ${user.user.tag}`);
  }


  // MUTE

  if (cmd === "mute") {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers))
      return message.reply("No permission");

    const user = message.mentions.members.first();
    const time = args[1];
    const reason = args.slice(2).join(" ") || "No reason";

    if (!user) return message.reply("Mention user");
    if (!time) return message.reply("Give time");

    await user.timeout(ms(time), reason);

    message.reply(`Muted ${user.user.tag} for ${time}`);
  }

});

client.login(process.env.TOKEN);
