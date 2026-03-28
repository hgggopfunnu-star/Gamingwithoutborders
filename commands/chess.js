const { EmbedBuilder } = require("discord.js");
const chess = require("../utils/chess");

module.exports = {
    name: "chess",

    execute(message) {
        const opponent = message.mentions.users.first();

        if (!opponent) return message.reply("❌ Mention someone to play");

        const game = chess.startGame(message.author, opponent);

        const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("♟️ Chess Game Started")
            .setDescription(
                `**${message.author.username} vs ${opponent.username}**\n\n` +
                `Turn: ${message.author.username}\n\n` +
                "Use: &move e2e4"
            );

        message.reply({ embeds: [embed] });
    }
};
