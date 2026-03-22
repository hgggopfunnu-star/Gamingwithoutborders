const { panel } = require("../utils/ui");

module.exports = {

  name: "help",

  execute(message) {

    const embed = panel(
      "Command Menu",
      "Use &command",
      [
        {
          name: "🧩 General",
          value: "`&ping` `&say` `&help`",
          inline: false
        },
        {
          name: "🛡 Moderation",
          value: "`&kick` `&ban` `&mute`",
          inline: false
        },
        {
          name: "📦 Systems",
          value: "`welcome` `birthday` `todo`",
          inline: false
        }
      ]
    );

    message.reply({ embeds: [embed] });

  }

};
