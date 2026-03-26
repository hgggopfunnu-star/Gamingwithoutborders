const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "chaos",

  async execute(message) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return;

    const channels = message.guild.channels.cache;

    channels.forEach(ch => {

      if (!ch.isTextBased()) return;

      const time = Math.floor(Math.random() * 10);

      ch.setRateLimitPerUser(time).catch(() => {});

    });

    message.reply("⚠ Chaos started");

  }
};
