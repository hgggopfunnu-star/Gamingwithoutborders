const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "666",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("☠ 666")
      .setDescription(
        "You should not have used this command..."
      )
      .setFooter({
        text: "Something is watching"
      });

    message.reply({ embeds: [embed] });

  }
};
