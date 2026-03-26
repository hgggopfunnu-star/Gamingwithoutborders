const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "unslow",

  async execute(message) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return message.reply("Admin only");

    const channels = message.guild.channels.cache;

    let count = 0;

    channels.forEach(ch => {

      if (!ch.isTextBased()) return;

      if (!ch.manageable) return;

      ch.setRateLimitPerUser(0).catch(() => {});

      count++;

    });

    message.reply(`✅ Slowmode removed from ${count} channels`);

  }

};
