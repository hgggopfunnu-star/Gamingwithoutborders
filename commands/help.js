const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",

  execute(message) {

    const commands = message.client.commands;

    const categories = {
      general: [],
      moderation: [],
      setup: [],
      birthday: [],
      todo: [],
      fun: [],
      ghost: [],
      admin: [],
      economy: [],
      other: []
    };

    commands.forEach(cmd => {
      const name = cmd.name;

      if (["help","ping","say"].includes(name)) categories.general.push(name);
      else if (["kick","ban","mute","clear"].includes(name)) categories.moderation.push(name);
      else if (["setwelcome","setlogs"].includes(name)) categories.setup.push(name);
      else if (["setbirthday"].includes(name)) categories.birthday.push(name);
      else if (["createtodo","addtodo","todo","todostatus","deltodo"].includes(name)) categories.todo.push(name);
      else if (["hack","rate","ship","coin","roll","8ball","fakeban","fakekick","gayrate","love","fight","crate","die","rich","quest","meme"].includes(name)) categories.fun.push(name);
      else if (["ghost","curse","scan","lastseen","ritual","demon","possess","haunted","nightmare","entity","summon","darkweb","666","trace","surveillance","lockdown","protocol","breach","classified","signal","redalert"].includes(name)) categories.ghost.push(name);
      else if (["explode","chaos","freeze","unslow"].includes(name)) categories.admin.push(name);
      else if (["balance","daily","work","give","rob","shop","buy","inventory","deposit","withdraw","casino","transactions","job"].includes(name)) categories.economy.push(name);
      else categories.other.push(name);
    });

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle("🚀 GamingWithoutBorders")
      .setDescription("✨ Prefix: &\n━━━━━━━━━━━━━━━━━━━━━━");

    const emojis = {
      general: "📌 General",
      moderation: "🛡️ Moderation",
      setup: "⚙️ Setup",
      birthday: "🎂 Birthday",
      todo: "📝 Todo",
      fun: "😂 Fun",
      ghost: "👻 Ghost",
      admin: "🔥 Admin",
      economy: "💰 Economy",
      other: "📦 Other"
    };

    for (const cat in categories) {
      if (!categories[cat].length) continue;

      embed.addFields({
        name: emojis[cat],
        value: categories[cat].map(c => `┆ &${c}`).join("\n")
      });
    }

    embed.setFooter({
      text: "⚡ Auto Help • No manual editing 😈"
    });

    message.reply({ embeds: [embed] });

  }
};
