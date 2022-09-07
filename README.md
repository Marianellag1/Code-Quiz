# Code-Quiz live link: https://marianellag1.github.io/Code-Quiz/
GIVEN I am taking a code quiz:

WHEN I click the start button
THEN a timer starts and I am presented with a question
    //when the user clicks start quiz and timer should start counting down
    //Questions from what I have learned, up to 5 questions in total
    //if else statement on getting answers right or wrong, which if wrong, deducts points ie seconds
    //if answer is correct, time stays, next question should pop up
WHEN I answer a question
THEN I am presented with another question
    //answers if right or wrong should show when user clicks on an answer
    //Questions will be made one after the other, all adding up whether right or wrong until final score at the end
        //My questions:
        // When data is stored in a single variable, it's called a(n): array  can choose: boolean-list-object
        // HTML gives structure to the page, CSS adds style to the page, while JavaScript gives... interaction ... to the page... Github,Heading, Class
        //When writing code, all should end with... ;... /,?, ^
        //A variable declared in global scope is available to ...all... function(s) , some , none, one
        //DOM stands for... Document Object Model... Doughnuts on Monday, Don't Open Meeting, Drove On Mars
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
    //if-else statement has to be made.
    //if answer is wrong, subtraction of the timer will be taken
    //if anwser is correct timer continues as normal
WHEN all questions are answered or the timer reaches 0
THEN the game is over
    //If answers are wrong, the timer deducts, making the game quickly end
    //if questions aren't answered on time and time runs out, it ends
    //if all answers are answered right, it ends
WHEN the game is over
THEN I can save my initials and my score 
    user is shown score, as well as insert initials to collect score and keep record, for next game

