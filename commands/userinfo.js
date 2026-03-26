const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "userinfo",

  execute(message) {

    const user = message.member;

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle(user.user.tag)
      .addFields(
        { name: "ID", value: user.id },
        { name: "Joined", value: `${user.joinedAt}` }
      )
      .setThumbnail(user.user.displayAvatarURL());

    message.reply({ embeds: [embed] });

  }

};
