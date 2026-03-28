const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

const COOLDOWN = 60 * 60 * 1000;

module.exports = {
    name: "work",
    async execute(message) {
        const userId = message.author.id;
        const last = eco.getCooldown(userId, "lastWork");

        if (Date.now() - last < COOLDOWN) {
            const mins = Math.ceil((COOLDOWN - (Date.now() - last)) / 60000);

            return message.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`💤 You're tired. Try again in **${mins} min**`)
                ]
            });
        }

        const earnings = Math.floor(Math.random() * 200) + 50;

        eco.addBalance(userId, earnings);
        eco.setCooldown(userId, "lastWork");

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Blue")
                    .setTitle("🛠️ Work Complete")
                    .setDescription(`You earned **${earnings} coins**`)
            ]
        });
    }
};
