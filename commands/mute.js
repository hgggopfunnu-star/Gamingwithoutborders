const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const ms = require("ms");

module.exports = {

  name: "mute",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers))
      return;

    const user = message.mentions.members.first();
    const time = args[1];

    if (!user || !time) return;

    await user.timeout(ms(time));

    const embed = new EmbedBuilder()
      .setColor(0xffcc00)
      .setDescription(`Muted ${user.user.tag} for ${time}`);

    message.reply({ embeds: [embed] });

  }

};
