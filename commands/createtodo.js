const todo = require("../utils/todo");

module.exports = {

  name: "createtodo",

  execute(message, args) {

    const name = args[0];

    if (!name) return message.reply("Give name");

    const data = todo.get();

    if (data[name]) return message.reply("List exists");

    data[name] = [];

    todo.save(data);

    message.reply(`Created list ${name}`);

  }

};
