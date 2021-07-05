let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    return randomNumber;
};

function startGame() {
    renderGame();
};

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };

    if (sum <= 20) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        message = "Yay!! You've got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "Oh No! You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
};

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}