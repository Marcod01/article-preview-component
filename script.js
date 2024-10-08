
const shareButton = document.querySelector('.card__share-button');
const shareButtonIcon = document.querySelector('.card__share-button-icon');
const footerContainer = document.querySelector('.card_footer-container');
const shareContainer = document.querySelector('.card__share-container');
const shareButtonDark = document.querySelector('.card__share-button--dark'); 


function toggleHidden() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        
        if (shareContainer.classList.contains('hidden')) {
            shareContainer.classList.remove('hidden');
            footerContainer.classList.add('hidden');
        } else {
            shareContainer.classList.add('hidden');
            footerContainer.classList.remove('hidden');
        }
    } else {
        
        if (shareContainer.classList.contains('hidden')) {
            shareContainer.classList.remove('hidden');
            shareButton.classList.add('card__share-button--dark');
            shareButtonIcon.classList.add('card__share-button-icon-dark');
            
            shareButtonDark.classList.add('hidden');
        } else {
            shareContainer.classList.add('hidden');
            shareButton.classList.remove('card__share-button--dark');
            shareButtonIcon.classList.remove('card__share-button-icon-dark');
            
            shareButtonDark.classList.add('hidden');
        }
    }
}


function resetStateOnResize() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        
        shareContainer.classList.add('hidden');
        footerContainer.classList.remove('hidden');
        shareButton.classList.remove('card__share-button--dark');
        shareButtonIcon.classList.remove('card__share-button-icon-dark');
        shareButtonDark.classList.remove('hidden'); 
    } else {
        
        shareContainer.classList.add('hidden');
        shareButton.classList.remove('card__share-button--dark');
        shareButtonIcon.classList.remove('card__share-button-icon-dark');
        shareButtonDark.classList.add('hidden'); 
    }
}


window.addEventListener('resize', resetStateOnResize);
