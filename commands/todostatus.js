const todo = require("../utils/todo");

module.exports = {

  name: "todostatus",

  execute(message, args) {

    const list = args[0];
    const id = args[1];
    const status = args.slice(2).join(" ");

    const data = todo.get();

    if (!data[list]) return;

    data[list][id].status = status;

    todo.save(data);

    message.reply("Updated");

  }

};
