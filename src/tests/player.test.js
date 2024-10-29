import { HumanPlayer, ComputerPlayer } from '../classes/player';
import Ship from '../classes/ship';

describe('HumanPlayer subclass', () => {
  let player;

  beforeEach(() => {
    player = new HumanPlayer('Player one');
  });

  describe('placeShip method', () => {
    let ship;

    beforeEach(() => {
      // Every test using ship of length 2
      ship = new Ship(2);
    });

    test('placeShip places ship on the gameboard', () => {
      player.placeShip(ship, 0, 0);
      expect(player.getGameboard().getBoard()[0][0].ship).toBe(ship);
    });

    test('placeShip returns false for occupied space', () => {
      player.placeShip(ship, 0, 0);
      expect(player.placeShip(ship, 0, 0)).toBeFalsy();
    });

    test('placeShip returns false for out of bounds placement', () => {
      // Out-of-bounds placement should return false
      expect(player.placeShip(ship, -1, 0)).toBeFalsy();
      expect(player.placeShip(ship, 10, 10)).toBeFalsy();
    });
  });

  describe('attackShip', () => {
    let enemy;
    let enemyGameboard;

    beforeEach(() => {
      // Create an enemy to attack
      enemy = new HumanPlayer('Enemy');
      enemyGameboard = enemy.getGameboard();
    });

    test('an attack on a ship', () => {
      const ship = new Ship(2);
      enemy.placeShip(ship, 0, 0);

      expect(player.attack(0, 0, enemyGameboard)).toBe('hit');
      expect(ship.getHits()).toBe(1);
      expect(enemyGameboard.getBoard()[0][0].hit).toBeTruthy();
    });

    test('a missed attack returns miss', () => {
      expect(player.attack(0, 0, enemyGameboard)).toBe('miss');
    });

    test('an invalid attack returns false', () => {
      player.attack(0, 0, enemyGameboard);
      // attacking an already hit space
      expect(player.attack(0, 0, enemyGameboard)).toBeFalsy();

      // out of bounds
      expect(player.attack(-1, 0, enemyGameboard)).toBeFalsy();
      expect(player.attack(0, 11, enemyGameboard)).toBeFalsy();
    });

    test('attack returns all sunk when all ships are sunk', () => {
      const ship = new Ship(2);
      enemy.placeShip(ship, 0, 0);
      player.attack(0, 0, enemyGameboard);
      expect(player.attack(1, 0, enemyGameboard)).toBe('all sunk');
    });
  });
});

describe('ComputerPlayer subclass', () => {
  let computer;

  beforeEach(() => {
    computer = new ComputerPlayer();
  });

  describe('placeAllShips method', () => {
    test('placeAllShips places all ships randomly on the board', () => {
      computer.placeAllShips();
      const board = computer.getGameboard().getBoard();
      const ships = computer.getShips();

      // Track placed ships by checking each ship's presence on the board
      let totalShipsPlaced = 0;

      // Iterate over each cell in the board
      for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
          // Check if there's a ship in the current cell
          if (board[row][col].ship !== null) {
            totalShipsPlaced++;
          }
        }
      }

      // Calculates the total number of cells all the ships should occupy
      const totalExpectedLength = ships.reduce(
        (sum, ship) => sum + ship.getLength(),
        0,
      );
      // Ensure the correct number of ships were placed
      expect(totalShipsPlaced).toBe(totalExpectedLength);
    });
  });

  describe('attack method', () => {
    test('Computer makes a random attack on the board', () => {
      const computer = new ComputerPlayer();
      const enemyGameboard = new HumanPlayer().getGameboard();

      const attackResult = computer.attack(enemyGameboard);

      expect(attackResult).toBeDefined();
    });

    test('Computer does not attack the same spot twice', () => {
      const computer = new ComputerPlayer();
      const enemyGameboard = new HumanPlayer().getGameboard();
      const availableMoves = computer.getAvailableMoves();

      const movesBefore = availableMoves.length;
      computer.attack(enemyGameboard);
      const movesAfter = availableMoves.length;

      // Check if the available moves reduced
      expect(movesAfter).toBe(movesBefore - 1);
    });

    test('Computer attack registers hits and misses correctly', () => {
      const computer = new ComputerPlayer();
      const enemyGameboard = new HumanPlayer().getGameboard();
      const ship = new Ship(2);

      enemyGameboard.placeShip(ship, 0, 0);

      let attackResult = computer.attack(enemyGameboard);
      expect(['hit', 'miss']).toContain(attackResult);

      if (attackResult === 'hit') {
        expect(enemyGameboard.getBoard()[0][0].ship).toBe(ship);
        expect(enemyGameboard.getBoard()[0][0].hit).toBe(true);
      }

      attackResult = computer.attack(enemyGameboard);
      expect(['hit', 'miss']).toContain(attackResult);
    });
  });
});
