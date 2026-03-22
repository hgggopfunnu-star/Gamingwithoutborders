const { EmbedBuilder } = require("discord.js");

module.exports = {

  name: "help",

  execute(message) {

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("GamingWithoutBorders Bot")
      .setDescription("Command List")
      .addFields(
        {
          name: "General",
          value: "`&ping` `&say` `&help`"
        },
        {
          name: "Moderation",
          value: "`&kick` `&ban` `&mute`"
        },
        {
          name: "Coming Soon",
          value: "welcome, birthday, todo"
        }
      )
      .setFooter({ text: "Ultra Pro Bot" });

    message.reply({ embeds: [embed] });

  }

};
