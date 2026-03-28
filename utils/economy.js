const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/economy.json");

// Safe read
function loadData() {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify({}));
        }
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (err) {
        console.error("Economy Load Error:", err);
        return {};
    }
}

// Safe write
function saveData(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Economy Save Error:", err);
    }
}

// Ensure user exists
function ensureUser(data, userId) {
    if (!data[userId]) {
        data[userId] = {
            balance: 0,
            lastDaily: 0,
            lastWork: 0,
            lastRob: 0
        };
    }
}

// Public API

function getUser(userId) {
    const data = loadData();
    ensureUser(data, userId);
    saveData(data);
    return data[userId];
}

function addBalance(userId, amount) {
    const data = loadData();
    ensureUser(data, userId);
    data[userId].balance += amount;
    saveData(data);
}

function removeBalance(userId, amount) {
    const data = loadData();
    ensureUser(data, userId);
    data[userId].balance = Math.max(0, data[userId].balance - amount);
    saveData(data);
}

function transfer(from, to, amount) {
    const data = loadData();
    ensureUser(data, from);
    ensureUser(data, to);

    if (data[from].balance < amount) return false;

    data[from].balance -= amount;
    data[to].balance += amount;

    saveData(data);
    return true;
}

function setCooldown(userId, type) {
    const data = loadData();
    ensureUser(data, userId);
    data[userId][type] = Date.now();
    saveData(data);
}

function getCooldown(userId, type) {
    const data = loadData();
    ensureUser(data, userId);
    return data[userId][type] || 0;
}

module.exports = {
    getUser,
    addBalance,
    removeBalance,
    transfer,
    setCooldown,
    getCooldown
};
