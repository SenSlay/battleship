import { getGame } from "../classes/game";
import { createWinnerDisplayCtn } from "../utils/DOMUtils";
import loadWinnerModal from "../DOM/winnerModal";

let game, friendly, friendlyGameboard, enemy, enemyGameboard, winner;

export const initializeGameStartVariables = () => {
	game = getGame();
	friendly = game.getPlayers()[0];
	friendlyGameboard = friendly.getGameboard();
	enemy = game.getPlayers()[1];
	enemyGameboard = enemy.getGameboard();
	winner = null;
}

const applyAttackEffect = (attackStatus, button, heading) => {
	if (attackStatus === 'miss') {
		heading.textContent = 'Missed attack!';
		button.classList.add('miss');
		return;
	} 
	
	button.classList.add('hit');
	if (attackStatus === 'hit') {
		heading.textContent = `Ship hit!`;
	} else if (attackStatus === 'sunk') {
		heading.textContent = `Ship sunk!`;
	} else if (attackStatus === 'all sunk') {
		heading.textContent = `All ships sunk!`;

		winner = game.checkWinner().getName();
		const winnerCtn = createWinnerDisplayCtn(winner);
		const mainCtn = document.querySelector('.main');
		mainCtn.prepend(winnerCtn)

		// Display modal
		loadWinnerModal(winner)
	}
}

const handleAttack = (event) => {
    const target = event.target;

		if (target.tagName === 'BUTTON' && winner === null) {
			const x = parseInt(target.dataset.x);
    		const y = parseInt(target.dataset.y);

			const friendlyAttack = friendly.attack(x, y, enemyGameboard)
			const friendlyButton = document.querySelector(`.enemy-board button[data-x="${x}"][data-y="${y}"]`);

			if (friendlyAttack !== false) {
				const enemyAttack = enemy.attack(friendlyGameboard)
				const enemyButton = document.querySelector(`.friendly-board button[data-x="${enemyAttack.x}"][data-y="${enemyAttack.y}"]`);

				const friendlySpan = document.querySelector('.friendly-attack-status');
				const enemySpan = document.querySelector('.enemy-attack-status');

				applyAttackEffect(friendlyAttack, friendlyButton, friendlySpan);
				applyAttackEffect(enemyAttack.result, enemyButton, enemySpan);
			}
		}
}

export { handleAttack };