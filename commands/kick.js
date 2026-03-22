const { PermissionsBitField } = require("discord.js");
const { createEmbed } = require("../utils/embed");

module.exports = {

  name: "kick",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return message.reply({
        embeds: [createEmbed("error", "Error", "No permission")]
      });

    const user = message.mentions.members.first();

    if (!user)
      return message.reply({
        embeds: [createEmbed("error", "Error", "Mention user")]
      });

    await user.kick();

    message.reply({
      embeds: [
        createEmbed(
          "success",
          "User kicked",
          `${user.user.tag} was kicked`
        )
      ]
    });

  }

};
