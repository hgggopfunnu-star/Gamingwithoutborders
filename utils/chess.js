const { Chess } = require("chess.js");

const games = new Map();

function startGame(player1, player2) {
    const game = new Chess();

    games.set(player1.id, {
        game,
        opponent: player2.id,
        turn: player1.id
    });

    games.set(player2.id, {
        game,
        opponent: player1.id,
        turn: player1.id
    });

    return game;
}

function getGame(userId) {
    return games.get(userId);
}

function makeMove(userId, move) {
    const data = games.get(userId);
    if (!data) return { error: "No game found" };

    if (data.turn !== userId) {
        return { error: "Not your turn" };
    }

    try {
        const result = data.game.move(move);
        if (!result) return { error: "Invalid move" };

        // switch turn
        data.turn = data.opponent;
        games.get(data.opponent).turn = data.opponent;

        return { success: true, game: data.game };
    } catch {
        return { error: "Invalid move format" };
    }
}

function endGame(userId) {
    const data = games.get(userId);
    if (!data) return;

    games.delete(userId);
    games.delete(data.opponent);
}

module.exports = {
    startGame,
    getGame,
    makeMove,
    endGame
};
