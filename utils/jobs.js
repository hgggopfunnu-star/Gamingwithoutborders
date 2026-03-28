const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../data/jobs.json");

function load() {
    if (!fs.existsSync(file)) fs.writeFileSync(file, JSON.stringify({}));
    return JSON.parse(fs.readFileSync(file));
}

function save(data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function ensure(userId, data) {
    if (!data[userId]) {
        data[userId] = {
            xp: 0,
            level: 1
        };
    }
}

function addXP(userId, amount) {
    const data = load();
    ensure(userId, data);

    data[userId].xp += amount;

    const needed = data[userId].level * 100;

    if (data[userId].xp >= needed) {
        data[userId].xp = 0;
        data[userId].level++;
    }

    save(data);
    return data[userId];
}

function getJob(userId) {
    const data = load();
    ensure(userId, data);
    save(data);
    return data[userId];
}

module.exports = { addXP, getJob };
