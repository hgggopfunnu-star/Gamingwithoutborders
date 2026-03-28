const { EmbedBuilder } = require("discord.js");
const tx = require("../utils/transactions");

module.exports = {
    name: "transactions",
    execute(message) {
        const logs = tx.getLogs(message.author.id);

        const desc = logs.map(l => `• ${l.text}`).join("\n") || "No history";

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Grey")
                    .setTitle("📜 Transactions")
                    .setDescription(desc)
            ]
        });
    }
};
