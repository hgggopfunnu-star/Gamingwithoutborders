const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "signal",

  async execute(message) {

    const steps = [
      "Searching signal...",
      "Signal found...",
      "Unknown source...",
      "Connection unstable"
    ];

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("SIGNAL")
      .setDescription("Scanning...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "Do not respond"
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);
      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
