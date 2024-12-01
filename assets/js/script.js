document.addEventListener('DOMContentLoaded', () => {
  // Card Data Array - with our card objects including pair, image, alt & words
  const cardArray = [
    {
      'pair': 1,
      'image': 'assets/images/card-images/bread-en.png',
      'alt': 'image of a loaf of bread (English)',
      'word': 'bread'
    },
    {
      'pair': 1,
      'image': 'assets/images/card-images/bread-tg.png',
      'alt': 'image of a loaf of bread (Tagalog: tinapay)',
      'word': 'tinapay'
    },
    {
      'pair': 2,
      'image': 'assets/images/card-images/egg-en.png',
      'alt': 'image of an egg (English)',
      'word': 'egg'
    },
    {
      'pair': 2,
      'image': 'assets/images/card-images/egg-tg.png',
      'alt': 'image of an egg (Tagalog: itlog)',
      'word': 'itlog'
    },
    {
      'pair': 3,
      'image': 'assets/images/card-images/fish-en.png',
      'alt': 'image of a cooked fish (English)',
      'word': 'fish'
    },
    {
      'pair': 3,
      'image': 'assets/images/card-images/fish-tg.png',
      'alt': 'image of a cooked fish; (Tagalog: isda)',
      'word': 'isda'
    },
    {
      'pair': 4,
      'image': 'assets/images/card-images/fruit-en.png',
      'alt': 'image of a bowl of fruit (English)',
      'word': 'fruit'
    },
    {
      'pair': 4,
      'image': 'assets/images/card-images/fruit-tg.png',
      'alt': 'image of a bowl of fruit; "(Tagalog: prutas)',
      'word': 'prutas'
    },
  ]

  // Game initialisation, shuffle cards
  cardArray.sort(() => Math.random() - 0.5);

  // Global Variables
  // Where cards are 'stored' 
  const gridDisplay = document.querySelector('.grid');  /* Where cards are 'stored' */
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = []; /* Pushing selected cards into array */
  let cardsChosenId = [];
  let cardsWon = [];
 

  // Create an element for item in array
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('class', 'card');
      card.setAttribute('src', 'assets/images/card-images/card-reverse.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      gridDisplay.appendChild(card);
    }
  }


  function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
  
    // Case 1: A match found
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'assets/images/card-images/card-match.png');
      cards[optionTwoId].setAttribute('src', 'assets/images/card-images/card-match.png');
      // Remove event listeners to prevent further clicks on matched cards
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      // Push the matched pair to cardsWon
      cardsWon.push(cardsChosen);
    } 
    // Case 2: No match
    else {
      // Flip both cards back to their reverse side after a short delay
      setTimeout(() => {
        cards[optionOneId].setAttribute('src', 'assets/images/card-images/card-reverse.png');
        cards[optionTwoId].setAttribute('src', 'assets/images/card-images/card-reverse.png');
        // Re-enable click event on both cards since they didn't match
        cards[optionOneId].addEventListener('click', flipCard);
        cards[optionTwoId].addEventListener('click', flipCard);
        alert("Sorry, try again!");
      }, 500); // Add delay for better user experience
    }
  
    // Update the score/result display
    resultDisplay.textContent = cardsWon.length;
  
    // Clear the arrays for the next turn
    cardsChosen = [];
    cardsChosenId = [];
  
    // Case 3: Game won (all matches found)
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You've found them all!";
    }
  }


  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].pair);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].image);
    
    // Remove the event listener for the card that's clicked
    this.removeEventListener('click', flipCard);
    
    if (cardsChosen.length === 2) {
      setTimeout(checkMatch, 500); // Delay to allow flipping animation
    }
  }
  
  
  createBoard();

})