const { EmbedBuilder } = require("discord.js");
const chess = require("../utils/chess");

function boardToString(game) {
    const board = game.board();
    let str = "";

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const piece = board[i][j];
            str += piece ? piece.type : ".";
            str += " ";
        }
        str += "\n";
    }

    return str;
}

module.exports = {
    name: "move",

    execute(message, args) {
        const move = args[0];
        if (!move) return message.reply("❌ Example: &move e2e4");

        const result = chess.makeMove(message.author.id, move);

        if (result.error) return message.reply(`❌ ${result.error}`);

        const embed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle("♟️ Move Played")
            .setDescription(
                "```" + boardToString(result.game) + "```"
            );

        message.reply({ embeds: [embed] });
    }
};
