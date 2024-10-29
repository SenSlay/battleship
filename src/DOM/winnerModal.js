import { createWinnerDisplayCtn } from "../utils/DOMUtils";

const modalExit = (event) => {
    // Close the modal only if the click was directly on the modal background
    if (event.target.classList.contains('modal')) {
        event.target.remove();
    }
};

const loadWinnerModal = (winner) => {
    const winnerCtn = createWinnerDisplayCtn(winner);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.appendChild(winnerCtn);

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.addEventListener('click', modalExit);
    modal.appendChild(modalContent);

    const mainCtn = document.querySelector('.main');
    mainCtn.appendChild(modal);
}

export default loadWinnerModal;