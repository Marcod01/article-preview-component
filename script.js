// Select relevant elements
const shareButton = document.querySelector('.card__share-button');
const shareButtonIcon = document.querySelector('.card__share-button-icon');
const footerContainer = document.querySelector('.card_footer-container');
const shareContainer = document.querySelector('.card__share-container');
const shareButtonDark = document.querySelector('.card__share-button--dark'); // Dark button in share container

// Function to toggle visibility
function toggleHidden() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Mobile: Toggle between hiding footer container and showing share container
        if (shareContainer.classList.contains('hidden')) {
            shareContainer.classList.remove('hidden');
            footerContainer.classList.add('hidden');
        } else {
            shareContainer.classList.add('hidden');
            footerContainer.classList.remove('hidden');
        }
    } else {
        // Desktop: Show the share container on top of the footer
        if (shareContainer.classList.contains('hidden')) {
            shareContainer.classList.remove('hidden');
            shareButton.classList.add('card__share-button--dark');
            shareButtonIcon.classList.add('card__share-button-icon-dark');
            // Hide the button inside share container
            shareButtonDark.classList.add('hidden');
        } else {
            shareContainer.classList.add('hidden');
            shareButton.classList.remove('card__share-button--dark');
            shareButtonIcon.classList.remove('card__share-button-icon-dark');
            // Ensure the button inside share container remains hidden
            shareButtonDark.classList.add('hidden');
        }
    }
}

// Reset the state when window resizes
function resetStateOnResize() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Ensure mobile reset
        shareContainer.classList.add('hidden');
        footerContainer.classList.remove('hidden');
        shareButton.classList.remove('card__share-button--dark');
        shareButtonIcon.classList.remove('card__share-button-icon-dark');
        shareButtonDark.classList.remove('hidden'); // Show dark button in mobile
    } else {
        // Ensure desktop reset
        shareContainer.classList.add('hidden');
        shareButton.classList.remove('card__share-button--dark');
        shareButtonIcon.classList.remove('card__share-button-icon-dark');
        shareButtonDark.classList.add('hidden'); // Hide dark button on desktop
    }
}

// Attach the resize event listener to reset state on window resize
window.addEventListener('resize', resetStateOnResize);
