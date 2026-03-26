const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "possess",

  async execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const steps = [
      "Connecting...",
      "Entering mind...",
      "Control gained...",
      "Possession complete..."
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkPurple")
      .setTitle("👁 Possession")
      .setDescription("Starting...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          `${user} is now possessed`
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);

      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
