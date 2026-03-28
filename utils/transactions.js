const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/transactions.json");

function load() {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify({}));
    return JSON.parse(fs.readFileSync(file));
}

function save(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function log(userId, text) {
    const data = load();

    if (!data[userId]) data[userId] = [];

    data[userId].push({
        text,
        time: Date.now()
    });

    if (data[userId].length > 10) data[userId].shift();

    save(data);
}

function getLogs(userId) {
    const data = load();
    return data[userId] || [];
}

module.exports = { log, getLogs };
