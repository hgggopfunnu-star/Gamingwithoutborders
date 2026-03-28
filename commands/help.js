const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  name: "help",

  async execute(message) {

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle("🚀 GamingWithoutBorders Help")
      .setDescription(
        "✨ Welcome to the help panel!\n" +
        "Click buttons below to view commands\n\n" +
        "⚡ Prefix: &"
      )
      .setFooter({ text: "Interactive Help System 😈" });

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("general").setLabel("📌 General").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("fun").setLabel("😂 Fun").setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId("economy").setLabel("💰 Economy").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("ghost").setLabel("👻 Ghost").setStyle(ButtonStyle.Danger)
    );

    const msg = await message.reply({
      embeds: [embed],
      components: [row]
    });

    const filter = i => i.user.id === message.author.id;

    const collector = msg.createMessageComponentCollector({
      filter,
      time: 60000
    });

    collector.on("collect", async interaction => {

      let newEmbed = new EmbedBuilder().setColor(0x5865F2);

      if (interaction.customId === "general") {
        newEmbed
          .setTitle("📌 General")
          .setDescription("┆ &help\n┆ &ping\n┆ &say");
      }

      if (interaction.customId === "fun") {
        newEmbed
          .setTitle("😂 Fun")
          .setDescription(
            "┆ &hack\n┆ &rate\n┆ &ship\n┆ &coin\n┆ &roll\n┆ &8ball\n" +
            "┆ &fakeban\n┆ &fakekick\n┆ &gayrate\n┆ &love\n" +
            "┆ &fight\n┆ &crate\n┆ &die\n┆ &rich\n┆ &quest\n┆ &meme"
          );
      }

      if (interaction.customId === "economy") {
        newEmbed
          .setTitle("💰 Economy")
          .setDescription(
            "┆ &balance\n┆ &daily\n┆ &work\n┆ &give\n┆ &rob\n" +
            "┆ &shop\n┆ &buy\n┆ &inventory\n┆ &deposit\n┆ &withdraw\n" +
            "┆ &casino\n┆ &transactions\n┆ &job"
          );
      }

      if (interaction.customId === "ghost") {
        newEmbed
          .setTitle("👻 Ghost System")
          .setDescription(
            "┆ &ghost\n┆ &curse\n┆ &scan\n┆ &lastseen\n┆ &ritual\n" +
            "┆ &demon\n┆ &possess\n┆ &haunted\n┆ &nightmare\n┆ &entity\n" +
            "┆ &summon\n┆ &darkweb\n┆ &666\n┆ &trace\n┆ &surveillance\n" +
            "┆ &lockdown\n┆ &protocol\n┆ &breach\n┆ &classified\n┆ &signal\n┆ &redalert"
          );
      }

      await interaction.update({ embeds: [newEmbed] });

    });

    collector.on("end", () => {
      msg.edit({ components: [] }).catch(() => {});
    });

  }
};
