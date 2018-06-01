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




var question = 



// Start the game
$("#intro").on ("click","#begin", function() {
    $("#intro").addClass("hide");
    $("#questionGrid").removeClass("hide");
    countdown();
});

// Which button is clicked?
//answer 1
$("#answers").on("click","#answer1",function() {
    alert("answer1");
});

//answer 2
$("#answers").on("click","#answer2",function() {
    alert("answer2");
});

//answer 3
$("#answers").on("click","#answer3",function() {
    alert("answer3");
});

//answer 4
$("#answers").on("click","#answer4",function() {
    alert("answer4");
});