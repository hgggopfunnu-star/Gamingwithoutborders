const todo = require("../utils/todo");

module.exports = {

  name: "addtodo",

  execute(message, args) {

    const list = args[0];
    const text = args.slice(1).join(" ");

    if (!list || !text) return message.reply("Wrong");

    const data = todo.get();

    if (!data[list]) return message.reply("List not found");

    data[list].push({
      text,
      status: "Not done"
    });

    todo.save(data);

    message.reply("Added");

  }

};
