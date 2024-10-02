import Gameboard from "../classes/gameboard"
import { ships } from '../classes/ship'

describe('Gameboard class', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = new Gameboard(); // Initialize new Gameboard for each test
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
    // test placeShip for x axis
    test('placeShip places the ship horizontally on the board correctly', () => {
      const x = 1;
      const y = 0;
      const destroyer = ships['destroyer'];
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
      const destroyer = ships['destroyer'];
      gameboard.placeShip(destroyer, x, y);
      const destroyerLength = destroyer.getLength();
      
      for (let i = y; i < y + destroyerLength; i++) {
        expect(gameboard.getBoard()[i][x]).toBe(destroyer); 
      }
    });
  })
})