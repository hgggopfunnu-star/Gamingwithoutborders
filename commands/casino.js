const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");
const tx = require("../utils/transactions");

module.exports = {
    name: "casino",
    execute(message, args) {
        const bet = parseInt(args[0]);

        if (!bet || bet <= 0) return message.reply("❌ Invalid bet");

        const user = eco.getUser(message.author.id);

        if (user.balance < bet) return message.reply("❌ Not enough coins");

        const win = Math.random() < 0.5;

        if (win) {
            eco.addBalance(message.author.id, bet);
            tx.log(message.author.id, `Won casino ${bet}`);

            message.reply({
                embeds: [new EmbedBuilder().setColor("Green").setDescription(`🎰 You WON ${bet}`)]
            });
        } else {
            eco.removeBalance(message.author.id, bet);
            tx.log(message.author.id, `Lost casino ${bet}`);

            message.reply({
                embeds: [new EmbedBuilder().setColor("Red").setDescription(`🎰 You lost ${bet}`)]
            });
        }
    }
};
