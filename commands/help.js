const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",

  execute(message) {

    const embed = new EmbedBuilder()

      .setColor(0x5865F2)
      .setTitle("✨ GamingWithoutBorders Bot")
      .setDescription("Use &command")

      .addFields(

        {
          name: "📌 General",
          value:
          "🔹 &help\n" +
          "🔹 &ping\n" +
          "🔹 &say"
        },

        {
          name: "🛡️ Moderation",
          value:
          "🔹 &kick\n" +
          "🔹 &ban\n" +
          "🔹 &mute\n" +
          "🔹 &clear"
        },

        {
          name: "⚙️ Setup",
          value:
          "🔹 &setwelcome\n" +
          "🔹 &setlogs"
        },

        {
          name: "🎂 Birthday",
          value:
          "🔹 &setbirthday"
        },

        {
          name: "📝 Todo",
          value:
          "🔹 &createtodo\n" +
          "🔹 &addtodo\n" +
          "🔹 &todo\n" +
          "🔹 &todostatus\n" +
          "🔹 &deltodo"
        },

        {
          name: "😂 Fun",
          value:
          "🔹 &hack\n" +
          "🔹 &rate\n" +
          "🔹 &ship\n" +
          "🔹 &coin\n" +
          "🔹 &roll\n" +
          "🔹 &8ball\n" +
          "🔹 &fakeban\n" +
          "🔹 &fakekick\n" +
          "🔹 &gayrate\n" +
          "🔹 &love"
        },

        {
          name: "👻 Ghost",
          value:
          "🔹 &ghost\n" +
          "🔹 &curse\n" +
          "🔹 &scan\n" +
          "🔹 &lastseen\n" +
          "🔹 &ritual\n" +
          "🔹 &demon\n" +
          "🔹 &possess\n" +
          "🔹 &haunted\n" +
          "🔹 &nightmare\n" +
          "🔹 &entity\n" +
          "🔹 &summon\n" +
          "🔹 &darkweb\n" +
          "🔹 &666\n" +
          "🔹 &trace\n" +
          "🔹 &surveillance\n" +
          "🔹 &lockdown\n" +
          "🔹 &protocol\n" +
          "🔹 &breach\n" +
          "🔹 &classified\n" +
          "🔹 &signal\n" +
          "🔹 &redalert"
        },

        {
          name: "🔥 Admin Fun",
          value:
          "🔹 &explode\n" +
          "🔹 &chaos\n" +
          "🔹 &freeze\n" +
          "🔹 &unslow"
        },

        {
          name: "💰 Economyyyyyy",
          value:
          "🔹 &balance\n" +
          "🔹 &daily\n" +
          "🔹 &work\n" +
          "🔹 &give\n" +
          "🔹 &rob\n" +
          "🔹 &shop\n" +
          "🔹 &buy\n" +
          "🔹 &inventory\n" +
          "🔹 &deposit\n" +
          "🔹 &withdraw\n" +
          "🔹 &casino\n" +
          "🔹 &transactions\n" +
          "🔹 &job"
        }

      )

      .setFooter({
        text: "GamingWithoutBorders • Ultra Bot 🚀"
      });

    message.reply({ embeds: [embed] });

  }

};
