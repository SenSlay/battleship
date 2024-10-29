import { getGame } from '../classes/game';
import {
  handleAttack,
  initializeGameStartVariables,
} from '../eventHandlers/gameStartHandlers';
import { highlightShips } from '../utils/DOMUtils';

const loadGameStart = () => {
  initializeGameStartVariables();
  const mainCtn = document.querySelector('.main');

  // Clear main content
  mainCtn.innerHTML = '';

  // Create friendly span
  const friendlySpan = document.createElement('span');
  friendlySpan.classList.add('friendly-attack-status');
  friendlySpan.textContent = 'Attacking...';

  // Create friendly instructions heading el
  const friendlyHeading = document.createElement('h1');
  friendlyHeading.classList.add('instructions-heading', 'friendly-heading');
  friendlyHeading.textContent = 'Friendly: ';
  friendlyHeading.appendChild(friendlySpan);

  // Create friendly span
  const enemySpan = document.createElement('span');
  enemySpan.classList.add('enemy-attack-status');
  enemySpan.textContent = 'Attacking...';

  // Create enemy instructions heading el
  const enemyHeading = document.createElement('h1');
  enemyHeading.classList.add('instructions-heading', 'enemy-heading');
  enemyHeading.textContent = 'Enemy: ';
  enemyHeading.appendChild(enemySpan);

  // Create friendly gameboard el
  const friendlyGameboard = document.createElement('div');
  friendlyGameboard.classList.add('gameboard', 'friendly-board');

  // Create enemyGameboard el
  const enemyGameboard = document.createElement('div');
  enemyGameboard.classList.add('gameboard', 'enemy-board');
  enemyGameboard.addEventListener('click', handleAttack);

  // Append the buttons to gameboards
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // Create and append a button for friendlyGameboard
      const friendlyButton = document.createElement('button');
      friendlyButton.dataset.x = j;
      friendlyButton.dataset.y = i;
      friendlyGameboard.appendChild(friendlyButton);

      // Create and append a button for enemyGameboard
      const enemyButton = document.createElement('button');
      enemyButton.dataset.x = j;
      enemyButton.dataset.y = i;
      enemyGameboard.appendChild(enemyButton);
    }
  }

  const friendlyBoardLabel = document.createElement('h2');
  friendlyBoardLabel.classList.add('board-label', 'friendly-label');
  friendlyBoardLabel.textContent = 'Friendly Waters';

  const enemyBoardLabel = document.createElement('h2');
  enemyBoardLabel.classList.add('board-label', 'enemy-label');
  enemyBoardLabel.textContent = 'Enemy Waters';

  const friendlyCtn = document.createElement('div');
  friendlyCtn.classList.add('friendly-ctn');
  friendlyCtn.appendChild(friendlyHeading);
  friendlyCtn.appendChild(friendlyBoardLabel);
  friendlyCtn.appendChild(friendlyGameboard);

  const enemyCtn = document.createElement('div');
  enemyCtn.classList.add('enemy-ctn');
  enemyCtn.appendChild(enemyHeading);
  enemyCtn.appendChild(enemyBoardLabel);
  enemyCtn.appendChild(enemyGameboard);

  const gameboardsCtn = document.createElement('div');
  gameboardsCtn.classList.add('gameboards-ctn');
  gameboardsCtn.appendChild(friendlyCtn);
  gameboardsCtn.appendChild(enemyCtn);

  const gameStartCtn = document.createElement('div');
  gameStartCtn.classList.add('game-start-ctn');

  gameStartCtn.appendChild(gameboardsCtn);
  mainCtn.appendChild(gameStartCtn);

  // Highlight cells with ships
  const playerOneGameboard = getGame().getPlayers()[0].getGameboard();
  const friendlyBtns = document.querySelectorAll('.friendly-board button');
  highlightShips(playerOneGameboard, friendlyBtns);
  
  // // Wall hacks
  // const playerTwoGameboard = getGame().getPlayers()[1].getGameboard();
  // const enemyBtns = document.querySelectorAll('.enemy-board button');
  // highlightShips(playerTwoGameboard, enemyBtns)
};

export default loadGameStart;
