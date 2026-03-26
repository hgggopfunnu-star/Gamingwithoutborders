const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ship",
  description: "Ship 2 users",

  execute(message) {

    const users = message.mentions.users;

    if (users.size < 2) {
      return message.reply("❌ Mention 2 users.");
    }

    const arr = [...users.values()];

    const percent = Math.floor(Math.random() * 101);

    const embed = new EmbedBuilder()
      .setColor("Pink")
      .setTitle("💖 Ship")
      .setDescription(
        `${arr[0]} ❤️ ${arr[1]}\n\nCompatibility: **${percent}%**`
      );

    message.channel.send({ embeds: [embed] });

  }
};
