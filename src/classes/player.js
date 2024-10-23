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
      new Ship(5, 'carrier'),
      new Ship(4, 'battleship'),
      new Ship(3, 'cruiser'),
      new Ship(3, 'submarine'),
      new Ship(2, 'destroyer'),
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
}

class HumanPlayer extends Player {
  constructor(name) {
    super(name);
  }

  // Place a ship on it's gameboard
  placeShip(ship, x ,y) {
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
    super('Computer');
    this.#availableMoves = this.initializeAvailableMoves();
	};

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

  placeAllShips() {
    const ships = this.getShips(); // Get the array of ships

    ships.forEach((ship) => {
      let x, y;

      // Try random coordinates until a valid position is found
      do {
        x = Math.floor(Math.random() * this.getGameboard().getBoard()[0].length);
        y = Math.floor(Math.random() * this.getGameboard().getBoard().length); 
      } while (!this.getGameboard().isShipPlacementValid(ship, x, y));

      // Place the ship at the valid coordinates
      this.getGameboard().placeShip(ship, x, y);
    });
  }

  attack(enemyGameboard) {
    if (this.#availableMoves.length === 0) {
      return false;
    }

    // Pick a random move from the available moves
    const randomIndex = Math.floor(Math.random() * this.#availableMoves.length);
    const { x, y } = this.#availableMoves[randomIndex];

    // Remove the selected move from the available moves list
    this.#availableMoves.splice(randomIndex, 1);

    // Perform the attack
    return enemyGameboard.receiveAttack(x, y);
  }
}

export { HumanPlayer, ComputerPlayer };