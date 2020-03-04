var questionBank = [
    {
        question: "Which of the following skills does Tro NOT know?",
        choices: ["Adobe Photoshoping", "Salsa Dancing", "YouTube-ing", "Play Guitar"],
        answer: "Adobe Photoshoping"
    },
    {
        question: "What is Tro's favorite hobby?",
        choices: ["Dancing", "Gaming", "Weight-lifting", "Video Editing"],
        answer: 'b'
    },
    {
        question: "This is my third question",
        choices: ["Choice a", "Choice b", "Choice c", "Choice d"],
        answer: 'b'
    }];
var qNum = 0;

//create a timer that counts down.
var timer = document.querySelector(".timer");
//User Question appear below to make question and button choices appear.//
var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        // .textContent updates front end element between > <
        timer.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            // stoping the interval / timer
            clearInterval(timerInterval);
            // execute the sendMessage function
            sendMessage();
        }

    }, 1000);
    showQuestion();
    //Note to self: document.querySelector is used to select something from HTML.  IF you are selecting an ID, put a # in front of what you are selecting.//
    //All variables for multiple choice question.//
    //Create a for loop to have all questions populate through the loop.


    for (var i = 0; i < questionBank[qNum].choices.length; i++) {

        var container1 = document.createElement("ul");
        var buttonA = document.createElement("button");
        var choices = document.querySelector("#choices");
        //choices is a variable that all other elements will be appended to.

        buttonA.innerHTML = questionBank[qNum].choices[i];
        container1.appendChild(buttonA);
        choices.appendChild(container1);

    }

}

function sendMessage() {
    timer.innerHTML = " ";
}

// setTime();
//Link the timer to activate when the START button is clicked.


//Prepare the first question with multiple choices and display it on page.
function showQuestion() {
    console.log('ShowQuestion executed');
    // grabbed front end element
    var questionBankDisplay = document.querySelector('.question');
    // updated that element with the first questions
    questionBankDisplay.innerHTML = questionBank[qNum].question;

}


//Only 1 array, as many objects as wanted.  Each object is 1 question, 4 choices, 1 correct choices, 3 incorrect choices.

//Set up on"click" to check if the answer is right or wrong.

//Depending if they are right or wrong, adjust timer.  If wrong, subtract 10 seconds.  If right, earn 1 point.  Regardless of which happens, have next question appear.