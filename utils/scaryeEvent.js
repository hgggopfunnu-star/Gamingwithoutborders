const { EmbedBuilder } = require("discord.js");

const CHANNEL_ID = "1456718440843972793";

const messages = [

  {
    title: "👻 Ghost Activity",
    text: "Unknown presence detected..."
  },

  {
    title: "⚠ System Alert",
    text: "Security scan running..."
  },

  {
    title: "💻 Hack Alert",
    text: "Unauthorized access detected..."
  },

  {
    title: "🕸 Dark Signal",
    text: "Connection to unknown source..."
  },

  {
    title: "☠ Warning",
    text: "Something is watching."
  }

];

module.exports = (client) => {

  setInterval(() => {

    const channel = client.channels.cache.get(CHANNEL_ID);

    if (!channel) return;

    const data =
      messages[Math.floor(Math.random() * messages.length)];

    const embed = new EmbedBuilder()
      .setColor("DarkRed")
      .setTitle(data.title)
      .setDescription(data.text)
      .setFooter({
        text: "System Event"
      });

    channel.send({ embeds: [embed] });

  }, 3600000); // 1 hour

};
