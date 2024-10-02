import Gameboard from '../classes/gameboard';
import { ships } from '../classes/ship';

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
      destroyer = ships['destroyer'];
    });

    // test placeShip for x axis
    test('placeShip places the ship horizontally on the board correctly', () => {
      const x = 1;
      const y = 0;
      gameboard.placeShip(destroyer, x, y);
      const destroyerLength = destroyer.getLength();

      for (let i = x; i < x + destroyerLength; i++) {
        expect(gameboard.getBoard()[y][i]).toBe(destroyer);
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
        expect(gameboard.getBoard()[i][x]).toBe(destroyer);
      }
    });

    test('placeShip returns false when ship goes out of bounds', () => {
      // test for out of bounds horizontally
      expect(gameboard.placeShip(destroyer, 8, 1)).toBeFalsy();

      // test for out of bounds vertically
      gameboard.switchAxis();
      expect(gameboard.placeShip(destroyer, 0, 9)).toBeFalsy();
    });

    // Test successful placement at the last valid position
    test('placeShip places ship correctly at last valid position', () => {
      expect(gameboard.placeShip(destroyer, 7, 0)).toBeTruthy();
      for (let i = 7; i < 10; i++) {
        expect(gameboard.getBoard()[0][i]).toBe(destroyer);
      }
    });
  });
});
