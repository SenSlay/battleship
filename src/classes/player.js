import Gameboard from './gameboard';

class Player {
  #name;
  #gameboard;

  constructor(name) {
    this.#name = name;
    this.#gameboard = new Gameboard();
  }

  getName() {
    return this.#name;
  }

  getGameboard() {
    return this.#gameboard;
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
  constructor() {
    super('Computer');
	};


}

export { HumanPlayer, ComputerPlayer };