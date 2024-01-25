/**
 * Attempt to click on the close button of the 'Choose a Pattern' popup.
 */
document.addEventListener('DOMContentLoaded', () => {
	const modalContainer = document.querySelector('.edit-post-start-page-options__modal .components-modal__header');
	const closeButton = modalContainer?.querySelector('button');

	if (modalContainer && closeButton) {
		const clickEvent = new Event('click', { bubbles: true });
		closeButton.dispatchEvent(clickEvent);
	}
});
