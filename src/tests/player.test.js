import { HumanPlayer, ComputerPlayer } from "../classes/player";
import Ship from "../classes/ship";

describe('HumanPlayer class', () => { 
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
            expect(player.placeShip(ship,0,0)).toBeFalsy();
        })

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