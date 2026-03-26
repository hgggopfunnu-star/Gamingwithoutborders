const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "lockdown",

  async execute(message) {

    const steps = [
      "Security alert...",
      "Checking system...",
      "Locking channels...",
      "Lockdown enabled",
      "Do not disconnect"
    ];

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("SYSTEM LOCKDOWN")
      .setDescription("Initializing...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "LOCKDOWN ACTIVE\nAll activity monitored"
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
