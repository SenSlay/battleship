class Ship {
  #length;
  #hits = 0;

  constructor(length) {
    this.#length = length;
  }

  getLength() {
    return this.#length;
  }

  getHits() {
    return this.#hits;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    return this.#hits >= this.#length;
  }
}

const ships = {
    'carrier': new Ship(5),
    'battleship': new Ship(4),
    'destroyer': new Ship(3),
    'submarine': new Ship(3),
    'patrol boat': new Ship(2)
}

export { Ship as default, ships };