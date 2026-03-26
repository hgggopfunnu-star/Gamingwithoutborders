const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "fakeban",
  description: "Fake ban",

  execute(message) {

    const user = message.mentions.users.first();

    if (!user) {
      return message.reply("Mention user");
    }

    const embed = new EmbedBuilder()
      .setColor("Red")
      .setTitle("🔨 Ban")
      .setDescription(`${user} has been banned.`)
      .setFooter({ text: "Fake command" });

    message.channel.send({ embeds: [embed] });

  }
};
