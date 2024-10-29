import { resetGame } from '../classes/game';
import loadShipPlacement from '../DOM/shipPlacement';
import { resetShipPlacement } from '../eventHandlers/shipPlacementHandlers';

// Start or reset the game
const playAgain = () => {
  resetGame();
  loadShipPlacement();
  resetShipPlacement();
};

const createWinnerDisplayCtn = (playerName) => {
  const heading = document.createElement('h1');
  heading.classList.add('winner-heading');
  heading.textContent = `${playerName} Won!`;

  const playAgainBtn = document.createElement('button');
  playAgainBtn.classList.add('play-again-btn');
  playAgainBtn.textContent = 'Play Again';
  playAgainBtn.addEventListener('click', playAgain);

  const winnerCtn = document.createElement('div');
  winnerCtn.classList.add('winner-ctn');

  winnerCtn.appendChild(heading);
  winnerCtn.appendChild(playAgainBtn);

  return winnerCtn;
};

// Create gameboard with ships highlighted
const highlightShips = (gameboard, gameboardBtns) => {
  gameboardBtns.forEach((btn) => {
    const x = parseInt(btn.dataset.x);
    const y = parseInt(btn.dataset.y);
    const cell = gameboard.getBoard()[y][x];

    if (cell.ship !== null) {
      const ship = cell.ship;
      const shipCells = gameboard.getShipCoordinates(ship);
      const shipIndex = shipCells.findIndex(([sx, sy]) => sx === x && sy === y);
      const shipAxis = ship.getAxis();

      // Determine class to apply based on position within the ship
      if (shipIndex === 0) {
        btn.classList.add(shipAxis === 'x' ? 'start-ship-x' : 'start-ship-y');
      } else if (shipIndex > 0 && shipIndex < shipCells.length - 1) {
        btn.classList.add(shipAxis === 'x' ? 'mid-ship-x' : 'mid-ship-y');
      } else {
        btn.classList.add(shipAxis === 'x' ? 'end-ship-x' : 'end-ship-y');
      }
    }
  });
};

export { createWinnerDisplayCtn, highlightShips };
