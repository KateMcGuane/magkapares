// card data array, including pair, image, alt & words
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
    'alt': 'image of a loaf of bread; translates to "tinapay" in tagalog',
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
    'alt': 'image of a bowl of fruit; translates to "prutas" in tagalog',
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
    'alt': 'image of a cooked fish; translates to "isda" in tagalog',
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
    'alt': 'image of an egg; translates to "itlog" in tagalog',
    'word': 'itlog',
  },
]


const results = document.getElementById("results");
const cardContainer = document.getElementById('card-container');
let match = false
// Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shufflecardData = cardData.sort(() => Math.random() - 0.5);


document.addEventListener('DOMContentLoaded', function () {
  displayCards();
  let cards = document.querySelectorAll('.card-box');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleCardClick);
  }
})


function displayCards() {
  for (let i = 0; i < shufflecardData.length; i++) {

    //new div element with id, attribute, classes(card-box, card-back); child of card-container
    const card = document.createElement('div');
    card.id = shufflecardData[i].word;

    //assigning pair number to card
    card.setAttribute('data-pair', shufflecardData[i].pair);
    card.classList.add('card-box');
    card.classList.add('card-back');

    // card is now a child element of the cardContainer
    cardContainer.appendChild(card);

    // new img element with attribute, child of card; assigning given image to card img
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', shufflecardData[i].image);

    // create class to add to image
    cardImage.classList.add('image-hidden');
    cardImage.id = `${shufflecardData[i].word}-image`;
    cardImage.setAttribute('alt', shufflecardData[i].image);
    card.appendChild(cardImage);
  }
}

let clickedCurrentCards = [];


// logic checker
function handleCardClick(event) {
  let currentCardImage = document.getElementById(`${event.target.id}-image`);
  currentCardImage.classList.remove('image-hidden');

  clickedCurrentCards.push({
    id: event.target.id,
    pair: event.target.dataset.pair,
  });

  console.log(event.target.dataset.pair)

  if (clickedCurrentCards.length >= 2) {

    if (clickedCurrentCards[0]["pair"] === clickedCurrentCards[1]["pair"]) {
      let deleteFirstCard = document.getElementById(clickedCurrentCards[0]['id']);
      let deleteSecondCard = document.getElementById(clickedCurrentCards[1]['id']);

      deleteFirstCard.classList.remove('card-box');
      deleteSecondCard.classList.remove('card-box');
    } else {
      /* Remove pop-up notification */
      // let confirmation = window.confirm('no match, proceed');
      match = false
      results.innerHTML = "is not a match"

      // if (!match) {
      //   let firstCardImage = document.getElementById(`${clickedCurrentCards[0]['id']}-image`);
      //   let secondCardImage = document.getElementById(`${clickedCurrentCards[1]['id']}-image`);
      //   firstCardImage.classList.add('image-hidden');
      //   secondCardImage.classList.add('image-hidden');
      // }

      let firstCardImage = document.getElementById(`${clickedCurrentCards[0]['id']}-image`);
      let secondCardImage = document.getElementById(`${clickedCurrentCards[1]['id']}-image`);

      /* Timeout added from https://github.com/IuliiaKonovalova/May-Hackathon-Chats */
      setTimeout(function () {
        firstCardImage.classList.add('image-hidden');
        secondCardImage.classList.add('image-hidden');
        results.innerHTML = "try more"
      }, 2500);
    }
    clickedCurrentCards = [];
  } else {
  }
}

