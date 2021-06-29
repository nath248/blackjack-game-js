let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
    message = "Would you like to draw another card?🙂";
} else if (sum === 21) {
    message = "Yay!! You've got Blackjack!🥳";
    hasBlackjack = true;
} else {
    message = "Oh No! You're out of the game!😞";
    isAlive = false;
}

console.log(message);