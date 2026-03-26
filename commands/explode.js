const { PermissionsBitField } = require("discord.js");

module.exports = {
  name: "explode",

  async execute(message) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return message.reply("Admin only");

    const members = message.guild.members.cache;

    members.forEach(member => {

      if (!member.manageable) return;

      const names = [
        "BOOM",
        "ERROR",
        "404",
        "???",
        "CHAOS",
        "LOL",
        "WHAT",
        "HELP"
      ];

      const name =
        names[Math.floor(Math.random() * names.length)];

      member.setNickname(name).catch(() => {});

    });

    message.reply("💥 Explosion complete");

  }
};
