//timer function
function timer() {
    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft === -1) {
            clearTimeout(timerId);
            //put code here to end the round
        } else {
            $("#timer").html(timeLeft);
            timeLeft--
        };
    }
}



//Object
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    questions: {
        question1: {
            question: "What is the next question",
            answer1: "1",
            answer2: "2",
            answer3: "3",
            answer4: "4",
            rightAnswer: ""
        },
        question2: {
            question: "This is the next question",
            answer1: "5",
            answer2: "6",
            answer3: "7",
            answer4: "8",
            rightAnswer: ""
        },
        question3: {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            rightAnswer: ""
        },
        question4: {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            rightAnswer: ""
        },
        question5: {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            rightAnswer: ""
        }
    },
    answerClicked: null

}



// Start the game
$("#intro").on ("click","#begin", function() {
    $("#intro").addClass("hide");
    $("#questionGrid").removeClass("hide");
    timer();
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