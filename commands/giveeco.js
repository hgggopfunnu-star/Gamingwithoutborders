const economy = require("../utils/economy");

module.exports = {
    name: "giveeco",

    async execute(message, args) {

        if (message.author.id !== "YOUR_DISCORD_ID")
            return message.reply("❌ You cannot use this command.");

        const user = message.mentions.users.first();
        if (!user) return message.reply("❌ Mention a user.");

        const amount = parseInt(args[1]);

        if (isNaN(amount) || amount <= 0)
            return message.reply("❌ Enter a valid amount.");

        economy.addBalance(user.id, amount);

        message.reply(
            `✅ Added ${amount.toLocaleString()} coins to ${user.username}.`
        );
    }
};
