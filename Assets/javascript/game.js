//Object
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    answerClicked: null,
    response: null,
    currentQuestion: 0,

    questions: [{
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
    {
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
    {
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
    {
        question: "q4",
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
    ],

};
var totalQuestions = game.questions.length;
var questionNumber = 0;
var endGame = 0;

var images = {
    win: ["office1.gif", "office3.gif", "office4.gif", "office7.gif"],
    lose: ["office10.gif", "office9.gif", "office8.gif", "office6.gif", "office5.gif", "office11.gif"],
    none: ["none.gif"]
};


//UI PAGE CONTROLS



function showQuestionGrid() {
    $("#questionGrid").removeClass("hide");
    showFooter();
}

function hideQuestionGrid() {
    $("#questionGrid").addClass("hide");
    hideFooter();
}

function showResultGrid() {
    $("#resultDiv").removeClass("hide");
};


function hideResultDiv() {
    $("#resultDiv").addClass("hide");
    showQuestionGrid();
    newTimer();
}

function hideResultDivNoT() {
    $("#resultDiv").addClass("hide");
    gameOver();
}

function hideResultDivTimed() {
    if (endGame === 1) {
        setTimeout(hideResultDivNoT, 3000);
    } else {
        setTimeout(hideResultDiv, 3000);
    }
}

function showFooter() {
    $("#qguide").removeClass("hide");
    updateFooter();
}

function hideFooter() {
    $("#qguide").addClass("hide");
}

function updateFooter() {
    questionNumber = questionNumber + 1;
    $("#currentQuestion").html(questionNumber);
    $("#totalQuestion").html(totalQuestions);
}

function newTimer() {
    game.answerClicked = false;
    $("#timer").html("10");
    timer();
}

// Start the game
$("#intro").on("click", "#begin", function () {
    $("#intro").addClass("hide");
    startGame();
});

// Show Question Progress




function startGame() {
    showQuestionGrid();
    timer();
    drawQuestion(game.questions[game.currentQuestion]);
    console.log(game.currentQuestion)
}

function startRound() {
    showQuestionGrid();
    timer();
    console.log(game.currentQuestion)
}



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


// deal with getting questions here

function incrementQuestion() {
    var index = game.questions.indexOf(game.currentQuestion);
    if (index === (totalQuestions - 1)) {
        endGame = 1;
    } else {
        game.currentQuestion = game.questions[index + 1];
        drawQuestion(game.currentQuestion);
    }
}

function drawQuestion(qnum) {
    $("#question").html(qnum.question)
    $("#answer1").html(qnum.answer1.value);
    $("#answer2").html(qnum.answer2.value);
    $("#answer3").html(qnum.answer3.value);
    $("#answer4").html(qnum.answer4.value);
    game.currentQuestion = qnum;
    return game.currentQuestion;
}


// Event Listeners


// Which button is clicked?
//answer 1
$("#answers").on("click", "#answer1", function () {
    game.response = game.currentQuestion.answer1
    gameLogic();
});

//answer 2
$("#answers").on("click", "#answer2", function () {
    game.response = game.currentQuestion.answer2
    gameLogic();
});

//answer 3
$("#answers").on("click", "#answer3", function () {
    game.response = game.currentQuestion.answer3
    gameLogic();
});

//answer 4
$("#answers").on("click", "#answer4", function () {
    game.response = game.currentQuestion.answer4
    gameLogic();
});




// core game behavior

function gameLogic() {
    game.answerClicked = true;
    if (game.response.correct === true) {
        game.correct++
        showResult(true);
    } else {
        game.incorrect++
        showResult(false);
    }

};

function noAnswer() {
    showResult(noAnswer);
    game.unanswered++;
};



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
    $("#qResult").attr("src", gif);
    hideQuestionGrid();
    showResultGrid();
    incrementQuestion();
    hideResultDivTimed();
};

// get img 
function getImg(array) {
    var path = "Assets/images/"
    var img = array[(Math.floor(Math.random() * array.length))];
    gif = path + img;
    return gif
};



// // End the game Logic

function gameOver() {
    showGameScore();
    hideQuestionGrid();
    hideFooter();
};

function updateGameScore() {
    $("#correctAnswer").html(game.correct);
    $("#incorrectAnswer").html(game.incorrect);
    $("#unanswered").html(game.unanswered);
};


function showGameScore() {
    $("#gameScore").removeClass("hide");
    updateGameScore();
    hideQuestionGrid();
};

function hideGameScore() {
    $("#gameScore").addClass("hide");
};

function resetGame() {
    hideGameScore();
    endGame = 0;
    questionNumber = 0;
    game.currentQuestion = 0;
    game.unanswered = 0;
    game.correct = 0;
    game.incorrect = 0;
    startGame();
};


$("#tryAgain").on("click", function (event) {
    event.preventDefault();
    resetGame();
});



