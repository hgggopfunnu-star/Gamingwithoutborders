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
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();


// ===== LOAD COMMANDS =====

const commandsPath = path.join(__dirname, "commands");

if (fs.existsSync(commandsPath)) {

  const files = fs.readdirSync(commandsPath)
    .filter(f => f.endsWith(".js"));

  for (const file of files) {

    try {

      const command =
        require(`./commands/${file}`);

      if (command.name) {

        client.commands.set(
          command.name,
          command
        );

      }

    } catch (err) {

      console.log(
        "Command load error:",
        file
      );

    }

  }

}


// ===== READY =====

client.once("ready", () => {

  console.log(
    `✅ Bot Online: ${client.user.tag}`
  );

  client.user.setPresence({
    status: "online",
    activities: [
      {
        name: "GamingWithoutBorders",
        type: ActivityType.Playing
      }
    ]
  });

  // scary events

  try {

    const scaryEvents =
      require("./utils/scaryEvents");

    scaryEvents(client);

    console.log(
      "👻 Scary events loaded"
    );

  } catch {

    console.log(
      "No scaryEvents.js"
    );

  }

});


// ===== COMMAND HANDLER =====

client.on("messageCreate", message => {

  if (!message.guild) return;
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix))
    return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);

  const cmdName =
    args.shift().toLowerCase();

  const cmd =
    client.commands.get(cmdName);

  if (!cmd) return;

  try {

    cmd.execute(
      message,
      args,
      client
    );

  } catch (err) {

    console.log(err);

  }

});


// ===== CRASH PROTECTION =====

process.on(
  "unhandledRejection",
  console.error
);

process.on(
  "uncaughtException",
  console.error
);


// ===== LOGIN =====

client.login(
  process.env.TOKEN
);
