let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
};

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
    let card = 4;
    sum += card;
    renderGame();
}