//timer function
function timer() {
    var timeLeft = 9;
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft === -1) {
            clearTimeout(timerId);
            noAnswer();
        } else if (game.answerClicked === true) {
            clearTimeout(timerId);
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
    answerClicked: null,
    currentQuestion: null,
    questions: {
        question1: {
            question: "q1",
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
            question: "q2",
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
        question3: {
            question: "q3",
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
        question4: {
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
        question5: {
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
        }
    }   
};

var images = {
    win: ["office1.gif","office3.gif","office4.gif","office7.gif"],
    lose: ["office10.gif","office9.gif","office8.gif","office6.gif","office5.gif","office11.gif"],
    none: ["none.gif"]
};






function drawQuestion(qnum) {
    $("#question").html(qnum.question)
    $("#answer1").html(qnum.answer1.value);
    $("#answer2").html(qnum.answer2.value);
    $("#answer3").html(qnum.answer3.value);
    $("#answer4").html(qnum.answer4.value);
    game.currentQuestion = qnum;
    return game.currentQuestion;
     
}

function showQuestionGrid() {
    $("#questionGrid").removeClass("hide"); 
}

// Start the game
$("#intro").on ("click","#begin", function() {
    $("#intro").addClass("hide");
    showQuestionGrid();
    timer();
    drawQuestion(game.questions.question1);
    console.log(game.currentQuestion)
});



// Which button is clicked?
//answer 1
$("#answers").on("click","#answer1",function() {
    game.answerClicked = game.currentQuestion.answer1
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




// core game behavior

function gameLogic() {
    game.answerClicked = true;
    if (game.answerClicked.correct === true) {
        game.correct++
        showResult(true);
    } else {
        game.incorrect++
        showResult(false);
    }
    
};

function noAnswer () {
    showResult(noAnswer);
    game.unanswered++;
 }




// display question result page
var gif 
var array
function showResult(bool) {
    if (bool === true) {
        array = images.win
    } else if (bool === false) {
        array = images.lose
    } else {
        array = images.none
    }
    getImg(array);    
    $("#qResult").attr("src",gif);
    $("#questionGrid").addClass("hide");
    $("#resultDiv").removeClass("hide");
    hideResultDivTimed();
    // temp
    incrementQ();
};

// get img 
function getImg(array) {
    var path = "Assets/images/"
    var img = array[(Math.floor(Math.random()*array.length))];
    gif = path + img;
    return gif
};

function hideResultDiv() {
    $("#resultDiv").addClass("hide");
}

function hideResultDivTimed() {
    setTimeout(hideResultDiv,5000);
}





// // increment question
// function incrementQ() {
// for (k in game.questions) {

// }

// console.log(game.currentQuestion);
// game.currentQuestion = game.currentQuestion++;
// }

