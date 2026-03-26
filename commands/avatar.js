const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "avatar",

  execute(message, args) {

    const user =
      message.mentions.users.first() || message.author;

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ size: 512 }));

    message.reply({ embeds: [embed] });

  }

};
