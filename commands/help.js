const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

module.exports = {
  name: "help",

  async execute(message) {

    const mainEmbed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle("🚀 GamingWithoutBorders Help")
      .setDescription(
        "✨ Click a category below\n" +
        "⚡ Prefix: &"
      )
      .setFooter({ text: "Help System V2 😈" });

    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("general").setLabel("📌 General").setStyle(ButtonStyle.Primary),
      new ButtonBuilder().setCustomId("moderation").setLabel("🛡️ Moderation").setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId("setup").setLabel("⚙️ Setup").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("fun").setLabel("😂 Fun").setStyle(ButtonStyle.Success)
    );

    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("ghost").setLabel("👻 Ghost").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("economy").setLabel("💰 Economy").setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId("admin").setLabel("🔥 Admin").setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId("todo").setLabel("📝 Todo").setStyle(ButtonStyle.Primary)
    );

    const row3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId("birthday").setLabel("🎂 Birthday").setStyle(ButtonStyle.Secondary),
      new ButtonBuilder().setCustomId("back").setLabel("⬅️ Back").setStyle(ButtonStyle.Secondary)
    );

    const msg = await message.reply({
      embeds: [mainEmbed],
      components: [row1, row2, row3]
    });

    const filter = i => i.user.id === message.author.id;

    const collector = msg.createMessageComponentCollector({
      filter,
      time: 60000
    });

    collector.on("collect", async interaction => {

      let embed = new EmbedBuilder().setColor(0x5865F2);

      if (interaction.customId === "back") {
        return interaction.update({
          embeds: [mainEmbed],
          components: [row1, row2, row3]
        });
      }

      if (interaction.customId === "general") {
        embed.setTitle("📌 General")
          .setDescription("┆ &help\n┆ &ping\n┆ &say");
      }

      if (interaction.customId === "moderation") {
        embed.setTitle("🛡️ Moderation")
          .setDescription("┆ &kick\n┆ &ban\n┆ &mute\n┆ &clear");
      }

      if (interaction.customId === "setup") {
        embed.setTitle("⚙️ Setup")
          .setDescription("┆ &setwelcome\n┆ &setlogs");
      }

      if (interaction.customId === "birthday") {
        embed.setTitle("🎂 Birthday")
          .setDescription("┆ &setbirthday");
      }

      if (interaction.customId === "todo") {
        embed.setTitle("📝 Todo")
          .setDescription(
            "┆ &createtodo\n┆ &addtodo\n┆ &todo\n┆ &todostatus\n┆ &deltodo"
          );
      }

      if (interaction.customId === "fun") {
        embed.setTitle("😂 Fun")
          .setDescription(
            "┆ &hack\n┆ &rate\n┆ &ship\n┆ &coin\n┆ &roll\n┆ &8ball\n" +
            "┆ &fakeban\n┆ &fakekick\n┆ &gayrate\n┆ &love\n" +
            "┆ &fight\n┆ &crate\n┆ &die\n┆ &rich\n┆ &quest\n┆ &meme"
          );
      }

      if (interaction.customId === "ghost") {
        embed.setTitle("👻 Ghost")
          .setDescription(
            "┆ &ghost\n┆ &curse\n┆ &scan\n┆ &lastseen\n┆ &ritual\n" +
            "┆ &demon\n┆ &possess\n┆ &haunted\n┆ &nightmare\n┆ &entity\n" +
            "┆ &summon\n┆ &darkweb\n┆ &666\n┆ &trace\n┆ &surveillance\n" +
            "┆ &lockdown\n┆ &protocol\n┆ &breach\n┆ &classified\n┆ &signal\n┆ &redalert"
          );
      }

      if (interaction.customId === "admin") {
        embed.setTitle("🔥 Admin")
          .setDescription("┆ &explode\n┆ &chaos\n┆ &freeze\n┆ &unslow");
      }

      if (interaction.customId === "economy") {
        embed.setTitle("💰 Economy")
          .setDescription(
            "┆ &balance\n┆ &daily\n┆ &work\n┆ &give\n┆ &rob\n" +
            "┆ &shop\n┆ &buy\n┆ &inventory\n┆ &deposit\n┆ &withdraw\n" +
            "┆ &casino\n┆ &transactions\n┆ &job"
          );
      }

      await interaction.update({
        embeds: [embed],
        components: [row1, row2, row3]
      });

    });

    collector.on("end", () => {
      msg.edit({ components: [] }).catch(() => {});
    });

  }
};
