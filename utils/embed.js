const { EmbedBuilder } = require("discord.js");

const colors = {
  success: 0x00ff88,
  error: 0xff3333,
  info: 0x0099ff,
  warn: 0xffcc00
};

function createEmbed(type, title, description) {

  const color = colors[type] || colors.info;

  return new EmbedBuilder()
    .setColor(color)
    .setTitle(title)
    .setDescription(description)
    .setFooter({
      text: "GamingWithoutBorders Bot",
    })
    .setTimestamp();

}

module.exports = {
  createEmbed
};
