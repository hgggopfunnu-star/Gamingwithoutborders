const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "summon",

  async execute(message) {

    const steps = [
      "Drawing symbol...",
      "Opening portal...",
      "Calling entity...",
      "Something arrived..."
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkPurple")
      .setTitle("🔮 Summon")
      .setDescription("Starting...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "⚠ Entity summoned successfully"
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);
      msg.edit({ embeds: [embed] });

      i++;

    }, 1000);

  }
};
