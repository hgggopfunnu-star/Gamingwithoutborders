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
            "🔹 `&help`\n" +
            "🔹 `&ping`\n" +
            "🔹 `&say text`",
        },

        {
          name: "🛡 Moderation",
          value:
            "🔹 `&kick`\n" +
            "🔹 `&ban`\n" +
            "🔹 `&mute`",
        },

        {
          name: "⚙️ Setup",
          value:
            "🔹 `&setwelcome`\n" +
            "🔹 `&setlogs`",
        },

        {
          name: "📝 Todo",
          value:
            "🔹 `&createtodo`\n" +
            "🔹 `&addtodo`\n" +
            "🔹 `&todo`",
        },

        {
          name: "🎮 Fun",
          value:
            "🔹 `&hack`\n" +
            "🔹 `&rate`\n" +
            "🔹 `&ship`\n" +
            "🔹 `&coin`\n" +
            "🔹 `&roll`\n" +
            "🔹 `&8ball`",
        },

        {
          name: "👻 Ghost",
          value:
            "🔹 `&ghost`\n" +
            "🔹 `&curse`\n" +
            "🔹 `&scan`\n" +
            "🔹 `&lastseen`\n" +
            "🔹 `&ritual`\n" +
            "🔹 `&demon`\n" +
            "🔹 `&possess`\n" +
            "🔹 `&haunted`\n" +
            "🔹 `&nightmare`\n" +
            "🔹 `&entity`\n" +
            "🔹 `&summon`\n" +
            "🔹 `&darkweb`\n" +
            "🔹 `&666`\n" +
            "🔹 `&trace`\n" +
            "🔹 `&surveillance`\n" +
            "🔹 `&lockdown`",
        }

      )

      .setFooter({
        text: "GamingWithoutBorders • Ultra Bot"
      });

    message.reply({ embeds: [embed] });

  }

};
