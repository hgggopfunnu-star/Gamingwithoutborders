const { info } = require("../utils/ui");

module.exports = {

  name: "help",

  execute(message) {

    const embed = info(
      "Command Menu",
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
