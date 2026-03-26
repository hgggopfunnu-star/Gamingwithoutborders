const { EmbedBuilder } = require("discord.js");

const messages = [

  {
    title: "👻 Ghost Activity",
    text: "Unknown presence detected in this server..."
  },

  {
    title: "⚠ System Alert",
    text: "Security check running..."
  },

  {
    title: "💻 Hack Alert",
    text: "Someone tried to access the database..."
  },

  {
    title: "🕸 Dark Signal",
    text: "Connection to unknown source..."
  },

  {
    title: "☠ Warning",
    text: "Do not trust what you see."
  }

];

module.exports = (client) => {

  setInterval(() => {

    const guilds = client.guilds.cache;

    guilds.forEach(guild => {

      const channel =
        guild.systemChannel ||
        guild.channels.cache
          .filter(c => c.isTextBased())
          .first();

      if (!channel) return;

      // 5% chance
      if (Math.random() > 0.05) return;

      const data =
        messages[Math.floor(Math.random() * messages.length)];

      const embed = new EmbedBuilder()
        .setColor("DarkRed")
        .setTitle(data.title)
        .setDescription(data.text)
        .setFooter({
          text: "System"
        });

      channel.send({ embeds: [embed] });

    });

  }, 60000); // every 1 min

};
