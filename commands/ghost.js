const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "ghost",

  async execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const steps = [
      "Scanning for paranormal activity...",
      "Signal detected...",
      "Unknown presence found...",
      "Ghost attached..."
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkPurple")
      .setTitle("👻 Ghost Scanner")
      .setDescription("Starting scan...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          `⚠ Ghost detected near ${user}\nStay safe...`
        );

        return msg.edit({ embeds: [embed] });
      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 1000);

  }
};
