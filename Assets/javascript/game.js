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

var uxdisplay = null;

//Object
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    questions: {
        question1: {
            question: "What is the next question",
            answer1: {
                value: "1",
                correct: false
            },                
            answer2: {
                value: "2",
                correct: false
            },
            answer3: {
                value: "3",
                correct: false
            },
            answer4: {
                value: "4",
                correct: true
            },
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
    answerClicked: null,
    currentQuestion: null,
}

var images = {
    win: ["office1.gif","office3.gif","office4.gif","office7.gif"],
    lose: ["office10.gif","office9.gif","office8.gif","office6.gif","office5.gif"]
};






// // get the question
// function getQuestion() {
//     Object.keys(game.questions).forEach((key) => {
//         game.questions[key] = game.currentQuestion;
//         console.log(game.questions.key);
//     });
// };


// function getQuestion() {
//     Object.keys(game.questions).forEach((key) => {
//         game.questions.currentQuestion = uxdisplay
//     })

// }

// function getQuestion() {
// for (var k in game.questions) {
//     for (var q in k)
//         $("#question").html(k[q]);

//     console.log(k & "  " & game.questions[k]);
// }
// }

function drawQuestion(qnum) {
    $("#question").html(qnum.question)
    $("#answer1").html(qnum.answer1.value);
    $("#answer2").html(qnum.answer2.value);
    $("#answer3").html(qnum.answer3.value);
    $("#answer4").html(qnum.answer4.value);
    game.currentQuestion = qnum;
     
}



// Start the game
$("#intro").on ("click","#begin", function() {
    $("#intro").addClass("hide");
    $("#questionGrid").removeClass("hide");
    timer();
    drawQuestion(game.questions.question1);
});



// Which button is clicked?
//answer 1
$("#answers").on("click","#answer1",function() {
    game.answerClicked = game.currentQuestion.answer1
    console.log(game.answerClicked)
    gameLogic();
});

//answer 2
$("#answers").on("click","#answer2",function() {
    game.answerClicked = game.currentQuestion.answer2
    gameLogic();
});

//answer 3
$("#answers").on("click","#answer3",function() {
    game.answerClicked = game.currentQuestion.answer3
    gameLogic();
});

//answer 4
$("#answers").on("click","#answer4",function() {
    game.answerClicked = game.currentQuestion.answer4
    gameLogic();
});





function gameLogic() {
    if (game.answerClicked.correct === true) {
        game.correct++
        showResult(true);
    } else {
        game.incorrect++
        showResult(false);
    }
};



// get img 
function getImg(array) {
    var path = "Assets/images/"
    var img = array[(Math.floor(Math.random()*array.length))];
    gif = path + img;
    return gif
}


// display result page
var gif 
var array
function showResult(bool) {
    if (bool === true) {
        array = images.win
    } else {
        array = images.lose
    }
    getImg(array);    
    $("#qResult").attr("src",gif);
    $("#questionGrid").addClass("hide");
    $("#resultDiv").removeClass("hide");
}