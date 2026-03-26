const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "surveillance",

  async execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const steps = [
      "Camera access...",
      "Audio access...",
      "Reading movement...",
      "Tracking enabled",
      "Surveillance active"
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkBlue")
      .setTitle("SURVEILLANCE SYSTEM")
      .setDescription("Starting...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          `Tracking: ${user}\nStatus: ACTIVE`
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
