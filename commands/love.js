const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "love",
  description: "Love calculator",

  execute(message) {

    const users = message.mentions.users;

    if (users.size < 2) {
      return message.reply("Mention 2 users");
    }

    const arr = [...users.values()];

    const percent = Math.floor(Math.random() * 101);

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("❤️ Love Calculator")
      .setDescription(
        `${arr[0]} ❤️ ${arr[1]}\n\nLove: **${percent}%**`
      );

    message.channel.send({ embeds: [embed] });

  }
};
