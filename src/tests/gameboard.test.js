import Gameboard from '../classes/gameboard';
import Ship from '../classes/ship';

describe('Gameboard class', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test('switchAxis switches AxisPlacement correctly', () => {
    // initial axis should be x
    expect(gameboard.getAxisPlacement()).toBe('x');

    // switch axis to y
    gameboard.switchAxis();
    expect(gameboard.getAxisPlacement()).toBe('y');

    // switch axis back to x
    gameboard.switchAxis();
    expect(gameboard.getAxisPlacement()).toBe('x');
  });

  describe('placeShip method', () => {
    let destroyer;

    // Use destroyer ship (length: 3) for every test
    beforeEach(() => {
      destroyer = new Ship(3);
    });

    // test placeShip for x axis
    test('placeShip places the ship horizontally on the board correctly', () => {
      const x = 1;
      const y = 0;
      gameboard.placeShip(destroyer, x, y);
      const destroyerLength = destroyer.getLength();

      for (let i = x; i < x + destroyerLength; i++) {
        expect(gameboard.getBoard()[y][i].ship).toBe(destroyer);
      }
    });

    // test placeShip for y axis
    test('placeShip places the ship vertically on the board correctly', () => {
      // switch to y axis
      gameboard.switchAxis();

      const x = 1;
      const y = 1;
      gameboard.placeShip(destroyer, x, y);
      const destroyerLength = destroyer.getLength();

      for (let i = y; i < y + destroyerLength; i++) {
        expect(gameboard.getBoard()[i][x].ship).toBe(destroyer);
      }
    });

    // test for out of bounds
    test('placeShip returns false when ship goes out of bounds', () => {
      // test for out of bounds horizontally
      expect(gameboard.placeShip(destroyer, 8, 1)).toBeFalsy();

      // test for out of bounds vertically
      gameboard.switchAxis();
      expect(gameboard.placeShip(destroyer, 0, 9)).toBeFalsy();
    });

    // test successful placement at the last valid position
    test('placeShip places ship correctly at last valid position', () => {
      expect(gameboard.placeShip(destroyer, 7, 0)).toBeTruthy();
      for (let i = 7; i < 10; i++) {
        expect(gameboard.getBoard()[0][i].ship).toBe(destroyer);
      }
    });

    // teest for occupied spcaes
    test('placeShip is falsy when placing ship in occupied spaces', () => {
      gameboard.placeShip(destroyer, 5, 5);

      expect(gameboard.placeShip(destroyer, 2, 5)).toBeTruthy();
      expect(gameboard.placeShip(destroyer, 3, 5)).toBeFalsy();
      expect(gameboard.placeShip(destroyer, 4, 5)).toBeFalsy();
      gameboard.switchAxis();
      expect(gameboard.placeShip(destroyer, 5, 4)).toBeFalsy();
    });
  });

  describe('receiveAttack method', () => {
    test('receiveAttack records an attack on the board', () => {
      gameboard.receiveAttack(0, 0);

      expect(gameboard.getBoard()[0][0].hit).toBeTruthy();
    });

    test('receiveAttack triggers hit on the ship if within the cell', () => {
      gameboard.placeShip(new Ship(2), 2, 2);

      gameboard.receiveAttack(2, 2);

      expect(gameboard.getBoard()[2][2].ship.getHits()).toBe(1);
      expect(gameboard.receiveAttack(2, 2)).toBeFalsy();
    });

    test('receiveAttack returns false if the attack is on an already hit space', () => {
      gameboard.receiveAttack(0, 0);

      expect(gameboard.receiveAttack(0, 0)).toBeFalsy();
    });

    test('receiveAttack returns false if the attack is out-of-bounds', () => {
      expect(gameboard.receiveAttack(-1, 0)).toBeFalsy();
      expect(gameboard.receiveAttack(10, 10)).toBeFalsy();
    });

    test('receiveAttack returns "sunk" if a ship has been sunk', () => {
      const ship = new Ship(2);
      const ship2 = new Ship(2);
      gameboard.placeShip(ship, 2, 2);
      gameboard.placeShip(ship2, 2,3);
      
      gameboard.receiveAttack(2, 2);
      expect(gameboard.receiveAttack(3, 2)).toBe('sunk');
      
      expect(ship.isSunk()).toBeTruthy();
    });

    test('receiveAttack returns "all sunk" when all placed ships are sunk', () => {
      const ship = new Ship(2);
      const ship2 = new Ship(2);
      gameboard.placeShip(ship, 2, 2);
      gameboard.placeShip(ship2, 2,3);

      gameboard.receiveAttack(2, 2);
      expect(gameboard.receiveAttack(3, 2)).toBe('sunk');
      gameboard.receiveAttack(2, 3);
      expect(gameboard.receiveAttack(3, 3)).toBe('all sunk');
      expect(gameboard.areAllShipsSunk()).toBeTruthy();
    });
  });
});
