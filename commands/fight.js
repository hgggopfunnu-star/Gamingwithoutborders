const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "fight",

  execute(message) {
    const target = message.mentions.users.first();

    if (!target) return message.reply("❌ Mention someone to fight");
    if (target.id === message.author.id) return message.reply("💀 Fighting yourself?");

    const winner = Math.random() < 0.5 ? message.author : target;
    const loser = winner.id === message.author.id ? target : message.author;

    const damage = Math.floor(Math.random() * 100) + 1;

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("⚔️ Fight!")
      .setDescription(
        `**${winner.username}** destroyed **${loser.username}** 💀\n` +
        `Damage dealt: **${damage}**`
      );

    message.reply({ embeds: [embed] });
  }
};
