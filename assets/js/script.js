//card data, including pair, image, alt & words
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
console.log(cardData);


const cardContainer = document.getElementById('card-container');


//Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
let shufflecardData = cardData.sort(() => Math.random() - 0.5);
//console.log(shufflecardData);
//console.log(shufflecardData.length);


document.addEventListener('DOMContentLoaded', function () {
  displayCards();
  let cards = document.querySelectorAll('.card-box');
  for (let i =0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleCardClick);
}
})

function displayCards() {
  for (let i=0; i < shufflecardData.length; i++) {
    //console.log(shufflecardData[i].pair, shufflecardData[i].word);
  
    //new div element with id, attribute, classes(card-box, card-back); child of card-container
    const card = document.createElement('div');
    card.id = shufflecardData[i].word;
    //assigning pair number to card
    card.setAttribute('data-pair', shufflecardData[i].pair);
    card.classList.add('card-box');
    card.classList.add('card-back');
    //card is now a child element of the cardContainer
    cardContainer.appendChild(card); 

    

    //new img element with attribute, child of card; assigning given image to card img
    const cardImage = document.createElement('img');
    cardImage.setAttribute('src', shufflecardData[i].image);
    //create class to add to image
    cardImage.classList.add('image-hidden');
    cardImage.id = `${shufflecardData[i].word}-image`;
    cardImage.setAttribute('alt', shufflecardData[i].image); 
    card.appendChild(cardImage); 

  }
}

function resetButton() {
  let resetButton = document.getElementById('reset-button')
}


//calling on all cards in the DOM


let clickedCurrentCards = [];



//logic checker
function handleCardClick(event) {
  let currentCardImage = document.getElementById(`${event.target.id}-image`);
  currentCardImage.classList.remove('image-hidden');
  
  console.log("event target pair: ",event.target.dataset.pair);
  console.log("current length of clickedCurrentCards: ", clickedCurrentCards.length);
  clickedCurrentCards.push({
    id: event.target.id, 
    pair: event.target.dataset.pair,
    });


  console.log("clickedCurrentCards: ", clickedCurrentCards);
 
   

    if (clickedCurrentCards.length >= 2) {
      console.log(clickedCurrentCards[0]["pair"]);
      console.log(clickedCurrentCards[1]["pair"]);
      if (clickedCurrentCards[0]["pair"] === clickedCurrentCards[1]["pair"]) {
        console.log('match');
        let deleteFirstCard = document.getElementById(clickedCurrentCards[0]['id']);
        let deleteSecondCard = document.getElementById(clickedCurrentCards[1]['id']);

        deleteFirstCard.classList.remove('card-box');
        deleteSecondCard.classList.remove('card-box');
      } else {
        let confirmation = window.confirm('no match, proceed');
        
        
      if (confirmation) {
      let firstCardImage = document.getElementById(`${clickedCurrentCards[0]['id']}-image`);
      let secondCardImage = document.getElementById(`${clickedCurrentCards[1]['id']}-image`);
      firstCardImage.classList.add('image-hidden');
      secondCardImage.classList.add('image-hidden');
      } 
      }
      clickedCurrentCards = [];
    } else {
      console.log("No more than two!");
    }
}


