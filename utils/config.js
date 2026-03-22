const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data", "config.json");

if (!fs.existsSync("data")) fs.mkdirSync("data");

if (!fs.existsSync(file)) {
  fs.writeFileSync(file, JSON.stringify({}));
}

function getConfig() {
  return JSON.parse(fs.readFileSync(file));
}

function saveConfig(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function getGuild(id) {
  const data = getConfig();
  if (!data[id]) data[id] = {};
  return data[id];
}

function setGuild(id, value) {
  const data = getConfig();
  data[id] = value;
  saveConfig(data);
}

module.exports = {
  getConfig,
  saveConfig,
  getGuild,
  setGuild
};
