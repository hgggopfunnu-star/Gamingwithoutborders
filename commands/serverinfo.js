const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "serverinfo",

  execute(message) {

    const g = message.guild;

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle(g.name)
      .addFields(
        { name: "Members", value: `${g.memberCount}` },
        { name: "ID", value: g.id }
      );

    message.reply({ embeds: [embed] });

  }

};
