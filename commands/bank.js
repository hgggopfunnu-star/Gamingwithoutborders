const { EmbedBuilder } = require("discord.js");
const bank = require("../utils/bank");

module.exports = {
    name: "bank",

    async execute(message) {

        const amount = bank.getBank(message.author.id);

        const embed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle("🏦 Bank Account")
            .setDescription(`
🏦 **Bank Balance:** ${amount.toLocaleString()}
            `);

        message.reply({ embeds: [embed] });
    }
};
