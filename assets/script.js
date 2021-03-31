
var startBtn = document.getElementById("startQuiz")
var answerButtonsDiv = document.getElementById("multipleChoice")
var ansBtn1 = document.getElementById("choice1")
var ansBtn2 = document.getElementById("choice2")
var ansBtn3 = document.getElementById("choice3")
var ansBtn4 = document.getElementById("choice4")
var titleText = document.getElementById("questions")
var currentQuestion = document.querySelector("#newQuestion")
var initialForm = document.getElementById("formSection")
var rightWrong = document.getElementById("rightWrong")
// var numberOfQuestions=11;
var questionNumber=0;
var submitButton = document.getElementById("submitScore")
var userInitials = document.getElementById("initialText")
var scoreList = document.getElementById("scoreList")
var highScoreButtons = document.getElementById("highScoreButtons")
//var questions = ["Question 1?","Question2?","Question 3?", "Question 4?", "Question 5?"];
var scores=[];
var answerButtons = document.getElementsByClassName("answerButton")
var timerInterval;
var answersRight=0;
var correctDisplay = document.getElementById("answersRight")

var questions = [
  {
    Q: "Who was the Norse god of mischief?",
    choices: ["Odin", "Frigg", "Loki", "Baldur"],
    A: "Loki",
  },
  {
    Q: "Who was the Egyptian goddess of the moon?",
    choices: ["Ra", "Anubis", "Isis", "Ma'at"],
    A: "Isis",
  },
  {
    Q: "Who was the King of the Roman pantheon?",
    choices: ["Jupiter", "Mars", "Venus", "Apollo"],
    A: "Jupiter"
  },
  {
    Q: "Who was the Greek god of getting hammered and engaging in ritual madness?",
    choices: ["Zeus", "Poseidon", "Ares", "Dionysos"],
    A: "Dionysos"
  },
  {
    Q: "According to Greek myth, was the abode of the Gods?",
    choices: ["Valhalla", "Mount Olympus", "The Hall of Kings", "The Divine Realm"],
    A: "Mount Olympus"
  },
  {
    Q: "Which of these Hindu gods is considered 'The Destroyer?'",
    choices: ["Vishnu", "Brahma", "Indra", "Shiva"],
    A: "Shiva"
  },
  {
    Q: "Who is the Roman equivalent of the Greek god Aphrodite?",
    choices: ["Juno", "Venus", "Ceres", "Minerva"],
    A: "Venus"
  },
  {
    Q: "What was left in Pandora’s box after she released misery and evil?",
    choices: ["Joy", "Madness", "Hope", "Snakes"],
    A: "Hope"
  },
  {
    Q: "In Ancient Egypt, Sekhmet was a powerful deity associated with which equally powerful animal?",
    choices: ["A Bear", "A Wolf", "A Crocodile", "A Lion"],
    A: "A Lion"
  },
  {
    Q: "In Norse Mythology, what is the home of the Giants?",
    choices: ["MuspelHeim", "Jotunheim", "SvartalFheim", "Vanaheim"],
    A: "Jotunheim"
  },
  {
    Q: "In Ancient Egypt, what is used as a counter-balance against the heart in the Underworld; representing truth?",
    choices: ["A Feather", "A Hair", "Your Earthly Belongings", "A Bowl of Sand"],
    A: "Feather"
  }
]



//Sets number of seconds in timer 
var secondsLeft=75;
//sets a space for the timer to appear at the top right 
var countSpace = document.querySelector("#countSpace");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  var li = document.createElement("li")
  li.textContent=userInitials.value + ": " + answersRight  + " of 11 correct with " + secondsLeft + " seconds remaining!";
  scoreList.appendChild(li);
  console.log(userInitials.value)
  highScoreScreen();
})

startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";

  for (let index = 0; index < answerButtons.length; index++) {
    answerButtons[index].addEventListener("click", function (event) {
      console.log("Text in clicked button: " + event.target.textContent)
      evaluateAns(event.target.textContent)
      setTimeout(function () {
        rightWrong.style.display="none";
      }, 1000);
 
    })
  }
  quizScreens();
  })

//The applies to the initial start screen
function startScreen(){
  secondsLeft=75;
  answersRight=0;
  correctDisplay.style.display="none";
  titleText.style.display="block";
  startBtn.style.display = "block";
  titleText.textContent="Ancient Mythology Quiz"
  currentQuestion.style.display="block";
  currentQuestion.textContent="Try to answer the following questions as fast as possible! Incorrect answers will penalize you by subtracting ten seconds!"
  initialForm.style.display = "none";
  highScoreButtons.style.display="none"
  answerButtonsDiv.style.display = "none";
  scoreList.style.display="none";
  questionNumber=0;
  
}


//Quiz question screens.Displays buttons, populates them with the choices, and listens for button clicks
function quizScreens() {
    console.log("quizScreens() function called")
    correctDisplay.style.display="block";
    titleText.style.display="none";
    initialForm.style.display = "none";
    highScoreButtons.style.display = "none";
    answerButtonsDiv.style.display = "none";
    startBtn.style.display = "none";
    answerButtonsDiv.style.display = "block";
    correctDisplay.textContent ="Score: " +answersRight+ " of 11"
    currentQuestion.textContent = questions[questionNumber].Q;
    ansBtn1.textContent = questions[questionNumber].choices[0];
    ansBtn2.textContent = questions[questionNumber].choices[1];
    ansBtn3.textContent = questions[questionNumber].choices[2];
    ansBtn4.textContent = questions[questionNumber].choices[3];

    if (secondsLeft === 0){
      highScoreScreen();
    }

  console.log("Question Number (this is in quizScreens): "+questionNumber)
}

//Evaluates whether they selected the correct answer
function evaluateAns(userAnswer) {
  console.log("evaluateAns() function called")
  var correctAnswer = questions[questionNumber].A;
  console.log("Correct Answer: " + questions[questionNumber].A)
  rightWrong.style.display = "block"
  
    if (userAnswer == correctAnswer) {
      rightWrong.textContent = "Correct!"
      answersRight++;
    } else {
      rightWrong.textContent = "Wrong! 10 Seconds Removed!"
      secondsLeft -= 10;
    }
    questionNumber += 1;
    if (questionNumber >= 11) {
      clearInterval(timerInterval);
      endScreen()
    } else {
      quizScreens();
    }

}

//Screen showing final score. Hides all appropriate elements
function endScreen() {
  initialForm.style.display = "block";
  correctDisplay.style.display="block";
  highScoreButtons.style.display = "none";
  answerButtonsDiv.style.display = "none";
  startBtn.style.display = "none";
  currentQuestion.setAttribute("Style", "margin-left:30px; text-align:left;")
  titleText.setAttribute("Style", "margin-left:30px; text-align:left;")
  titleText.textContent ="All Done!"
  currentQuestion.textContent="You finished with " + secondsLeft + " seconds remaining!";
  correctDisplay.style.color="wheat";
  correctDisplay.textContent ="Final Score: " +answersRight+ " of 11"
  countSpace.textContent=secondsLeft;
}



//Runs High score screen. Hides all appropriate elements. 
function highScoreScreen() {
  highScoreButtons.style.display = "block";
  scoreList.style.display="block";
  answerButtonsDiv.style.display = "none";
  currentQuestion.style.display = "none";
  startBtn.style.display = "none";
  initialForm.style.display = "none";
  highScoreButtons.style.justifyContent="center";
  titleText.textContent = "Highscores"
  currentQuestion.textContent = ""
  console.log("high score screen called")
  var backButton = document.getElementById("goBack");
  backButton.addEventListener("click", function(event) {
    event.preventDefault;
    startBtn.removeEventListener("click",function(){})
    submitButton.removeEventListener("click",function(){})
    startScreen();
    console.log("back clicked")
  })
  var clearScores = document.getElementById("clearScores");
  clearScores.addEventListener("click", function() {
    console.log("clear scores pressed")
    if (scoreList.firstChild) {
      scoreList.removeChild(scoreList.lastChild)
      console.log("has child nodes")
    }
  })
  
}


//Timer

function setTime() {
  
      timerInterval = setInterval(function () {
      //Should return "Time: 72" or whatever the counter's at
      countSpace.textContent = secondsLeft;
      secondsLeft--
      if (secondsLeft === 0) {
        clearInterval(timerInterval);
        endScreen();
      }
    }, 1000);
  } 


// quizScreens()
// endScreen()
// highScoreScreen()
startScreen()