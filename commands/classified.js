const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "classified",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor("DarkGrey")
      .setTitle("CLASSIFIED FILE")
      .setDescription(
        "Access level required\nData hidden"
      )
      .setFooter({
        text: "Restricted"
      });

    message.reply({ embeds: [embed] });

  }
};
