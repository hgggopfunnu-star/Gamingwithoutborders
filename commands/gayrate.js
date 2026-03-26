const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "gayrate",
  description: "Gay rate",

  execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const percent = Math.floor(Math.random() * 101);

    const embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle("🏳️‍🌈 Gay Rate")
      .setDescription(`${user} is **${percent}%** gay`);

    message.channel.send({ embeds: [embed] });

  }
};
