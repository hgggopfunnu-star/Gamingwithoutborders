const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "scan",

  async execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const steps = [
      "Reading brain...",
      "Checking fear level...",
      "Analyzing soul...",
      "Dark energy found..."
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkRed")
      .setTitle("🧠 Deep Scan")
      .setDescription("Starting...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          `⚠ ${user} contains unknown energy`
        );

        return msg.edit({ embeds: [embed] });
      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
