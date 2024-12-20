document.addEventListener("DOMContentLoaded", () => {
  // Card Data Array - with our card objects including pair, image, alt & words
  const cardArray = [
    {
      pair: 1,
      image: "assets/images/card-images/bread-en.png",
      alt: "image of a loaf of bread (English)",
      word: "bread",
    },
    {
      pair: 1,
      image: "assets/images/card-images/bread-tg.png",
      alt: "image of a loaf of bread (Tagalog: tinapay)",
      word: "tinapay",
    },
    {
      pair: 2,
      image: "assets/images/card-images/egg-en.png",
      alt: "image of an egg (English)",
      word: "egg",
    },
    {
      pair: 2,
      image: "assets/images/card-images/egg-tg.png",
      alt: "image of an egg (Tagalog: itlog)",
      word: "itlog",
    },
    {
      pair: 3,
      image: "assets/images/card-images/fish-en.png",
      alt: "image of a cooked fish (English)",
      word: "fish",
    },
    {
      pair: 3,
      image: "assets/images/card-images/fish-tg.png",
      alt: "image of a cooked fish (Tagalog: isda)",
      word: "isda",
    },
    {
      pair: 4,
      image: "assets/images/card-images/fruit-en.png",
      alt: "image of a bowl of fruit (English)",
      word: "fruit",
    },
    {
      pair: 4,
      image: "assets/images/card-images/fruit-tg.png",
      alt: "image of a bowl of fruit (Tagalog: prutas)",
      word: "prutas",
    },
  ];

  // Game initialisation, shuffle cards
  cardArray.sort(() => Math.random() - 0.5);

  // Global Variables
  const gridDisplay = document.querySelector(".grid"); // Where cards are 'stored'
  const resultDisplay = document.querySelector("#result");
  const timerDisplay = document.querySelector(".time-remaining");
  const gameInfoButton = document.getElementById("game-info-button"); // How to Play button
  const instructionsModal = document.querySelector(".instructions-modal");
  const closeButton = document.querySelector(".close-button");
  const resetButton = document.getElementById("reset-button");
  let cardsChosen = []; // Pushing selected cards into array
  let cardsChosenId = [];
  let cardsWon = [];
  let timeRemaining = 60;
  let countdownStarted = false;
  let countdownInterval;
  let isCheckingMatch = false;

  // Create an element for item in array
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("class", "card");
      card.setAttribute("src", "assets/images/card-images/card-reverse.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

  function startCountdown() {
    timerDisplay.textContent = timeRemaining;
    countdownInterval = setInterval(() => {
      timeRemaining--;
      timerDisplay.textContent = timeRemaining;
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        endGame(false);
      }
    }, 1000);
  }

  function flipCard() {
    if (cardsChosen.length >= 2 || isCheckingMatch) {
      return; // Prevent flipping if 2 cards chosen or match check in progress
    }

    if (!countdownStarted) {
      startCountdown();
      countdownStarted = true;
    }

    const cardId = this.getAttribute("data-id");

    if (!cardsChosenId.includes(cardId)) {
      cardsChosen.push(cardArray[cardId].pair);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardArray[cardId].image);

      if (cardsChosen.length === 2) {
        isCheckingMatch = true;
        setTimeout(checkMatch, 500); // Delay for flipping animation
      }
    }
  }

  function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    // Case 1: A match found
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute(
        "src", "assets/images/card-images/card-match.png"
      );
      cards[optionTwoId].setAttribute(
        "src", "assets/images/card-images/card-match.png"
      );
      // Remove event listeners to prevent further clicks on matched cards
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      // Push the matched pair to cardsWon
      cardsWon.push(cardsChosen);
    }
    // Case 2: No match
    else {
      // Flip both cards back to their reverse side after a short delay
      setTimeout(() => {
        cards[optionOneId].setAttribute(
          "src", "assets/images/card-images/card-reverse.png"
        );
        cards[optionTwoId].setAttribute(
          "src", "assets/images/card-images/card-reverse.png"
        );
        // Re-enable click event on both cards since they didn't match
        cards[optionOneId].addEventListener("click", flipCard);
        cards[optionTwoId].addEventListener("click", flipCard);
      }, 500); // Add delay for better user experience
    }

    // Update the score/result display
    resultDisplay.textContent = cardsWon.length;

    // Clear the arrays for the next turn
    cardsChosen = [];
    cardsChosenId = [];

    // Reset to enable further clicks
    isCheckingMatch = false;

    // Case 3: Game won (all matches found)
    if (cardsWon.length === cardArray.length / 2) {
      endGame(true); // All matches found => end game
    }
  }

  function endGame(hasWon) {
    clearInterval(countdownInterval); // Stop the countdown timer
    if (hasWon) {
      resultDisplay.textContent = "Congratulations! You've found them all!";
    } else {
      resultDisplay.textContent = "Game over! Time's up!";
      // Disable all cards
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => card.removeEventListener("click", flipCard));
    }
  }

  function resetGame() {
    // Clear all card states
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.setAttribute("src", "assets/images/card-images/card-reverse.png");
      card.addEventListener("click", flipCard);
      card.style.transform = "scale(1)"; // Ensure cards return to original scale
    });

    // Shuffle card array
    cardArray.sort(() => Math.random() - 0.5);
    // Clear the game state variables
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    resultDisplay.textContent = "0";
    timeRemaining = 60;
    timerDisplay.textContent = timeRemaining;
    countdownStarted = false;
    clearInterval(countdownInterval);
  }

  gameInfoButton.addEventListener("click", () => {
    instructionsModal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    instructionsModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === instructionsModal) {
      instructionsModal.style.display = "none";
    }
  });

  resetButton.addEventListener("click", resetGame);

  createBoard();
});
