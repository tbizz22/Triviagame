//Object
var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    answerClicked: null,
    response: null,
    currentQuestion: 0,

    questions: [{
        question: "Who does Michael accidentally hit with his car in the parking lot?",
        answer1: {
            value: "Meredith",
            correct: true
        },
        answer2: {
            value: "Phyllis",
            correct: false
        },
        answer3: {
            value: "Kelly",
            correct: false
        },
        answer4: {
            value: "Ryan",
            correct: false
        },
    },
    {
        question: "On the night Pam got really drunk at the Dundies and kissed Jim, what did she win her Dundie for?",
        answer1: {
            value: "Longest engagement",
            correct: false
        },
        answer2: {
            value: "Whitest sneakers",
            correct: true
        },
        answer3: {
            value: "Tidiest desk",
            correct: false
        },
        answer4: {
            value: "Best candy",
            correct: false
        },
    },
    {
        question: "What is the name of the company Ryan sets up that sends messages to all of your devices at once?",
        answer1: {
            value: "Twitter",
            correct: false
        },
        answer2: {
            value: "Grrowl",
            correct: false
        },
        answer3: {
            value: "Barkk",
            correct: false
        },
        answer4: {
            value: "Wuphf",
            correct: true
        },
    },
    {
        question: "According to Dwight, nostalgia is one of the greatest human weaknesses, second only to what?",
        answer1: {
            value: "Fear of heights",
            correct: false
        },
        answer2: {
            value: "Emotion",
            correct: false
        },
        answer3: {
            value: "The eyes",
            correct: false
        },
        answer4: {
            value: "The neck",
            correct: true
        },
    },
    {
        question: "What famous case is Toby a juror on?",
        answer1: {
            value: "Zodiac Killer",
            correct: false
        },
        answer2: {
            value: "Jeffery Dhamer",
            correct: false
        },
        answer3: {
            value: "The Scranton Strangler",
            correct: true
        },
        answer4: {
            value: "The Golden State Killer",
            correct: false
        },
    },
    {
        question: "What name does Dwight call Justin Bieber?",
        answer1: {
            value: "Justice Beaver",
            correct: true
        },
        answer2: {
            value: "Justice Blieber",
            correct: false
        },
        answer3: {
            value: "Justine Believer",
            correct: false
        },
        answer4: {
            value: "Justice B. Liver",
            correct: false
        },
    },
    {
        question: "What is the name of Angela's cat, which Dwight kills by putting it in the freezer?",
        answer1: {
            value: "Snowball",
            correct: false
        },
        answer2: {
            value: "Bandit",
            correct: false
        },
        answer3: {
            value: "Sprinkles",
            correct: true
        },
        answer4: {
            value: "Mr. Meowgi",
            correct: false
        },
    },
    {
        question: "When everyone tries to get Meredith to admit to being an alcoholic at the Moroccan Christmas party, what does she actually admit to being addicted to?",
        answer1: {
            value: "Sex",
            correct: false
        },
        answer2: {
            value: "Food",
            correct: false
        },
        answer3: {
            value: "Crack",
            correct: false
        },
        answer4: {
            value: "Porn",
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
    lose: ["office10.gif", "office9.gif", "office8.gif", "office6.gif", "office5.gif", "office11.gif","office12.gif","office2.gif"],
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
        setTimeout(hideResultDivNoT, 5000);
    } else {
        setTimeout(hideResultDiv, 5000);
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
    $("#timer").html("20");
    timer();
}

// Start the game
$("#intro").on("click", "#begin", function () {
    $("#intro").addClass("hide");
    startGame();
});

// Show Question Progress

//Start Rounds & Game
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
    var timeLeft = 19;
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
var result

function showResult(bool) {
    if (bool === true) {
        array = images.win
        result = "Correct!"
    } else if (bool === false) {
        array = images.lose
        result = "Wrong!"
    } else {
        array = images.none
        result = "Try to answer next time"
    }
    getImg(array);
    $("#qResult").attr({
                        "src": gif,
                        "class": "img-responsive margintop"
                    });
    $("#resultOutcome").html(result);
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



