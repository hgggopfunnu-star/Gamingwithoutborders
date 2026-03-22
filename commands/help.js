const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "help",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle("✨ GamingWithoutBorders Bot")
      .setDescription("Use `&command` to run commands")
      .addFields(

        {
          name: "📌 General",
          value:
            "🔹 `&help`\n" +
            "🔹 `&ping`\n" +
            "🔹 `&say text`",
        },

        {
          name: "🛡 Moderation",
          value:
            "🔹 `&kick @user reason`\n" +
            "🔹 `&ban @user reason`\n" +
            "🔹 `&mute @user 10m reason`",
        },

        {
          name: "⚙️ Setup",
          value:
            "🔹 `&setwelcome #channel`\n" +
            "🔹 `&setlogs #channel`",
        },

        {
          name: "🎂 Birthday",
          value:
            "🔹 `&setbirthday @user 22-3`",
        },

        {
          name: "📝 Todo",
          value:
            "🔹 `&createtodo name`",
        }

      )
      .setFooter({
        text: "GamingWithoutBorders • Ultra Bot 🚀"
      })
      .setTimestamp();

    message.reply({ embeds: [embed] });

  }

};
