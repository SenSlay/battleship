import Gameboard from './gameboard';
import Ship from './ship';

class Player {
  #name;
  #gameboard;
  #ships;

  constructor(name) {
    this.#name = name;
    this.#gameboard = new Gameboard();
    this.#ships = [
      new Ship(5, 'Carrier'),
      new Ship(4, 'Battleship'),
      new Ship(3, 'Cruiser'),
      new Ship(3, 'Submarine'),
      new Ship(2, 'Destroyer'),
    ];
  }

  getName() {
    return this.#name;
  }

  getGameboard() {
    return this.#gameboard;
  }

  getShips() {
    return this.#ships;
  }

  placeAllShips() {
    // Get the array of ships
    const ships = this.getShips();

    ships.forEach((ship) => {
      let x, y;

      // Try random coordinates and axis until a valid position is found
      do {
        // Randomly switch between horizontal ('x') or vertical ('y') placement
        if (Math.random() < 0.5) {
          this.getGameboard().switchAxis();
        }

        x = Math.floor(
          Math.random() * this.getGameboard().getBoard()[0].length,
        );
        y = Math.floor(Math.random() * this.getGameboard().getBoard().length);
      } while (!this.getGameboard().isShipPlacementValid(ship, x, y));
      // Place the ship at the valid coordinates with the determined axis
      this.getGameboard().placeShip(ship, x, y);
    });
  }
}

class HumanPlayer extends Player {
  constructor(name) {
    super(name);
  }

  // Place a ship on it's gameboard
  placeShip(ship, x, y) {
    const gameboard = this.getGameboard();
    return gameboard.placeShip(ship, x, y);
  }

  // Attack the enemy's gameboard
  attack(x, y, enemyGameboard) {
    return enemyGameboard.receiveAttack(x, y);
  }
}

class ComputerPlayer extends Player {
  #availableMoves;

  constructor() {
    super('Enemy');
    this.#availableMoves = this.initializeAvailableMoves();
  }

  getAvailableMoves() {
    return this.#availableMoves;
  }

  initializeAvailableMoves() {
    const moves = [];
    const board = this.getGameboard().getBoard();
    for (let x = 0; x < board[0].length; x++) {
      for (let y = 0; y < board.length; y++) {
        moves.push({ x, y });
      }
    }
    return moves;
  }

  attack(enemyGameboard) {
    if (this.#availableMoves.length === 0) {
      return false;
    }

    // Pick a random move from the available moves
    const randomIndex = Math.floor(Math.random() * this.#availableMoves.length);
    const { x, y } = this.#availableMoves[randomIndex];

    // Perform the attack
    const result = enemyGameboard.receiveAttack(x, y);

    // If the attack is valid, remove the move
    if (result !== 'invalid') {
      this.#availableMoves.splice(randomIndex, 1);
    }

    // Perform the attack
    return { result, x, y };
  }
}

export { HumanPlayer, ComputerPlayer };
