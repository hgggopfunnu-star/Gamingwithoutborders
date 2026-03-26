const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "nightmare",

  async execute(message) {

    const steps = [
      "Falling asleep...",
      "Dream detected...",
      "Nightmare started...",
      "Something is chasing you..."
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkRed")
      .setTitle("😱 Nightmare")
      .setDescription("Entering dream...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "⚠ You woke up… but something followed."
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);
      msg.edit({ embeds: [embed] });

      i++;

    }, 1000);

  }
};
