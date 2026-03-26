const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "coin",
  description: "Flip coin",

  execute(message) {

    const result = Math.random() > 0.5 ? "Heads" : "Tails";

    const embed = new EmbedBuilder()
      .setColor("Yellow")
      .setTitle("🪙 Coin Flip")
      .setDescription(`Result: **${result}**`);

    message.channel.send({ embeds: [embed] });

  }
};
