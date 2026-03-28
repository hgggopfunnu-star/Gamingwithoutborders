const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/shop.json");

function load() {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(file));
}

function getItems() {
    return load();
}

function getItem(name) {
    return load().find(i => i.name.toLowerCase() === name.toLowerCase());
}

module.exports = { getItems, getItem };
