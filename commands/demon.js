const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "demon",

  execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const power = Math.floor(Math.random() * 100);

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("😈 Demon Detector")
      .setDescription(
        `${user}\nDemon level: ${power}%`
      )
      .setFooter({
        text: "Do not anger it"
      });

    message.reply({ embeds: [embed] });

  }
};
