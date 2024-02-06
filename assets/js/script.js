//card data, including pairNumber, image, alt & words
const cardData = [
    {
        'pair': 1,
        'image': 'assets/images/card-images/bread-en.png',
        'alt': 'image of a loaf of bread',
        'word': 'bread',
      },
      {
        'pair': 1,
        'image': 'assets/images/card-images/bread-tg.png',
        'alt': 'image of a loaf of bread; translates to tinapay in tagalog',
        'word': 'tinapay',
      },
      {
        'pair': 2,
        'image': 'assets/images/card-images/fruit-en.png',
        'alt': 'image of a bowl of fruit',
        'word': 'fruit',
      },
      {
        'pair': 2,
        'image': 'assets/images/card-images/fruit-tg.png',
        'alt': 'image of a bowl of fruit; translates to prutas in tagalog',
        'word': 'prutas',
      },
      {
        'pair': 3,
        'image': 'assets/images/card-images/fish-en.png',
        'alt': 'image of a cooked fish',
        'word': 'fish',
      },
      {
        'pair': 3,
        'image': 'assets/images/card-images/fish-tg.png',
        'alt': 'image of a cooked fish; translates to isda in tagalog',
        'word': 'isda',
      },
      {
        'pair': 4,
        'image': 'assets/images/card-images/egg-en.png',
        'alt': 'image of an egg',
        'word': 'egg',
      },
      {
        'pair': 4,
        'image': 'assets/images/card-images/egg-tg.png',
        'alt': 'image of an egg; translates to itlog in tagalog',
        'word': 'itlog',
      },
]

//variables
let currentCard = {
    pair: null,
    word: null
}
let cardHold = null;
let cardMatch = null;



//calling on all cards in the DOM
let cards = document.querySelectorAll('.card-box img');
console.log(cards);

for (let i =0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleCardClick);
}

//logic checker
function handleCardClick(event) {
  console.log(event.target.dataset.pair);
  //if we have flipped another card
  if (currentCard.pair === null) {
    console.log('firstCard');
    currentCard.pair = event.target.dataset.pair;
    currentCard.word = event.target.dataset.word;
  } else {
    console.log('checking against firstCard');
    //check if the current card pair is the same as the event targets pair & check if current card word is not equal to the event target word
        // console.log('match')
        // clear out current card
    // else
        // not a match console.log('not a match')
        // clear out current card & make sure everything gets flipped back
  }
}






/*//game initialization
function startGame() {
    shuffleCards()
}

let cardContainer = document.getElementById('card-container');*/



/**click card function

let handleCardClick = event => {
console.log(event);
}
//what do you want to happen when the card is clicked?
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', handleCardClick);
}*/
