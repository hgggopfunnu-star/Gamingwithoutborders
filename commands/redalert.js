const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "redalert",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("RED ALERT")
      .setDescription(
        "Emergency protocol activated"
      )
      .setFooter({
        text: "Stay calm"
      });

    message.channel.send({
      content: "@everyone",
      embeds: [embed]
    });

  }
};
