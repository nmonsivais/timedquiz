var questionBank = [
    {
        question: 'This is my first question?',
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'
    },
    {
        question: 'This is my second question?',
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'
    },
    {
        question: 'This is my third question',
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'
    }];
//create a timer that counts down.
var timer = document.querySelector(".timer");
//User Question appear below to make question and button choices appear.//
var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        // .textContent updates front end element between > <
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // stoping the interval / timer
            clearInterval(timerInterval);
            // execute the sendMessage function
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timer.textContent = " ";
}

setTime();
//Link the timer to activate when the START button is clicked.


//Prepare the first question with multiple choices and display it on page.
function showQuestion() {
    console.log('ShowQuestion executed')
    // grabbed front end element
    var questionBankDisplay = document.querySelector('.question');
    // updated that element with the first questions
    questionBankDisplay.textContent = questionBank[0].question


}
//Only 1 array, as many objects as wanted.  Each object is 1 question, 4 choices, 1 correct choices, 3 incorrect choices.

//Set up on"click" to check if the answer is right or wrong.

//Depending if they are right or wrong, adjust timer.  If wrong, subtract 10 seconds.  If right, earn 1 point.  Regardless of which happens, have next question appear.

showQuestion();

