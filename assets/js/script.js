let cards = document.querySelectorAll('.card-box');
//click card function

let handleCardClick = event => {
    console.log(event);
}
//what do you want to happen when the card is clicked?
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleCardClick);
} 

