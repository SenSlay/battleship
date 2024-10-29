class Ship {
  #name;
  #length;
  #hits = 0;
  #axis;
  #position;

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

  setAxis(axis) {
    this.#axis = axis;
  }

  getAxis() {
    return this.#axis;
  }

  setPosition(coord) {
    this.#position = coord;
  }

  getPosition() {
    return this.#position;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    return this.#hits >= this.#length;
  }
}

export { Ship as default };
