const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/bank.json");

function load() {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify({}));
    return JSON.parse(fs.readFileSync(file));
}

function save(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function deposit(userId, amount) {
    const data = load();
    if (!data[userId]) data[userId] = 0;

    data[userId] += amount;
    save(data);
}

function withdraw(userId, amount) {
    const data = load();
    if (!data[userId]) data[userId] = 0;

    if (data[userId] < amount) return false;

    data[userId] -= amount;
    save(data);
    return true;
}

function getBank(userId) {
    const data = load();
    return data[userId] || 0;
}

module.exports = { deposit, withdraw, getBank };
