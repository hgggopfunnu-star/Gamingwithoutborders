const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ritual",

  async execute(message) {

    const steps = [
      "Drawing ritual circle...",
      "Lighting candles...",
      "Reading ancient text...",
      "Something answered..."
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkRed")
      .setTitle("🕯 Ritual")
      .setDescription("Starting ritual...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "⚠ Ritual complete\nSomething is here..."
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 1000);

  }
};
