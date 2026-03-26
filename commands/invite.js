const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {

  name: "invite",
  description: "Get server invite",

  async execute(message) {

    // CHANGE THIS LINK
    const inviteLink = "https://discord.gg/v3WPN3C4r2";

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle("📨 Invite Friends")
      .setDescription(
        "Invite your friends using the button below!\n\n" +
        "Grow the server 🚀"
      )
      .setFooter({
        text: message.guild.name
      })
      .setTimestamp();

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Invite Link")
        .setStyle(ButtonStyle.Link)
        .setURL(inviteLink)
    );

    message.reply({
      embeds: [embed],
      components: [row]
    });

  }

};
