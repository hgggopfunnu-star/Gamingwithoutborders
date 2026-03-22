const { EmbedBuilder } = require("discord.js");

const colors = {
  main: 0x5865F2,
  success: 0x57F287,
  error: 0xED4245,
  warn: 0xFEE75C
};

function panel(title, description, fields = []) {

  const embed = new EmbedBuilder()
    .setColor(colors.main)
    .setTitle(`⚙️ ${title}`)
    .setDescription(description)
    .setFooter({
      text: "GamingWithoutBorders • System",
    })
    .setTimestamp();

  if (fields.length) embed.addFields(fields);

  return embed;
}

function ok(text) {
  return new EmbedBuilder()
    .setColor(colors.success)
    .setDescription(`✅ ${text}`)
    .setTimestamp();
}

function fail(text) {
  return new EmbedBuilder()
    .setColor(colors.error)
    .setDescription(`❌ ${text}`)
    .setTimestamp();
}

module.exports = {
  panel,
  ok,
  fail
};
