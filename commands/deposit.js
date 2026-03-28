const bank = require("../utils/bank");
const eco = require("../utils/economy");

module.exports = {
    name: "deposit",
    execute(message, args) {
        const amount = parseInt(args[0]);

        if (!amount || amount <= 0) return;

        const user = eco.getUser(message.author.id);

        if (user.balance < amount) return message.reply("❌ Not enough");

        eco.removeBalance(message.author.id, amount);
        bank.deposit(message.author.id, amount);

        message.reply(`🏦 Deposited ${amount}`);
    }
};
