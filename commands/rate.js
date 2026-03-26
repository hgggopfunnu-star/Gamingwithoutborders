const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "rate",
  description: "Rate something",

  execute(message, args) {

    const text = args.join(" ");

    if (!text) {
      return message.reply("❌ Give something to rate.");
    }

    const rating = Math.floor(Math.random() * 101);

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("⭐ Rating")
      .setDescription(`I rate **${text}**\n\n${rating}/100`)
      .setFooter({ text: message.author.tag });

    message.channel.send({ embeds: [embed] });

  }
};
