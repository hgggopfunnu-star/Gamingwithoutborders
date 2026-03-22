const { ok } = require("../utils/ui");
const b = require("../utils/birthday");

module.exports = {

  name: "setbirthday",

  execute(message, args) {

    const user = message.mentions.users.first();
    const date = args[1];

    const data = b.get();

    data[user.id] = date;

    b.save(data);

    message.reply({
      embeds: [ok("Birthday saved")]
    });

  }

};
