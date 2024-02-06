//card data, including pairNumber, image, alt & words
const cardData = [
    {
        'pairNumber': 1,
        'image': 'assets/images/card-images/bread-en.png',
        'alt': 'image of a loaf of bread',
        'words': 'bread',
      },
      {
        'pairNumber': 1,
        'image': 'assets/images/card-images/bread-tg.png',
        'alt': 'image of a loaf of bread; translates to tinapay in tagalog',
        'words': 'tinapay',
      },
      {
        'pairNumber': 2,
        'image': 'assets/images/card-images/fruit-en.png',
        'alt': 'image of a bowl of fruit',
        'words': 'fruit',
      },
      {
        'pairNumber': 2,
        'image': 'assets/images/card-images/fruit-tg.png',
        'alt': 'image of a bowl of fruit; translates to prutas in tagalog',
        'words': 'prutas',
      },
      {
        'pairNumber': 3,
        'image': 'assets/images/card-images/fish-en.png',
        'alt': 'image of a cooked fish',
        'words': 'fish',
      },
      {
        'pairNumber': 3,
        'image': 'assets/images/card-images/fish-tg.png',
        'alt': 'image of a cooked fish; translates to isda in tagalog',
        'words': 'isda',
      },
      {
        'pairNumber': 4,
        'image': 'assets/images/card-images/egg-en.png',
        'alt': 'image of an egg',
        'words': 'egg',
      },
      {
        'pairNumber': 4,
        'image': 'assets/images/card-images/egg-tg.png',
        'alt': 'image of an egg; translates to itlog in tagalog',
        'words': 'itlog',
      },
]

//variables

let cardContainer = document.getElementById('card-container');



//game initialization
function startGame() {
    shuffleCards()
}

//calling on all cards in the DOM
let cards = document.getElementsByClassName('card-box');
console.log(cards);

for (let i =0; i < cards.length; i++) {
    cards[i].addEventListener('click', cardClicked);
}

//
function cardClicked(event) {
console.log(event.target.id);
}


/**click card function

let handleCardClick = event => {
console.log(event);
}
//what do you want to happen when the card is clicked?
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', handleCardClick);
}*/
