const { PermissionsBitField } = require("discord.js");

const { ok, fail } = require("../utils/ui");

module.exports = {

  name: "ban",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return message.reply({ embeds: [fail("No permission")] });

    const user = message.mentions.members.first();
    const reason = args.slice(1).join(" ") || "No reason";

    if (!user)
      return message.reply({ embeds: [fail("Mention user")] });

    await user.ban({ reason });

    message.reply({
      embeds: [
        ok(`${user.user.tag} banned\nReason: ${reason}`)
      ]
    });

  }

};
