import { HumanPlayer, ComputerPlayer } from "./player";

class Game {
    #players = [];
    #activePlayer;

    constructor(playerOneName = 'Player One') {
        this.#players.push(new HumanPlayer(playerOneName));
        this.#players.push(new ComputerPlayer());
        this.#activePlayer = this.#players[0];
    }

    getPlayers() {
        return this.#players;
    }

    getActivePlayer() {
        return this.#activePlayer;
    }

    switchPlayerTurn() {
        this.#activePlayer = this.#activePlayer === this.#players[0] ? this.#players[1] : this.#players[0];
    }
}

const game = new Game();

export { game };