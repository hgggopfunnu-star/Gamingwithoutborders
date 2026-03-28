const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

const COOLDOWN = 24 * 60 * 60 * 1000;

module.exports = {
    name: "daily",
    async execute(message) {
        const userId = message.author.id;
        const last = eco.getCooldown(userId, "lastDaily");

        if (Date.now() - last < COOLDOWN) {
            const timeLeft = Math.ceil((COOLDOWN - (Date.now() - last)) / 3600000);

            return message.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`⏳ Come back in **${timeLeft}h**`)
                ]
            });
        }

        const reward = Math.floor(Math.random() * 500) + 200;

        eco.addBalance(userId, reward);
        eco.setCooldown(userId, "lastDaily");

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Green")
                    .setTitle("🎁 Daily Reward")
                    .setDescription(`You got **${reward} coins**!`)
            ]
        });
    }
};
