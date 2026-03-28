const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "meme",

    async execute(message) {
        try {
            // anime meme subreddits
            const subs = ["animememes", "goodanimemes", "anime_irl"];

            const randomSub = subs[Math.floor(Math.random() * subs.length)];

            const res = await fetch(`https://meme-api.com/gimme/${randomSub}`);
            const data = await res.json();

            // safety check (avoid broken posts)
            if (!data.url || data.nsfw) {
                return message.reply("❌ Couldn't fetch a safe anime meme, try again!");
            }

            const embed = new EmbedBuilder()
                .setColor("Random")
                .setTitle(`🎌 ${data.title}`)
                .setImage(data.url)
                .setFooter({
                    text: `From r/${data.subreddit} • 👍 ${data.ups}`
                });

            message.reply({ embeds: [embed] });

        } catch (err) {
            console.error(err);
            message.reply("❌ Anime meme machine broke 😭");
        }
    }
};
