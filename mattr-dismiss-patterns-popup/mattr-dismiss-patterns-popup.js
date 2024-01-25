/**
 * Attempt to click on the close button of the 'Choose a Pattern' popup.
 */
document.addEventListener('DOMContentLoaded', () => {
	const maxAttempts = 30;
	let attempts = 0;

	const closePopup = () => {
		const modalContainer = document.querySelector('.edit-post-start-page-options__modal .components-modal__header');

		if (modalContainer) {
			console.log(modalContainer);
			const closeButton = modalContainer.querySelector('button');
			console.log(closeButton);

			if (closeButton) {
				const clickEvent = new Event('click', { bubbles: true });
				closeButton.dispatchEvent(clickEvent);
			}
		}

		attempts++;

		if (attempts >= maxAttempts) {
			clearInterval(intervalId);
		}
	};
	
	const intervalId = setInterval(closePopup, 250);
});
