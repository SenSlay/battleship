export default class Gameboard {
  #axisPlacement;
  #board;
  #ships = [];

  constructor() {
    this.#board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => ({ ship: null, hit: false })),
    );
    this.#axisPlacement = 'x';
  }

  getAxisPlacement() {
    return this.#axisPlacement;
  }

  switchAxis() {
    this.#axisPlacement = this.#axisPlacement === 'x' ? 'y' : 'x';
  }

  getBoard() {
    return this.#board;
  }

  // Check if ship placement is valid
  isShipPlacementValid(ship, x, y) {
    const boardWidth = this.#board[0].length;
    const boardHeight = this.#board.length;

    if (this.#axisPlacement === 'x') {
        // Check if out of bounds horizontally
        if (y < 0 || y >= boardHeight || x < 0 || x + ship.getLength() - 1 >= boardWidth) {
            return false;
        }

        // Check if any of the cells are already occupied
        for (let i = x; i < x + ship.getLength(); i++) {
            if (this.#board[y][i].ship !== null) return false;
        }
    } else {
        // Check if out of bounds vertically
        if (x < 0 || x >= boardWidth || y < 0 || y + ship.getLength() - 1 >= boardHeight) {
            return false;
        }

        // Check if any of the cells are already occupied
        for (let i = y; i < y + ship.getLength(); i++) {
            if (this.#board[i][x].ship !== null) return false;
        }
    }

    // If all checks pass, the placement is valid
    return true;
  }

  placeShip(ship, x, y) {
    // Use the validation method
    if (!this.isShipPlacementValid(ship, x, y)) return false;

    // If valid, place the ship
    if (this.#axisPlacement === 'x') {
      for (let i = x; i < x + ship.getLength(); i++) {
        this.#board[y][i].ship = ship;
      }
    } else {
      for (let i = y; i < y + ship.getLength(); i++) {
        this.#board[i][x].ship = ship;
      }
    }
    // Add the ship to the list of placed ships
    this.#ships.push(ship);

    return true;
  }

  isAttackValid(x, y) {
    // Check if out of bounds
    if (x < 0 || y < 0 || x >= this.#board[0].length || y >= this.#board.length) return false;

    const cell = this.#board[y][x];
    // Check if cell has already been hit
    if (cell.hit === true) return false;

    return true; // Valid attack
  } 
  
  receiveAttack(x, y) {
    // Check if the attack is valid
    if (!this.isAttackValid(x, y)) return false;
    
    const cell = this.#board[y][x];
    // mark cell as hit
    cell.hit = true;

    // if cell contains ship
    if (cell.ship) {
      cell.ship.hit(); 
      // if ships is sunk
      if (cell.ship.isSunk()) {
        // if all ships are sunk
        if (this.areAllShipsSunk()) return 'all sunk';

        // return when a ship is sunk
        return 'sunk';
      }
      // return when hit but not sunk
      return 'hit'; 
    }
    // return when hit nothing
    return 'miss';
  }

  // Check if all ships are sunk
  areAllShipsSunk() {
    return this.#ships.every(ship => ship.isSunk());
  }

  // Clear ships on the board
  clearShips() {
    this.#ships = []; // Clear the ships array
    for (let row of this.#board) {
      for (let cell of row) {
        if (cell.ship) {  
          cell.ship = null;
        }
      }
    }
  }
}
