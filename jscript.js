var startButton = document.querySelector("#start-button");
var quizTimer = document.querySelector(".quiz-timer");
var questions = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var choices = document.querySelector("#choices");
var questionTitle = document.querySelector("#question-title");
var startScreen = document.querySelector("#start-screen");
var secondsLeft = 50;
var questionIndex = 0;
// var scoreResult = document.querySelector("#score-results");
// var rightAnswer;
// var count = localStorage.getItem("count");
// var answerChoices = document.getElementById("answer-choices");

startButton.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        quizTimer.textContent = "Time: " + secondsLeft + " second(s) left";
        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            questions.removeAttribute("class");
        }

    }, 1000);
    startScreen.style.display = "none";
    startQuiz();
});

// for(i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
// }

// function startQuiz(){
//     questions.removeAttribute("class");
//     getQuestions();
// }
// for (let questionIndex = 0; i < questions.choices.length; i++) {
    // var choice = questions.choices[questionIndex];
    // var choiceButton = document.createElement('button');
    // choiceButton.setAttribute("class", "choice-btn");
    // choiceButton.setAttribute("value", choice - button);
    // choiceButton.textContent = i + 1 + "." + choice;
    // questionChoices.appendChild(choiceButton);

// }

function startQuiz() {
    let currentQuestion = questions[questionIndex];
    questionTitle.textContent = currentQuestion.title;
    choices.innerHTML = "";

}


document.querySelector("#questions").addEventListener("click", function (e) {
    console.log(e.target);
    if (questionIndex === questions.length) {
        alert("last question");
    } else {
        questionIndex++;
    }
})

function questionAnswerSelected() {
    if (choiceButton.value !== answer) {
        var wrongAnswer = "Wrong Answer";
        quizTimer = quizTimer - 10;
        wrongAnswer.textContent = "Wrong Answer";
        clearInterval(currentQuestion);
        choice = questionIndex + 1;
    } else {
        var correctAnswer = "Correct Answer";
        correctAnswer.textContent = "Correct Answer";
        localStorage.setItem;

    }


}
// };

// quizQuest.addEventListener("click");

// var questTitle = document.querySelector(".btn").addEventListener("click", function () {
//     quizQuest("");
// });