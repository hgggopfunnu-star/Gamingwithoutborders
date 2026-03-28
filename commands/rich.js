const { EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "rich",

  execute(message) {
    const data = JSON.parse(fs.readFileSync("./data/economy.json"));

    const sorted = Object.entries(data)
      .sort((a, b) => b[1].balance - a[1].balance)
      .slice(0, 10);

    const desc = sorted
      .map((u, i) => `**${i + 1}.** <@${u[0]}> - ${u[1].balance}`)
      .join("\n");

    message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Gold")
          .setTitle("🏆 Richest Players")
          .setDescription(desc || "No data")
      ]
    });
  }
};
