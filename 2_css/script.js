function checkFixedVisibility() {
    const container = document.querySelector('.positioning');
    const fixedElement = document.querySelector('.fixed');

    const containerRect = container.getBoundingClientRect();
    const fixedRect = fixedElement.getBoundingClientRect();

    if (
        fixedRect.right > containerRect.right ||
        fixedRect.left < containerRect.left ||
        fixedRect.bottom > containerRect.bottom ||
        fixedRect.top < containerRect.top
    ) {
        fixedElement.classList.add('hidden');
    } else {
        fixedElement.classList.remove('hidden');
    }
}

window.addEventListener('scroll', checkFixedVisibility);
window.addEventListener('resize', checkFixedVisibility);