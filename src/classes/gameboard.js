export default class Gameboard {
    #axisPlacement
    #board

    constructor() {
        this.#board = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => null));
        this.#axisPlacement = 'x'
    }

    getAxisPlacement() {
        return this.#axisPlacement
    }

    switchAxis() {
        this.#axisPlacement = this.#axisPlacement === 'x' ? 'y' : 'x';
    }

    getBoard() {
        return this.#board;
    }

    placeShip(ship, x, y) {
        if (this.#axisPlacement === 'x') {
            for (let i = x; i < x + ship.getLength(); i++) {
                this.#board[y][i] = ship;
            }
        } else {
            for (let i = y; i < y + ship.getLength(); i++) {
                this.#board[i][x] = ship;
            }
        }
    }
}