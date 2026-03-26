const todo = require("../utils/todo");

module.exports = {

  name: "todo",

  execute(message, args) {

    const list = args[0];

    const data = todo.get();

    if (!data[list]) return message.reply("No list");

    let text = "";

    data[list].forEach((t, i) => {
      text += `${i} | ${t.text} | ${t.status}\n`;
    });

    message.reply("```" + text + "```");

  }

};
