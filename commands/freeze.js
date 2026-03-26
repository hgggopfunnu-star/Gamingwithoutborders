const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "freeze",

  async execute(message) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return;

    const channels = message.guild.channels.cache;

    channels.forEach(ch => {

      if (!ch.isTextBased()) return;

      ch.permissionOverwrites.edit(
        message.guild.roles.everyone,
        { SendMessages: false }
      ).catch(() => {});

    });

    message.reply("🔒 Server frozen");

  }
};
