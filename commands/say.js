const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {

  name: "say",

  execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return;

    const text = args.join(" ");

    if (!text) return;

    message.delete().catch(() => {});

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setDescription(text);

    message.channel.send({ embeds: [embed] });

  }

};
