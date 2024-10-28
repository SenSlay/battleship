import { getGame } from '../classes/game';
import loadGameStart from '../DOM/gameStart';
import { DEFAULT_BTN_COLOR, SHIP_COLOR } from '../utils/constants';

let game, playerOne, playerOneGameboard, ships;

export const initializeShipPlacementVariables = () => {
  game = getGame();
  playerOne = game.getPlayers()[0];
  playerOneGameboard = playerOne.getGameboard();
  ships = playerOne.getShips();
}

let shipIndex = 0;
let allShipsPlaced = false;

const disableConfirmBtn = () => {
  const confirmBtn = document.querySelector('.confirm-btn');
  if (confirmBtn) {
    confirmBtn.style.backgroundColor = 'lightgray';
    confirmBtn.style.cursor = 'not-allowed';
  }
}

const enableConfirmBtn = () => {
  const confirmBtn = document.querySelector('.confirm-btn');
  confirmBtn.style.backgroundColor = '#F0F0F0';
  confirmBtn.style.cursor = 'pointer';
}

const updateInstructionsHeading = () => {
  const heading = document.querySelector('.instructions-heading');
  if (shipIndex >= 4 || allShipsPlaced) {
    heading.textContent = 'Confirm Ship Placement';
    return;
  }
  heading.textContent = `Place your ${ships[shipIndex].getName()}:`;
}

const handleShipPlacement = (event) => {
  const target = event.target;

  // Check if the clicked element is a button
  if (target.tagName === 'BUTTON' && !allShipsPlaced) {
    const x = parseInt(target.dataset.x);
    const y = parseInt(target.dataset.y);
    let currentShip = ships[shipIndex];
    
    // Check if ship placement is valid
    if (!playerOneGameboard.isShipPlacementValid(currentShip, x, y)) {
      return;
    }

    // If more ships to be placed
    if (shipIndex < ships.length) {
      playerOne.placeShip(currentShip, x, y);
      shipIndex++;  
      updateInstructionsHeading();
    } 

    // If all ships have been placed
    if (shipIndex >= ships.length) {
      console.log('All ships placed');
      allShipsPlaced = true;
      enableConfirmBtn();
      return;
    }

    if (playerOneGameboard.getAxisPlacement() === 'x') {
      // If axis placement is x...
      
      for (let i = 0; i < currentShip.getLength(); i++) {
        console.log(`Placing ship at: (${x + i}, ${y})`);

        // Highlight where the ship has been placed
        const nextButton = document.querySelector(
          `button[data-x="${x + i}"][data-y="${y}"]`,
        );
        nextButton.style.backgroundColor = SHIP_COLOR;
      }
    } else {
      // Else if axis placement is y...

      for (let i = 0; i < currentShip.getLength(); i++) {
        console.log(`Placing ship at: (${x}, ${y + i})`);

        // Highlight where the ship has been placed
        const nextButton = document.querySelector(
          `button[data-x="${x}"][data-y="${y + i}"]`,
        );
        nextButton.style.backgroundColor = SHIP_COLOR;
      }
    }
  }
};

const toggleAxis = () => {
  const gameboard = game.getPlayers()[0].getGameboard();
  gameboard.switchAxis();

  const toggleAxisButton = document.querySelector('.toggle-axis');
  toggleAxisButton.textContent =
    toggleAxisButton.textContent === 'Toggle Axis: X'
      ? 'Toggle Axis: Y'
      : 'Toggle Axis: X';
};

const gameboardHoverEffect = () => {
  const gameboard = document.querySelector('.gameboard');

  gameboard.addEventListener('mouseover', (event) => {
    if (shipIndex === ships.length) return;
    const target = event.target;
    const x = parseInt(target.dataset.x);
    const y = parseInt(target.dataset.y);

    // If hovered is a button
    if (target.tagName === 'BUTTON') {
      // If cell is invalid or contains a ship
      if (!playerOneGameboard.isShipPlacementValid(ships[shipIndex], x, y)) {
        target.style.cursor = 'not-allowed';
        target.style.backgroundColor = 'red'
        return;
      }
      
      if (playerOneGameboard.getAxisPlacement() === 'x') {
        // If axis placement is x

        for (let i = 0; i < ships[shipIndex].getLength(); i++) {
          // Highlight where the ship can be placed
          const nextButton = document.querySelector(
            `button[data-x="${x + i}"][data-y="${y}"]`,
          );
          nextButton.style.backgroundColor = SHIP_COLOR;
        }
      } else {
        // Else if axis placement is y

        for (let i = 0; i < ships[shipIndex].getLength(); i++) {
          // Highlight where the ship can be placed
          const nextButton = document.querySelector(
            `button[data-x="${x}"][data-y="${y + i}"]`,
          );
          nextButton.style.backgroundColor = SHIP_COLOR;
        }
      }
    }
  })

  gameboard.addEventListener('mouseout', (event) => {
    if (shipIndex === ships.length) return;
    const target = event.target;
    const x = parseInt(target.dataset.x);
    const y = parseInt(target.dataset.y);
  
    // If leaving a button
    if (target.tagName === 'BUTTON') {
      if (!playerOneGameboard.isShipPlacementValid(ships[shipIndex], x, y)) {
        target.style.cursor = 'pointer';

        if (playerOneGameboard.getBoard()[y][x].ship !== null) {
          target.style.backgroundColor = SHIP_COLOR;
        } else {
          target.style.backgroundColor = DEFAULT_BTN_COLOR
        }
        return;
      }
     
      if (playerOneGameboard.getAxisPlacement() === 'x') {
        // If axis placement is x
        for (let i = 0; i < ships[shipIndex].getLength(); i++) {
          const nextButton = document.querySelector(
            `button[data-x="${x + i}"][data-y="${y}"]`
          );
          if (nextButton) {
             // Reset to default
            nextButton.style.backgroundColor = DEFAULT_BTN_COLOR;
          }
        }
      } else {
        // Else if axis placement is y
        for (let i = 0; i < ships[shipIndex].getLength(); i++) {
          const nextButton = document.querySelector(
            `button[data-x="${x}"][data-y="${y + i}"]`
          );
          if (nextButton) {
            // Reset to default
            nextButton.style.backgroundColor = DEFAULT_BTN_COLOR;
          }
        }
      }
    }
  });
};

const resetShipPlacement = () => {
  playerOneGameboard.clearShips();
  shipIndex = 0;
  allShipsPlaced = false;
  disableConfirmBtn();
  updateInstructionsHeading();

  // Set gameboard UI back to default state 
  const gameboardBtns = document.querySelectorAll('.gameboard button');
  gameboardBtns.forEach(btn => {
    btn.style.backgroundColor = DEFAULT_BTN_COLOR;
  })
}

const controlHandlers = () => {
  const controlCtn = document.querySelector('.controls-ctn');

  controlCtn.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.reset-btn')) {
      resetShipPlacement();
    } else if (target.closest('.randomize-btn')) {
      resetShipPlacement();
      playerOne.placeAllShips();
      allShipsPlaced = true;
      enableConfirmBtn();
      updateInstructionsHeading();
      
      const gameboardBtns = document.querySelectorAll('.gameboard button');
      gameboardBtns.forEach(btn => {
        const x = parseInt(btn.dataset.x);
        const y = parseInt(btn.dataset.y);
        
        if (playerOneGameboard.getBoard()[y][x].ship !== null) {
          btn.style.backgroundColor = SHIP_COLOR;
        }
      })
      shipIndex = 5;
    }
    else if (target.closest('.confirm-btn')) {
      if (allShipsPlaced) {
        loadGameStart();
      }
    }
  })
}

export { handleShipPlacement, toggleAxis, gameboardHoverEffect, controlHandlers, disableConfirmBtn, updateInstructionsHeading, resetShipPlacement };
