document.addEventListener('DOMContentLoaded', () => {
  // Card Data Array - with our card objects including pair, image, alt & words
  const cardArray = [
    {
      'pair': 1,
      'image': 'assets/images/card-images/bread-en.png',
      'alt': 'image of a loaf of bread; "Bread" translates to "Tinapay" in tagalog',
      'word': 'bread'
    },
    {
      'pair': 1,
      'image': 'assets/images/card-images/bread-tg.png',
      'alt': 'image of a loaf of bread; "Tinapay" translates to "Bread" in english',
      'word': 'tinapay'
    },
    {
      'pair': 2,
      'image': 'assets/images/card-images/egg-en.png',
      'alt': 'image of an egg; "Egg" translates to "Itlog" in tagalog',
      'word': 'egg'
    },
    {
      'pair': 2,
      'image': 'assets/images/card-images/egg-tg.png',
      'alt': 'image of an egg; "Itlog" translates to "Egg" in english',
      'word': 'itlog'
    },
    {
      'pair': 3,
      'image': 'assets/images/card-images/fish-en.png',
      'alt': 'image of a cooked fish; "Fish" translates to "Isda" in tagalog',
      'word': 'fish'
    },
    {
      'pair': 3,
      'image': 'assets/images/card-images/fish-tg.png',
      'alt': 'image of a cooked fish; "Isda" translates to "Fish" in english',
      'word': 'isda'
    },
    {
      'pair': 4,
      'image': 'assets/images/card-images/fruit-en.png',
      'alt': 'image of a bowl of fruit; "Fruit" translates to "Prutas" in tagalog',
      'word': 'fruit'
    },
    {
      'pair': 4,
      'image': 'assets/images/card-images/fruit-tg.png',
      'alt': 'image of a bowl of fruit; "Prutas" translates to "fruit" in english',
      'word': 'prutas'
    },
  ]

  // Game initialisation, shuffle cards
  cardArray.sort(() => Math.random() - 0.5);

  // Where cards are 'stored'
  const gridDisplay = document.querySelector('.grid');
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

  createBoard();

  function checkMatch() {
    /* Look for all cards on grid via img tag */
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    console.log(cards);

    if (optionOneId == optionTwoId) {
      console.log("Check for match");
      alert("You have clicked the same image!")
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'assets/images/card-images/card-match.png');
      cards[optionTwoId].setAttribute('src', 'assets/images/card-images/card-match.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'assets/images/card-images/card-reverse.png');
      cards[optionTwoId].setAttribute('src', 'assets/images/card-images/card-reverse.png');
      alert("Sorry try again!");
    }
    /* Can also use innerHTML instead of textContent */
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];

    /* Check for if match function */

    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = "Congratulations you found them all!"
    }
  }


  function flipCard() {
    /* This --> allowing us to interact with the element we click */
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].pair);
    cardsChosenId.push(cardId);

    console.log(cardsChosen);
    console.log(cardsChosenId);

    this.setAttribute('src', cardArray[cardId].image);
    if (cardsChosen.length === 2) {
      setTimeout( checkMatch, 500)
    }
  }
  
})