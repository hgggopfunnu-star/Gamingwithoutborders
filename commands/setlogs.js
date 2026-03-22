const { panel, ok, fail } = require("../utils/ui");
const { getGuild, setGuild } = require("../utils/config");

module.exports = {

  name: "setlogs",

  execute(message) {

    const ch = message.mentions.channels.first();

    if (!ch)
      return message.reply({
        embeds: [fail("Mention channel")]
      });

    const cfg = getGuild(message.guild.id);

    cfg.logs = ch.id;

    setGuild(message.guild.id, cfg);

    message.reply({
      embeds: [ok("Logs channel set")]
    });

  }

};
