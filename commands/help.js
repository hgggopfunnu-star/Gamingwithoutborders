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
            "`&help`\n" +
            "`&ping`\n" +
            "`&say text`",
        },

        {
          name: "🛡 Moderation",
          value:
            "`&kick @user reason`\n" +
            "`&ban @user reason`\n" +
            "`&mute @user 10m reason`",
        },

        {
          name: "⚙️ Setup",
          value:
            "`&setwelcome #channel`\n" +
            "`&setlogs #channel`",
        },

        {
          name: "🎂 Birthday",
          value:
            "`&setbirthday @user 22-3`",
        },

        {
          name: "📝 Todo System",
          value:
            "`&createtodo name`\n" +
            "`&addtodo name text`\n" +
            "`&todo name`\n" +
            "`&todostatus name id status`\n" +
            "`&deltodo name id`",
        }

      )

      .setFooter({
        text: "GamingWithoutBorders • Ultra Bot 🚀"
      })

      .setTimestamp();

    message.reply({ embeds: [embed] });

  }

};
