const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "breach",

  async execute(message) {

    const steps = [
      "Firewall detected...",
      "Bypassing...",
      "Accessing core...",
      "Security breach"
    ];

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("SECURITY BREACH")
      .setDescription("Running...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "System compromised"
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);
      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
