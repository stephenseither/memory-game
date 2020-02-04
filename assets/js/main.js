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

document.body.onload = startGame();

let pic = document.getElementsByClassName("pic");
let pics = [...pic];
var interval;

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

function startGame() {
        matchedPics = [];
        pics = shuffle(pics);
        hidePics();
        this.ticker.innerText = this.totalClicks;
    }

function victory() {
        clearInterval(interval);
        alert("Congratulations! You have won!");
}

function hidePics() {
        this.picsArray.forEach(pic => {
            pic.classList.remove('visisble');
            pic.classList.remove('matched');
        });
}

function flipPic(pic) {
        if(this.canFlip(pic)) {
            this.totalClicks ++;
            this.ticker.innerText = this.totalClicks;
            pic.classList.add('visible');
        }
}
