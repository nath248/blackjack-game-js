let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let startOverButton = document.querySelector(".hide");
let startButton = document.getElementById("startButton");
let player = {
    name: "Nathaly",
    chips: 145
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    }
    if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    };
};

function startGame() {
    startButton.classList.remove("hide");
    startOverButton.classList.add("hide");
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        message = "Yay!! You've got Blackjack!";
        hasBlackjack = true;
        startOverButton.classList.remove("hide");
        startButton.classList.add("hide");
    } else {
        message = "Oh No! You're out of the game!";
        isAlive = false;
        startOverButton.classList.remove("hide");
        startButton.classList.add("hide");
    }
    messageEl.textContent = message;
};

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
};