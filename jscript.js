var startButton = document.querySelector("#start-button");
var scoreResult = document.querySelector("#score-results");
var quizTimer = document.querySelector(".quiz-timer");
var rightAnswer;
var secondsLeft = 50;
var count = localStorage.getItem("count");

var answerChoices = document.getElementById("answer-choices");
var questionIndex = 0;

startButton.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        quizTimer.textContent = "Time: " + secondsLeft + " second(s) left";
        if (secondsLeft == 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

});

 function startQuiz() {
 var queryQuiz = quizQuest[i];
//  questTitle.textContent = queryQuiz.text;
 answerChoices.innerHTML = "";

    for (var i = 0; i < queryQuiz.length; i++) {
    var choiceButton = document.createElement('button');

    choiceButton.setAttribute("class", "btn");
    choiceButton.textContent = queryQuiz.choices[i];
    answerChoices.appendChild(choiceButton);
    }
};
var quizQuest = [
    {
        title: "When data is stored in a single variable, it's called a(n):",
        choices: ["Boolean", "List", "Object", "Array"],
        answer: "Array",
    },
    {
        title: "HTML gives structure to the page, CSS adds style to the page, while JavaScript gives the user... to the page.",
        choices: ["Github", "Interaction", "Heading", "Class"],
        answer: "Interaction",
    },
    {
        title: "When writing code, all should end with...",
        choices: ["?", "~", ";", "^"],
        answer: ";",
    },
    {
        title: "A variable declared in global scope is available to... function(s).",
        choices: ["Some", "All", "None", "One"],
        answer: "All",
    },

    {
        title: "D.O.M. stands for...",
        choices: ["Document Object Model", "Doughnuts on Monday", "Don't Open Meeting", " Drove On Mars"],
        answer: "Document Object Model",
    },
]
// quizQuest.addEventListener("click");

// var questTitle = document.querySelector(".btn").addEventListener("click", function () {
//     quizQuest("");
// });