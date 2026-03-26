const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "curse",

  execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const percent = Math.floor(Math.random() * 100);

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("☠ Curse System")
      .setDescription(
        `${user} has been cursed...\n\nBad luck: ${percent}%`
      )
      .setFooter({ text: "Do not look behind you" });

    message.reply({ embeds: [embed] });

  }
};
