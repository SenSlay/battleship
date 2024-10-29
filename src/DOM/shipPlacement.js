import {
  initializeShipPlacementVariables,
  handleShipPlacement,
  toggleAxis,
  gameboardHoverEffect,
  controlHandlers,
  disableConfirmBtn,
  updateInstructionsHeading,
} from '../eventHandlers/shipPlacementHandlers';

// Load ship placement grid
const loadShipPlacement = () => {
  initializeShipPlacementVariables();
  const mainCtn = document.querySelector('.main');

  // Clear main content
  mainCtn.innerHTML = '';

  // Create instructions heading el
  const instructionsHeading = document.createElement('h1');
  instructionsHeading.classList.add('instructions-heading');

  // Create switch axis button
  const toggleAxisBtn = document.createElement('button');
  toggleAxisBtn.classList.add('toggle-axis');
  toggleAxisBtn.textContent = 'Toggle Axis: X';
  toggleAxisBtn.addEventListener('click', toggleAxis);

  // Create ship placement gameboard el
  const gameboard = document.createElement('div');
  gameboard.classList.add('gameboard');

  // Attach the event listener to the gameboard container
  gameboard.addEventListener('click', handleShipPlacement);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const button = document.createElement('button');
      button.dataset.x = j;
      button.dataset.y = i;

      gameboard.appendChild(button);
    }
  }

  // Reset btn
  const resetBtn = document.createElement('button');
  resetBtn.classList.add('reset-btn');
  resetBtn.textContent = 'Reset';

  // Randomize btn
  const randomizeBtn = document.createElement('button');
  randomizeBtn.classList.add('randomize-btn');
  randomizeBtn.textContent = 'Randomize';

  // Confirm btn
  const confirmBtn = document.createElement('button');
  confirmBtn.classList.add('confirm-btn');
  confirmBtn.textContent = 'Confirm';

  // Control btns container
  const controlsCtn = document.createElement('div');
  controlsCtn.classList.add('controls-ctn');
  controlsCtn.appendChild(resetBtn);
  controlsCtn.appendChild(randomizeBtn);
  controlsCtn.appendChild(confirmBtn);

  const shipPlacementCtn = document.createElement('div');
  shipPlacementCtn.classList.add('ship-placement-ctn');

  // Append ship placement content to main container
  shipPlacementCtn.appendChild(instructionsHeading);
  shipPlacementCtn.appendChild(toggleAxisBtn);
  shipPlacementCtn.appendChild(gameboard);
  shipPlacementCtn.appendChild(controlsCtn);

  mainCtn.appendChild(shipPlacementCtn);
  gameboardHoverEffect();
  controlHandlers();
  disableConfirmBtn();
  updateInstructionsHeading();
};

export default loadShipPlacement;
