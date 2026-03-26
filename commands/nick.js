const { PermissionsBitField } = require("discord.js");

module.exports = {

  name: "nick",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageNicknames))
      return;

    const user = message.mentions.members.first();
    const nick = args.slice(1).join(" ");

    if (!user) return;

    await user.setNickname(nick);

    message.reply("Nickname changed");

  }

};
