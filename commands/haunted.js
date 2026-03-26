const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "haunted",

  execute(message) {

    const places = [
      "Room",
      "House",
      "Server",
      "Account",
      "Channel"
    ];

    const p =
      places[Math.floor(Math.random() * places.length)];

    const embed = new EmbedBuilder()
      .setColor("Grey")
      .setTitle("🏚 Haunted Scan")
      .setDescription(
        `${p} is haunted...\nDo not stay alone`
      );

    message.reply({ embeds: [embed] });

  }
};
