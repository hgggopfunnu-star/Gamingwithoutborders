const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "lastseen",

  execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const times = [
      "3:12 AM",
      "2:47 AM",
      "Unknown",
      "Yesterday night",
      "Not found"
    ];

    const t =
      times[Math.floor(Math.random() * times.length)];

    const embed = new EmbedBuilder()
      .setColor("Grey")
      .setTitle("📡 Last Seen Database")
      .setDescription(
        `${user}\nLast seen: ${t}\nStatus: Watching you`
      );

    message.reply({ embeds: [embed] });

  }
};
