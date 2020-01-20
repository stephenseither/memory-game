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

$("#play").click( function(){
   var counter = 120;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("timer");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         alert('Game Over');
         clearInterval(counter);
       }
     }, 1000);
});





class MemoryGame {
    constructor (pics) {
        this.picArray = pics;
    }

    startGame() {
        this.totalClicks = 0;
        this.picsToCheck = null;
        this.matchedPics = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffle(this.picsArray);
            this.busy = false;
        }, 500)
        this.hidePics();
        this.ticker.innerText = this.totalClicks;
    }

    gameOver () {
        clearInterval(handler);
        alert("Game Over!")
    }

    victory() {
        clearInterval(handler);
        alert("Congratulations! You have won!");
    }

    hidePics() {
        this.picArray.forEach(pic => {
            pic.classList.remove('visisble');
            pic.classList.remove('matched');
        });
    }

    flipPic(pic) {
        if(this.canFlip(pic)) {
            this.totalClicks ++;
            this.ticker.innerText = this.totalClicks;
            pic.classList.add('visible');

            if(this.picToCheck) {
                this.checkforPicMatch(pic);
            } else {
                this.picToCheck = pic;
            }
        }
    }
    shuffle(cardsArray) {
        for (let i = picArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            picArray[randIndex].style.order = i;
            picArray[i].style.order = randIndex;
        }
    }
}
