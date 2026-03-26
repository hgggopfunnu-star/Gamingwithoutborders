const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "hack",
  description: "Fake hack a user",

  async execute(message, args) {

    const user = message.mentions.users.first();

    if (!user) {
      return message.reply("❌ Mention a user to hack.");
    }

    const steps = [
      "Connecting to Discord...",
      "Bypassing security...",
      "Finding IP...",
      "Injecting virus...",
      "Downloading data...",
      "Selling data to FBI...",
      "Hack complete"
    ];

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("💻 Hacking...")
      .setDescription(`Starting hack on ${user}...`)
      .setFooter({ text: "Fun command" });

    const msg = await message.channel.send({ embeds: [embed] });

    let i = 0;

    const interval = setInterval(() => {

      if (i >= steps.length) {
        clearInterval(interval);

        const done = new EmbedBuilder()
          .setColor("Green")
          .setTitle("✅ Hack Complete")
          .setDescription(`${user} successfully hacked.`);

        return msg.edit({ embeds: [done] });
      }

      embed.setDescription(`💻 ${steps[i]}`);
      msg.edit({ embeds: [embed] });

      i++;

    }, 1000);

  }
};
