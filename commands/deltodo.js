const todo = require("../utils/todo");

module.exports = {

  name: "deltodo",

  execute(message, args) {

    const list = args[0];
    const id = args[1];

    const data = todo.get();

    if (!data[list]) return;

    data[list].splice(id, 1);

    todo.save(data);

    message.reply("Deleted");

  }

};
