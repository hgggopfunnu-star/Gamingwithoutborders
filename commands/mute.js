const { PermissionsBitField } = require("discord.js");
const ms = require("ms");

const { ok, fail } = require("../utils/ui");

module.exports = {

  name: "mute",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers))
      return message.reply({ embeds: [fail("No permission")] });

    const user = message.mentions.members.first();
    const time = args[1];
    const reason = args.slice(2).join(" ") || "No reason";

    if (!user)
      return message.reply({ embeds: [fail("Mention user")] });

    if (!time)
      return message.reply({ embeds: [fail("Give time")] });

    const duration = ms(time);

    if (!duration)
      return message.reply({ embeds: [fail("Invalid time")] });

    await user.timeout(duration, reason);

    message.reply({
      embeds: [
        ok(`${user.user.tag} muted for ${time}\nReason: ${reason}`)
      ]
    });

  }

};
