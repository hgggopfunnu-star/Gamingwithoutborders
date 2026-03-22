const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "ping",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor(0x00ff88)
      .setDescription("Pong");

    message.reply({ embeds: [embed] });

  }

};
