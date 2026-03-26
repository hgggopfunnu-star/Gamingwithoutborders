const { PermissionsBitField } = require("discord.js");

module.exports = {

  name: "role",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageRoles))
      return;

    const user = message.mentions.members.first();
    const role = message.mentions.roles.first();

    if (!user || !role) return;

    await user.roles.add(role);

    message.reply("Role added");

  }

};
