const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

module.exports = {
    name: "give",
    async execute(message, args) {
        const target = message.mentions.users.first();
        const amount = parseInt(args[1]);

        if (!target) return message.reply("❌ Mention a user");
        if (!amount || amount <= 0) return message.reply("❌ Invalid amount");

        const success = eco.transfer(message.author.id, target.id, amount);

        if (!success) {
            return message.reply("❌ You don't have enough coins");
        }

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Purple")
                    .setDescription(`💸 Sent **${amount} coins** to **${target.username}**`)
            ]
        });
    }
};
