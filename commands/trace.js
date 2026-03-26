const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "trace",

  async execute(message, args) {

    const user =
      message.mentions.users.first() || message.author;

    const steps = [
      "Connecting to network...",
      "Finding route...",
      "Locating target...",
      "Accessing logs...",
      "Trace complete"
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkRed")
      .setTitle("TRACE PROTOCOL")
      .setDescription("Starting trace...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          `Target locked: ${user}\nConnection stable`
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
