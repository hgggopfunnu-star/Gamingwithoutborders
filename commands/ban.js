const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {

  name: "ban",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return;

    const user = message.mentions.members.first();

    if (!user) return;

    await user.ban();

    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setDescription(`Banned ${user.user.tag}`);

    message.reply({ embeds: [embed] });

  }

};
