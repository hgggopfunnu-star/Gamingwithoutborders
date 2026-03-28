const { EmbedBuilder } = require("discord.js");
const shop = require("../utils/shop");
const eco = require("../utils/economy");
const inv = require("../utils/inventory");
const tx = require("../utils/transactions");

module.exports = {
    name: "buy",
    execute(message, args) {
        const itemName = args.join(" ");
        const item = shop.getItem(itemName);

        if (!item) return message.reply("❌ Item not found");

        const user = eco.getUser(message.author.id);

        if (user.balance < item.price)
            return message.reply("❌ Not enough coins");

        eco.removeBalance(message.author.id, item.price);
        inv.addItem(message.author.id, item.name);
        tx.log(message.author.id, `Bought ${item.name}`);

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`🛍️ Bought **${item.name}**`)
            ]
        });
    }
};
