// Flashcards data
const flashcardsData = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
  ];
  
  const flashcardsContainer = document.getElementById("flashcards-container");
  const prevButton = document.getElementById("prev");
  const flipButton = document.getElementById("flip");
  const nextButton = document.getElementById("next");
  
  let currentCardIndex = 0;
  let isFlipped = false;
  
  // Function to create and display all flashcards
  function createFlashcards() {
    flashcardsData.forEach((data, index) => {
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard");
      if (index === 0) flashcard.style.display = "block"; // Show the first card
      else flashcard.style.display = "none"; // Hide other cards
  
      // Front side
      const front = document.createElement("div");
      front.classList.add("front");
      front.textContent = data.question;
  
      // Back side
      const back = document.createElement("div");
      back.classList.add("back");
      back.textContent = data.answer;
  
      flashcard.appendChild(front);
      flashcard.appendChild(back);
      flashcardsContainer.appendChild(flashcard);
    });
  }
  
  // Function to update the displayed card
  function updateCardDisplay() {
    const flashcards = document.querySelectorAll(".flashcard");
    flashcards.forEach((card, index) => {
      card.style.display = index === currentCardIndex ? "block" : "none"; // Show only the current card
      card.classList.remove("flipped"); // Reset flip state
    });
    isFlipped = false; // Reset flip tracking
  }
  
  // Event listeners
  prevButton.addEventListener("click", () => {
    currentCardIndex =
      currentCardIndex === 0 ? flashcardsData.length - 1 : currentCardIndex - 1;
    updateCardDisplay();
  });
  
  flipButton.addEventListener("click", () => {
    const currentCard = document.querySelectorAll(".flashcard")[currentCardIndex];
    currentCard.classList.toggle("flipped");
    isFlipped = !isFlipped;
  });
  
  nextButton.addEventListener("click", () => {
    currentCardIndex =
      currentCardIndex === flashcardsData.length - 1 ? 0 : currentCardIndex + 1;
    updateCardDisplay();
  });
  
  // Initialize
  createFlashcards();
  updateCardDisplay();
  