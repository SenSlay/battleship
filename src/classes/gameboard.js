export default class Gameboard {
    #axisPlacement

    constructor() {
        this.#axisPlacement = 'x'
    }

    getAxisPlacement() {
        return this.#axisPlacement
    }

    switchAxis() {
        this.#axisPlacement = this.#axisPlacement === 'x' ? 'y' : 'x';
    }
}