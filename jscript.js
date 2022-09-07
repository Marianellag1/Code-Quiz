var startButton = document.querySelector("#start-button");
var codeQuiz = document.querySelector("#quiz");
var scoreResult = document.querySelector("#score-results");
var quizTimer = document.querySelector(".quiz-timer");
var rightAnswer;
var secondsLeft = 75;

startButton.addEventListener("click", function () {
    // function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        quizTimer.textContent = "Time: " + secondsLeft;

        if (secondsLeft == 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    // function showResults(){ };
    // quizBuild();
    // startButton.addEventListener('click', showResults);
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
        }
    ]
});

function quizBuild() {
    var output = [];

    for (var i = 0; i < quizQuest; i++) {
        console.log(quizQuest);
        var answers = [];
    }

};

function startGame() {
    // isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // renderBlanks()
    startTimer()
}
startButton.addEventListener("click", startGame);

//   function startTimer() {
// Sets timer
// quizTimer = setInterval(function() {
//   timerCount--;
//   timerElement.textContent = timerCount;
//   if (timerCount >= 0) {
// Tests if win condition is met
// if (rightAnswer && timerCount > 0) {
// Clears interval and stops timer
//       clearInterval(timer);
//       winGame();
//     } 
// };

setTimer();