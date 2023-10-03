let cards = document.querySelectorAll('.card-box');
//click card function

let handleCardClick = event => {
    console.log(event.target);
}

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i]);
    cards[i].addEventListener('click', handleCardClick);
}

