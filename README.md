# Code-Quiz live link: https://marianellag1.github.io/Code-Quiz/
GIVEN I am taking a code quiz:

WHEN I click the start button
THEN a timer starts and I am presented with a question
    //when the user clicks start timer should start counting down
    //Questions from what I have learned, up to 5 questions

WHEN I answer a question
THEN I am presented with another question
    //Questions will be made one after the other, all adding up whether right or wrong until final score at the end

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
    //if-else statement has to be made.
    //if answer is wrong, subtraction of the timer will be taken
    //if anser is correct timer continues as normal


WHEN all questions are answered or the timer reaches 0
THEN the game is over
    //If answers are wrong, the timer deducts, making the game quickly end
    //if questions aren't answered on time and time runs out, it ends
    //if all answers are answered right, it ends

WHEN the game is over
THEN I can save my initials and my score 
    user is shown score, as well as insert initials to collect score and keep record, for next game

