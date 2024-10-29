import Ship from '../classes/ship';

describe('Ship class', () => {
  let ship;

  // Reset the ship before each test
  beforeEach(() => {
    ship = new Ship(3);
  });

  test('ship initialized with correct length', () => {
    expect(ship.getLength()).toBe(3);
  });

  test('hits starts at 0', () => {
    expect(ship.getHits()).toBe(0);
  });

  test('hit adds 1 to hits', () => {
    ship.hit();
    expect(ship.getHits()).toBe(1);
  });

  test('isSunk returns true when hits matches length', () => {
    // Initially false
    expect(ship.isSunk()).toBeFalsy();

    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});
