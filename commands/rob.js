const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

const COOLDOWN = 30 * 60 * 1000;

module.exports = {
    name: "rob",
    async execute(message) {
        const target = message.mentions.users.first();
        const userId = message.author.id;

        if (!target) return message.reply("❌ Mention someone to rob");
        if (target.id === userId) return message.reply("💀 You can't rob yourself");

        const last = eco.getCooldown(userId, "lastRob");

        if (Date.now() - last < COOLDOWN) {
            const mins = Math.ceil((COOLDOWN - (Date.now() - last)) / 60000);

            return message.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`🚔 Wait **${mins} min** before robbing again`)
                ]
            });
        }

        const targetData = eco.getUser(target.id);

        if (targetData.balance < 100) {
            return message.reply("❌ Target too poor to rob 💀");
        }

        const success = Math.random() < 0.5;

        eco.setCooldown(userId, "lastRob");

        if (success) {
            const stolen = Math.floor(targetData.balance * 0.3);

            eco.removeBalance(target.id, stolen);
            eco.addBalance(userId, stolen);

            message.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor("Green")
                        .setTitle("🦹 Rob Successful")
                        .setDescription(`You stole **${stolen} coins** from ${target.username}`)
                ]
            });
        } else {
            const penalty = Math.floor(Math.random() * 200) + 50;

            eco.removeBalance(userId, penalty);

            message.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor("Red")
                        .setTitle("🚔 Rob Failed")
                        .setDescription(`You got caught and lost **${penalty} coins**`)
                ]
            });
        }
    }
};
