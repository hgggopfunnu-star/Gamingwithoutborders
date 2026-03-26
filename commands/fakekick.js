const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "fakekick",
  description: "Fake kick",

  execute(message) {

    const user = message.mentions.users.first();

    if (!user) {
      return message.reply("Mention user");
    }

    const embed = new EmbedBuilder()
      .setColor("Orange")
      .setTitle("👢 Kick")
      .setDescription(`${user} has been kicked.`)
      .setFooter({ text: "Fake command" });

    message.channel.send({ embeds: [embed] });

  }
};
