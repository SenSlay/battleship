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
});
