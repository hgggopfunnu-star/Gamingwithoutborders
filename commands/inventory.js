const { EmbedBuilder } = require("discord.js");
const inv = require("../utils/inventory");

module.exports = {
    name: "inventory",
    execute(message) {
        const items = inv.getInventory(message.author.id);

        message.reply({
            embeds: [
                new EmbedBuilder()
                    .setColor("Blue")
                    .setTitle("🎒 Inventory")
                    .setDescription(items.length ? items.join(", ") : "Empty")
            ]
        });
    }
};
