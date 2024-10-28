import { HumanPlayer, ComputerPlayer } from "./player";

class Game {
    #players = [];
    #activePlayer;

    constructor(playerOneName = 'Player One') {
        this.#players.push(new HumanPlayer(playerOneName));
        this.#players.push(new ComputerPlayer());
        this.#activePlayer = this.#players[0];
        this.#players[1].placeAllShips();
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

    checkWinner() {
        const [playerOne, playerTwo] = this.#players;
        
        // Check if player one's ships are all sunk
        if (playerOne.getGameboard().areAllShipsSunk()) {
            return playerTwo; // Player Two wins
        }
        
        // Check if player two's ships are all sunk
        if (playerTwo.getGameboard().areAllShipsSunk()) {
            return playerOne; // Player One wins
        }
        
        // No winner yet
        return null;
    }
}

let game = new Game();

// Game getter
const getGame = () => game;

//  Game resetter
const resetGame = () => {
    game = new Game();
};

export { getGame, resetGame};