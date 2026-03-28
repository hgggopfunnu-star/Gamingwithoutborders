const { EmbedBuilder } = require("discord.js");
const eco = require("../utils/economy");

module.exports = {
  name: "die",

  execute(message) {
    const loss = Math.floor(Math.random() * 300) + 50;

    eco.removeBalance(message.author.id, loss);

    message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("DarkRed")
          .setTitle("💀 You Died")
          .setDescription(`You lost **${loss} coins**`)
      ]
    });
  }
};
