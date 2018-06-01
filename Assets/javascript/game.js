//timer function

var timeLeft = 30;
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft === 0) {
        clearTimeout(timerId);
        //put code here to end the round
    } else {
        $("#timer").html(timeLeft);
        timeLeft--
    };
}



countdown();