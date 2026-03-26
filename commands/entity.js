const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "entity",

  execute(message) {

    const user =
      message.mentions.users.first() || message.author;

    const power = Math.floor(Math.random() * 100);

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("👁 Entity Scanner")
      .setDescription(
        `${user}\nEntity presence: ${power}%`
      )
      .setFooter({
        text: "Do not look behind you"
      });

    message.reply({ embeds: [embed] });

  }
};
