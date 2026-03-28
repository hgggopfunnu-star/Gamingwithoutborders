const { EmbedBuilder } = require("discord.js");
const shop = require("../utils/shop");

module.exports = {
    name: "shop",
    execute(message) {
        const items = shop.getItems();

        const desc = items.map(i => `**${i.name}** - ${i.price} coins`).join("\n");

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Gold")
                    .setTitle("🛒 Shop")
                    .setDescription(desc)
            ]
        });
    }
};
