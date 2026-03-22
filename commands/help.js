const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "help",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("Commands")
      .setDescription(`
&ping
&say
&kick
&ban
&mute
`);

    message.reply({ embeds: [embed] });

  }

};
