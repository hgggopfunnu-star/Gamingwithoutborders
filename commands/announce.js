const { PermissionsBitField } = require("discord.js");

module.exports = {

  name: "announce",

  execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.Administrator))
      return;

    const text = args.join(" ");

    if (!text) return;

    message.channel.send(`📢 ${text}`);

  }

};
