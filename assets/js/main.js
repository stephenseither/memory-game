class MemoryGame {
    constructor (totalTime, pics) {
        this.picArray = pics;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timer');
        this.moves = document.getElementById('moves');
    }

    startGame () {
        this.totalClicks = 0;
        this.totalTime = this.totalTime;
        setTimeout(() => {
            this.shuffle();
            this.countdown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.timer.innerText = this.timeRemaining;
        this.moves.innerText = this.totalClicks;
        this.shuffle();
    }

    startCountDown () {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0) {
                this.gameOver();
            }
        }, 1000)
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
}

function ready () {
    let pics = Array.from(document.getElementsByClassName('pic'));
    let game = new MemoryGame(100, pics);
    pic.forEach(pic => {
        pic.addEventListener('click', () => {
        game.flipPic(Pic);
        });
    });
    
}