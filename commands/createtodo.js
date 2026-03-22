const t = require("../utils/todo");
const { ok } = require("../utils/ui");

module.exports = {

  name: "createtodo",

  execute(message, args) {

    const name = args[0];

    const data = t.get();

    data[name] = [];

    t.save(data);

    message.reply({
      embeds: [ok("Todo created")]
    });

  }

};
