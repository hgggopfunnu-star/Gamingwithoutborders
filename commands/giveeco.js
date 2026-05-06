const economy = require("../utils/economy");

module.exports = {
    name: "giveeco",

    async execute(message, args) {

        if (message.author.id !== "1173498933453000724") {
            return message.reply("❌ You cannot use this command.");
        }

        const user = message.mentions.users.first();

        if (!user) {
            return message.reply("❌ Please mention a user.");
        }

        const amount = Number(args[1]);

        if (!amount || amount <= 0) {
            return message.reply("❌ Enter a valid amount.");
        }

        economy.addBalance(user.id, amount);

        message.reply(
            `✅ Added ${amount.toLocaleString()} coins to ${user.username}.`
        );
    }
};
