const { EmbedBuilder } = require("discord.js");
const jobs = require("../utils/jobs");
const eco = require("../utils/economy");

module.exports = {
    name: "job",
    execute(message) {
        const xpGain = Math.floor(Math.random() * 50) + 20;
        const data = jobs.addXP(message.author.id, xpGain);

        const money = data.level * 50;
        eco.addBalance(message.author.id, money);

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Orange")
                    .setTitle("🧑‍💼 Job Done")
                    .setDescription(
                        `XP: +${xpGain}\nLevel: ${data.level}\nEarned: ${money}`
                    )
            ]
        });
    }
};
