const fs = require("fs");

const file = "./data/todo.json";

if (!fs.existsSync("data")) fs.mkdirSync("data");

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "{}");
}

function get() {
  return JSON.parse(fs.readFileSync(file));
}

function save(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

module.exports = {
  get,
  save
};
