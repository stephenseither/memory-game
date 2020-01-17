function mix (totalTime, cards){
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('timer');
    this.ticker = document.getElementById('flips');

    function startGame () {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.totalTime = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(( => {
            this.shuffleCards();
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
        this.shuffleCards();

    }
    function hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            this.classList.remove('matched');
        });
    }
    function flipCard (card) {
        if (this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');


        }
    }
    function shuffleCards () {
        for (let i = this.cardsArray.length -1; i >0; i--) {
            let randIndex = Math.floor(Math.random()*(i+1));
            cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }
    function canFlipCard (card) {
        return !this.busy && !this.matchedCards.includes(card) && !== this.cardToCheck;
    }
}

