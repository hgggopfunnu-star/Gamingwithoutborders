const { Client, GatewayIntentBits } = require("discord.js");

const prefix = "&";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("✅ Bot online");
});

client.on("messageCreate", (message) => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();


  if (cmd === "ping") {
    message.reply("pong");
  }

});

client.login(process.env.TOKEN);
