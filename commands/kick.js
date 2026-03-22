const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {

  name: "kick",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return;

    const user = message.mentions.members.first();

    if (!user) return;

    await user.kick();

    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setDescription(`Kicked ${user.user.tag}`);

    message.reply({ embeds: [embed] });

  }

};
