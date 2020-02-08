// Timer 

$(document).ready(function() {
var handler;

    $('#play').click(function starter() {

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            handler = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(minutes + ":" + seconds);

                if (--timer <  0) {
                    timer = duration;
                    clearInterval(handler);
                    alert('Game Over!');
                }

            }, 1000);
        }

        jQuery(function ($) {
            var twoMinutes = 60 * 2,
                display = $('#timer');
            startTimer(twoMinutes, display);
        }); 
    });

     $('#reset').click(function () {
            clearInterval(handler);
    });
});


// Shuffle cards when page is loaded 
window.onload = startGame();

// Declarations 
let card = document.getElementsByClassName("pic");
let cards = [...card];
var interval;
let counter = document.querySelector(".moves");
let matchedCards = document.getElementsByClassName("match");
for (var i = 0; i<cards.length; i++) {
    cards[i].addEventListener("click", displayCard);
};

// Fisher-Yates Shuffle 
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

// Function to start a new game 
function startGame() {
        visiblePics = [];
        let shuffledCards = shuffle(cards);
        for (var i= 0; i < shuffledCards.length; i++){
            [].forEach.call(shuffledCards, function(item){
                deck.appendChild(item);
            });
        } 
         for (var i = 0; i < cards.length; i++){
            deck.innerHTML = "";
            [].forEach.call(cards, function(item) {deck.appendChild(item);});
            cards[i].classList.remove("open", "match", "disabled");
        }
        moves = 0;
        counter.innerHTML = moves;
}
var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("disabled");
};

function victory() {
        clearInterval(interval);
        alert("Congratulations! You have won!");
}


function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openedCards[0].type === openedCards[1].type){
            matched();
        } else {
            unmatched();
        }
    }
}

function matched() {
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("open");
    openedCards[1].classList.remove("open");
    openedCards = [];
}

function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("open", "unmatched");
        openedCards[1].classList.remove("open", "unmatched");
        enable();
        openedCards = [];
    },1000);
}

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}