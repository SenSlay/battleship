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

export { Ship as default };