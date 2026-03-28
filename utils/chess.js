const { EmbedBuilder } = require("discord.js");
const chess = require("../utils/chess");

module.exports = {
  name: "chess",

  execute(message, args) {

    const opponent = message.mentions.users.first();

    // ❌ No mention
    if (!opponent) {
      return message.reply("❌ You need to mention someone!\nExample: `&chess @user`");
    }

    // ❌ Self play
    if (opponent.id === message.author.id) {
      return message.reply("💀 You can't play against yourself");
    }

    // ❌ Bots
    if (opponent.bot) {
      return message.reply("🤖 You can't play against bots");
    }

    try {
      chess.startGame(message.author, opponent);

      const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle("♟️ Chess Game Started")
        .setDescription(
          `👤 **${message.author.username}** vs **${opponent.username}**\n\n` +
          `🎯 Turn: **${message.author.username}**\n\n` +
          "📌 Use: `&move e2e4`"
        )
        .setFooter({ text: "Chess System" });

      message.reply({ embeds: [embed] });

    } catch (err) {
      console.error(err);

      message.reply("❌ Failed to start chess game (check console)");
    }

  }
};
