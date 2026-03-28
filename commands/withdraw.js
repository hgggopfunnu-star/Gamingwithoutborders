const bank = require("../utils/bank");
const eco = require("../utils/economy");

module.exports = {
    name: "withdraw",
    execute(message, args) {
        const amount = parseInt(args[0]);

        if (!bank.withdraw(message.author.id, amount))
            return message.reply("❌ Not enough in bank");

        eco.addBalance(message.author.id, amount);

        message.reply(`💸 Withdrew ${amount}`);
    }
};
