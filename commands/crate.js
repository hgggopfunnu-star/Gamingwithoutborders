const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

module.exports = {
  name: "crate",

  execute(message) {
    const reward = Math.floor(Math.random() * 500) + 100;

    eco.addBalance(message.author.id, reward);

    message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Gold")
          .setTitle("🎁 Crate Opened")
          .setDescription(`You got **${reward} coins**!`)
      ]
    });
  }
};
