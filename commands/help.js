const { createEmbed } = require("../utils/embed");

module.exports = {

  name: "help",

  execute(message) {

    const embed = createEmbed(
      "info",
      "Commands",
      `
General
&ping
&say
&help

Moderation
&kick
&ban
&mute

Systems
welcome
birthday
todo
`
    );

    message.reply({ embeds: [embed] });

  }

};
