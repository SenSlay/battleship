export default class Gameboard {
  #axisPlacement;
  #board;

  constructor() {
    this.#board = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => null),
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
        this.#board[y][i] = ship;
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
        this.#board[i][x] = ship;
      }
    }

    return true;
  }
}
