const fs = require("fs");

const file = "./data/birthday.json";

if (!fs.existsSync(file))
  fs.writeFileSync(file, "{}");

function get() {
  return JSON.parse(fs.readFileSync(file));
}

function save(d) {
  fs.writeFileSync(file, JSON.stringify(d, null, 2));
}

module.exports = { get, save };
