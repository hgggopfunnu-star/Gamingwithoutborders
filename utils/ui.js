const { EmbedBuilder } = require("discord.js");

const theme = {
  success: 0x57F287,
  error: 0xED4245,
  info: 0x5865F2,
  warn: 0xFEE75C,
  main: 0x2B2D31
};

function ui(type, title, description) {

  const color = theme[type] || theme.main;

  return new EmbedBuilder()
    .setColor(color)
    .setAuthor({
      name: "GamingWithoutBorders",
    })
    .setTitle(title)
    .setDescription(description)
    .setFooter({
      text: "GamingWithoutBorders Bot • Ultra",
    })
    .setTimestamp();

}

function success(title, text) {
  return ui("success", title, text);
}

function error(title, text) {
  return ui("error", title, text);
}

function info(title, text) {
  return ui("info", title, text);
}

function warn(title, text) {
  return ui("warn", title, text);
}

module.exports = {
  success,
  error,
  info,
  warn
};
