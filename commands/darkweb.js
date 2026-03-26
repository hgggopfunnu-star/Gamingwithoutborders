const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "darkweb",

  execute(message) {

    const results = [
      "Access granted",
      "Tracking started",
      "Unknown file opened",
      "Connection unstable",
      "They see you"
    ];

    const r =
      results[Math.floor(Math.random() * results.length)];

    const embed = new EmbedBuilder()
      .setColor("Black")
      .setTitle("🕸 Dark Web")
      .setDescription(r);

    message.reply({ embeds: [embed] });

  }
};
