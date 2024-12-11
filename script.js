const flashcard = document.getElementById('flashcard');
const flipButton = document.getElementById('flip');

flipButton.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
});