const { Client, GatewayIntentBits } = require("discord.js");

const prefix = "&";

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("Bot online");
});

client.on("messageCreate", (message) => {
  if (!message.content) return;

  if (message.content === "&ping") {
    message.reply("pong");
  }
});

client.login(process.env.TOKEN);
