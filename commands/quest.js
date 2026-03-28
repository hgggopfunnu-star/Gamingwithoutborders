const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "quest",

  execute(message) {
    const quests = [
      "Win a fight ⚔️",
      "Rob someone 🦹",
      "Work once 🛠️",
      "Open a crate 🎁",
      "Gamble in casino 🎰"
    ];

    const quest = quests[Math.floor(Math.random() * quests.length)];

    message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Blue")
          .setTitle("🎯 Daily Quest")
          .setDescription(`Your mission:\n**${quest}**`)
      ]
    });
  }
};
