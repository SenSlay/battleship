import { resetGame } from "../classes/game";
import loadShipPlacement from "../DOM/shipPlacement";
import { resetShipPlacement } from "../eventHandlers/shipPlacementHandlers";

// Start or reset the game
const playAgain = () => {
    resetGame();
    loadShipPlacement();
    resetShipPlacement();
};

const createWinnerDisplayCtn = (playerName) => {
    const heading = document.createElement('h1');
    heading.classList.add('winner-heading')
    heading.textContent = `${playerName} Won!`

    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('play-again-btn')
    playAgainBtn.textContent = 'Play Again';
    playAgainBtn.addEventListener('click', playAgain);

    const winnerCtn = document.createElement('div');
    winnerCtn.classList.add('winner-ctn');

    winnerCtn.appendChild(heading)
    winnerCtn.appendChild(playAgainBtn);

    return winnerCtn;
}

export { createWinnerDisplayCtn };