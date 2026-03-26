const { PermissionsBitField } = require("discord.js");

module.exports = {

  name: "clear",

  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return;

    const amount = args[0];

    if (!amount) return;

    await message.channel.bulkDelete(amount);

  }

};
