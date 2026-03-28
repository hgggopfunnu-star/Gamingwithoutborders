const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

module.exports = {
    name: "balance",
    async execute(message) {
        const user = message.mentions.users.first() || message.author;
        const data = eco.getUser(user.id);

        const embed = new EmbedBuilder()
            .setColor("Gold")
            .setTitle("💰 Balance")
            .setDescription(`**${user.username}** has **${data.balance} coins**`)
            .setFooter({ text: "Economy System" });

        message.reply({ embeds: [embed] });
    }
};
