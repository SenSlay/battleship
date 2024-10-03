export default class Gameboard {
  #axisPlacement;
  #board;

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

  placeShip(ship, x, y) {
    const boardWidth = this.#board[0].length;
    const boardHeight = this.#board.length;

    if (this.#axisPlacement === 'x') {
      // if out of bounds horizontally
      if (
        y < 0 ||
        y >= boardHeight ||
        x < 0 ||
        x + ship.getLength() - 1 >= boardWidth
      ) {
        return false;
      }

      for (let i = x; i < x + ship.getLength(); i++) {
        // if space is already occupied
        if (this.#board[y][i].ship !== null) return false;

        this.#board[y][i].ship = ship;
      }
    } else {
      // if out of bounds vertically
      if (
        x < 0 ||
        x >= boardWidth ||
        y < 0 ||
        y + ship.getLength() - 1 >= boardHeight
      ) {
        return false;
      }

      for (let i = y; i < y + ship.getLength(); i++) {
        // if space is already occupied
        if (this.#board[i][x].ship !== null) return false;

        this.#board[i][x].ship = ship;
      }
    }

    return true;
  }
  
  receiveAttack(x, y) {
    // if out of bounds
    if (x < 0 || y < 0 || x >= this.#board[0].length || y >= this.#board.length) return false;

    const cell = this.#board[y][x];
    // if cell has already been hit
    if (cell.hit === true) return false;
    
    // mark cell as hit
    cell.hit = true;

    // if cell contains ship
    if (cell.ship) {
      cell.ship.hit(); 
      // if ships is sunk
      if (cell.ship.isSunk()) return 'sunk';
    }
  }
}
