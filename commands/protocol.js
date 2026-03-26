const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "protocol",

  async execute(message) {

    const steps = [
      "Loading protocol...",
      "Checking access...",
      "Decrypting...",
      "Protocol opened"
    ];

    const embed = new EmbedBuilder()
      .setColor("DarkBlue")
      .setTitle("PROTOCOL")
      .setDescription("Starting...");

    const msg = await message.reply({ embeds: [embed] });

    let i = 0;

    const int = setInterval(() => {

      if (i >= steps.length) {

        clearInterval(int);

        embed.setDescription(
          "Protocol access granted\nDo not share this"
        );

        return msg.edit({ embeds: [embed] });

      }

      embed.setDescription(steps[i]);
      msg.edit({ embeds: [embed] });

      i++;

    }, 900);

  }
};
