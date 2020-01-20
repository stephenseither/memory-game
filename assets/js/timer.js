$(document).ready(function() {
var handler;

    $('#reset').click(function () {
        if (handler) {
            clearInterval(handler);
            clearInterval(moves);
            clearInterval();
        }
    });

    $('#play').click(function starter() {

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            handler = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.text(minutes + ":" + seconds);

                if (timer === 0) {
                    this.gameOver();
                }

            }, 1000);
        }

        jQuery(function ($) {
            var fiveMinutes = 60 * 2,
                display = $('#timer');
            startTimer(fiveMinutes, display);
        });
    });
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
        this.picsArray.forEach(pic => {
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

function init() {
    let pic = Array.from(document.getElementsByClassName('flip-card'));
    let game = new MemoryGame (pic);

    game.startGame();
}