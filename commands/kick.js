const { PermissionsBitField } = require("discord.js");
const { ok, fail } = require("../utils/ui");

module.exports = {

  name: "kick",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return message.reply({ embeds: [fail("No permission")] });

    const user = message.mentions.members.first();

    if (!user)
      return message.reply({ embeds: [fail("Mention user")] });

    await user.kick();

    message.reply({
      embeds: [ok(`Kicked ${user.user.tag}`)]
    });

  }

};
