// Card Data Array - with our card objects including pair, image, alt & words
const cardArray = [
  {
    'pair': 1,
    'image': 'assets/images/card-images/bread-en.png',
    'alt': 'image of a loaf of bread',
    'word': 'bread'
  },
  {
    'pair': 1,
    'image': 'assets/images/card-images/bread-tg.png',
    'alt': 'image of a loaf of bread; translates to "tinapay" in tagalog',
    'word': 'tinapay'
  },
  {
    'pair': 2,
    'image': 'assets/images/card-images/egg-en.png',
    'alt': 'image of an egg',
    'word': 'egg'
  },
  {
    'pair': 2,
    'image': 'assets/images/card-images/egg-tg.png',
    'alt': 'image of an egg; translates to "itlog" in tagalog',
    'word': 'itlog'
  },
  {
    'pair': 3,
    'image': 'assets/images/card-images/fish-en.png',
    'alt': 'image of a cooked fish',
    'word': 'fish'
  },
  {
    'pair': 3,
    'image': 'assets/images/card-images/fish-tg.png',
    'alt': 'image of a cooked fish; translates to "isda" in tagalog',
    'word': 'isda'
  },
  {
    'pair': 4,
    'image': 'assets/images/card-images/fruit-en.png',
    'alt': 'image of a bowl of fruit',
    'word': 'fruit'
  },
  {
    'pair': 4,
    'image': 'assets/images/card-images/fruit-tg.png',
    'alt': 'image of a bowl of fruit; translates to "prutas" in tagalog',
    'word': 'prutas'
  },
]

// Game initialisation, shuffle cards
cardArray.sort(() => Math.random() - 0.5);

// Where cards are 'stored'
const gridDisplay = document.querySelector('.grid');
let cardsChosen = []; /* Pushing selected cards into array */
let cardsChosenIds = [];
const cardsWon = [];


// Create an element for each item in array
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('class', 'card');
    card.setAttribute('src', 'assets/images/card-images/card-reverse.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  /* Look for all cards on grid via img tag */
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  console.log(cards);

  if (optionOneId == optionTwoId) {
    alert("You have clicked the same image!")
  }

  console.log("Check for match");
  if (optionOneId == optionTwoId) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'assets/images/card-images/card-match.png');
    cards[optionTwoId].setAttribute('src', 'assets/images/card-images/card-match.png');
    cards[optionOneId].revmoveEventListener('click', flipCard);
    cards[optionTwoId].revmoveEventListener('click', flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'assets/images/card-images/card-reverse.png');
    cards[optionTwoId].setAttribute('src', 'assets/images/card-images/card-reverse.png');
    alert("Sorry try again!");
  }
  cardsChosen = [];
  cardsChosenIds = [];
}


function flipCard() {
  /* This --> allowing us to interact with the element we click */
  const cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].pair);
  cardsChosenIds.push(cardId);

  console.log(cardsChosen);
  console.log(cardsChosenIds);

  this.setAttribute('src', cardArray[cardId].image);
  if (cardsChosen.length === 2) {
    setTimeout( checkMatch, 500)
  }
}


// const results = document.getElementById("results");
// const cardContainer = document.getElementById('card-container');
// let match = false
// // Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// let shufflecardData = cardData.sort(() => Math.random() - 0.5);


// document.addEventListener('DOMContentLoaded', function () {
//   displayCards();
//   let cards = document.querySelectorAll('.card-box');
//   for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', handleCardClick);
//   }
// })


// function displayCards() {
//   for (let i = 0; i < shufflecardData.length; i++) {

//     // New div element with id, attribute, classes(card-box, card-back); child of card-container
//     const card = document.createElement('div');
//     card.id = shufflecardData[i].word;

//     // Assigning pair number to card
//     card.setAttribute('data-pair', shufflecardData[i].pair);
//     card.classList.add('card-box');
//     card.classList.add('card-back');

//     // card is now a child element of the cardContainer
//     cardContainer.appendChild(card);

//     // new img element with attribute, child of card; assigning given image to card img
//     const cardImage = document.createElement('img');
//     cardImage.setAttribute('src', shufflecardData[i].image);

//     // create class to add to image
//     cardImage.classList.add('image-hidden');
//     cardImage.id = `${shufflecardData[i].word}-image`;
//     cardImage.setAttribute('alt', shufflecardData[i].image);
//     card.appendChild(cardImage);
//   }
// }

// let clickedCurrentCards = [];


// // logic checker
// function handleCardClick(event) {
//   let currentCardImage = document.getElementById(`${event.target.id}-image`);
//   currentCardImage.classList.remove('image-hidden');

//   clickedCurrentCards.push({
//     id: event.target.id,
//     pair: event.target.dataset.pair,
//   });

//   console.log(event.target.dataset.pair)

//   if (clickedCurrentCards.length >= 2) {

//     if (clickedCurrentCards[0]["pair"] === clickedCurrentCards[1]["pair"]) {
//       let deleteFirstCard = document.getElementById(clickedCurrentCards[0]['id']);
//       let deleteSecondCard = document.getElementById(clickedCurrentCards[1]['id']);

//       deleteFirstCard.classList.remove('card-box');
//       deleteSecondCard.classList.remove('card-box');
//     } else {
//       /* Remove pop-up notification */
//       // let confirmation = window.confirm('no match, proceed');
//       match = false
//       results.innerHTML = "is not a match"

//       // if (!match) {
//       //   let firstCardImage = document.getElementById(`${clickedCurrentCards[0]['id']}-image`);
//       //   let secondCardImage = document.getElementById(`${clickedCurrentCards[1]['id']}-image`);
//       //   firstCardImage.classList.add('image-hidden');
//       //   secondCardImage.classList.add('image-hidden');
//       // }

//       let firstCardImage = document.getElementById(`${clickedCurrentCards[0]['id']}-image`);
//       let secondCardImage = document.getElementById(`${clickedCurrentCards[1]['id']}-image`);

//       /* Timeout added from https://github.com/IuliiaKonovalova/May-Hackathon-Chats */
//       setTimeout(function () {
//         firstCardImage.classList.add('image-hidden');
//         secondCardImage.classList.add('image-hidden');
//         results.innerHTML = "try more"
//       }, 2500);
//     }
//     clickedCurrentCards = [];
//   } else {
//   }
// }

