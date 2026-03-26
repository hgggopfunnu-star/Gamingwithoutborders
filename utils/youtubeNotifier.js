const fs = require("fs");
const Parser = require("rss-parser");

const parser = new Parser();

const CONFIG_PATH = "./data/youtube.json";

if (!fs.existsSync(CONFIG_PATH)) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify({
        channelId: "",
        discordChannel: "",
        lastVideo: ""
    }, null, 2));
}

function getConfig() {
    return JSON.parse(fs.readFileSync(CONFIG_PATH));
}

function saveConfig(data) {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(data, null, 2));
}

async function checkYouTube(client) {

    const config = getConfig();

    if (!config.channelId) return;
    if (!config.discordChannel) return;

    try {

        const feedURL =
            `https://www.youtube.com/feeds/videos.xml?channel_id=${config.channelId}`;

        const feed = await parser.parseURL(feedURL);

        if (!feed.items.length) return;

        const latest = feed.items[0];

        if (config.lastVideo === latest.id) return;

        config.lastVideo = latest.id;
        saveConfig(config);

        const channel = await client.channels.fetch(
            config.discordChannel
        ).catch(() => null);

        if (!channel) return;

        channel.send({
            content: "@everyone NEW VIDEO UPLOADED!",
            embeds: [
                {
                    color: 0xff0000,
                    title: latest.title,
                    url: latest.link,
                    description: "New upload on our YouTube channel!",
                    footer: {
                        text: "YouTube Notifier"
                    }
                }
            ]
        });

    } catch (err) {
        console.log("YouTube notifier error:", err.message);
    }
}

function startYouTubeNotifier(client) {

    setInterval(() => {

        checkYouTube(client);

    }, 180000); // 3 min

}

module.exports = {
    startYouTubeNotifier
};
