const { Client, GatewayIntentBits } = require("discord.js");

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


client.on("messageCreate", (msg) => {

  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).split(" ");
  const cmd = args.shift().toLowerCase();


  // test command

  if (cmd === "ping") {
    msg.reply("pong");
  }

});


client.login(process.env.TOKEN);
