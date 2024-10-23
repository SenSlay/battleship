import { game } from '../classes/game';

const DEFAULT_BTN_COLOR = 'rgb(218, 208, 208)';
const SHIP_COLOR = 'lightblue';

const playerOne = game.getPlayers()[0];
const playerOneGameboard = playerOne.getGameboard();
const ships = playerOne.getShips();
let shipIndex = 0;
let currentShip = ships[shipIndex]

const handleShipPlacement = (event) => {
  const target = event.target;

  // Check if the clicked element is a button
  if (target.tagName === 'BUTTON') {
    const x = parseInt(target.dataset.x);
    const y = parseInt(target.dataset.y);
    currentShip = ships[shipIndex];
    
    // If all ships have been placed
    if (shipIndex >= ships.length) {
      console.log('All ships placed');
      return;
    }

    // Check if ship placement is valid
    if (!playerOneGameboard.isShipPlacementValid(currentShip, x, y)) {
      return;
    }

    // Place ship in player gameboard
    console.log(x, y)
    playerOne.placeShip(currentShip, x, y);

    if (playerOneGameboard.getAxisPlacement() === 'x') {
      // If axis placement is x...
      console.log(currentShip);

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
      console.log(currentShip);

      for (let i = 0; i < currentShip.getLength(); i++) {
        console.log(`Placing ship at: (${x}, ${y + i})`);

        // Highlight where the ship has been placed
        const nextButton = document.querySelector(
          `button[data-x="${x}"][data-y="${y + i}"]`,
        );
        nextButton.style.backgroundColor = SHIP_COLOR;
      }
    }

    // If placement is successful, move to the next ship
    shipIndex++;
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
    const target = event.target;
    const x = parseInt(target.dataset.x);
    const y = parseInt(target.dataset.y);

    // If hovered is a button
    if (target.tagName === 'BUTTON') {
      console.log('hovering')

      if (!playerOneGameboard.isShipPlacementValid(ships[shipIndex], x, y) || playerOneGameboard.getBoard()[y][x].ship !== null) {
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
          nextButton.style.backgroundColor = 'lightblue';
        }
      } else {
        // Else if axis placement is y

        for (let i = 0; i < ships[shipIndex].getLength(); i++) {
          // Highlight where the ship can be placed
          const nextButton = document.querySelector(
            `button[data-x="${x}"][data-y="${y + i}"]`,
          );
          nextButton.style.backgroundColor = 'lightblue';
        }
      }
    }
  })

  gameboard.addEventListener('mouseout', (event) => {
    const target = event.target;
    const x = parseInt(target.dataset.x);
    const y = parseInt(target.dataset.y);
    console.log(playerOneGameboard.getAxisPlacement());

    console.log(playerOneGameboard.getBoard()[x][y])
  
    // If leaving a button
    if (target.tagName === 'BUTTON') {
      console.log('leaving');
  
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

export { handleShipPlacement, toggleAxis, gameboardHoverEffect };
