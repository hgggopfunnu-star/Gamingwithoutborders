const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/inventory.json");

function load() {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify({}));
    return JSON.parse(fs.readFileSync(file));
}

function save(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function addItem(userId, item) {
    const data = load();
    if (!data[userId]) data[userId] = [];

    data[userId].push(item);
    save(data);
}

function getInventory(userId) {
    const data = load();
    return data[userId] || [];
}

module.exports = { addItem, getInventory };
