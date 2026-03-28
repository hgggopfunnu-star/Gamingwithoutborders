const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "meme",

    async execute(message) {
        try {
            const res = await fetch("https://meme-api.com/gimme");
            const data = await res.json();

            const embed = new EmbedBuilder()
                .setColor("Random")
                .setTitle(data.title)
                .setImage(data.url)
                .setFooter({ text: `👍 ${data.ups} | From ${data.subreddit}` });

            message.reply({ embeds: [embed] });

        } catch (err) {
            console.error(err);
            message.reply("❌ Failed to fetch meme");
        }
    }
};
