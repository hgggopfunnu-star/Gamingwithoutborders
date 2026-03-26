const { EmbedBuilder } = require("discord.js");

const answers = [
  "Yes",
  "No",
  "Maybe",
  "Of course",
  "Never",
  "Ask later",
  "Definitely",
  "I don't think so"
];

module.exports = {
  name: "8ball",
  description: "Ask question",

  execute(message, args) {

    const q = args.join(" ");

    if (!q) {
      return message.reply("❌ Ask a question.");
    }

    const ans = answers[Math.floor(Math.random() * answers.length)];

    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("🎱 8Ball")
      .addFields(
        { name: "Question", value: q },
        { name: "Answer", value: ans }
      );

    message.channel.send({ embeds: [embed] });

  }
};
