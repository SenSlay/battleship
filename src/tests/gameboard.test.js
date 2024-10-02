import Gameboard from "../classes/gameboard"

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
})