const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "roll",
  description: "Roll number",

  execute(message, args) {

    const max = parseInt(args[0]) || 100;

    const num = Math.floor(Math.random() * max) + 1;

    const embed = new EmbedBuilder()
      .setColor("Orange")
      .setTitle("🎲 Roll")
      .setDescription(`Rolled **${num} / ${max}**`);

    message.channel.send({ embeds: [embed] });

  }
};
