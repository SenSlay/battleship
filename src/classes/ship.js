class Ship {
  #name;
  #length;
  #hits = 0;

  constructor(length, name) {
    this.#name = name;
    this.#length = length;
  }

  getName() {
    return this.#name;
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