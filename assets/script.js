
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
var numberOfQuestions=4;
var questionNumber=0;
var submitButton = document.getElementById("submitScore")
var userInitials = document.getElementById("initialText")
var scoreList = document.getElementById("scoreList")
var highScoreButtons = document.getElementById("highScoreButtons")
//var questions = ["Question 1?","Question2?","Question 3?", "Question 4?", "Question 5?"];
var scores=[];
var answerButtons = document.getElementsByClassName("answerButton")

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
  }
]



//Sets number of seconds in timer 
var secondsLeft=75;
//sets a space for the timer to appear at the top right 
var countSpace = document.querySelector("#countSpace");
// endScreen()
// highScoreScreen()
startScreen()

//The applies to the initial screen baked into the HTML
function startScreen(){
  initialForm.style.display = "none";
  highScoreButtons.style.display="none"
  answerButtonsDiv.style.display = "none";
  startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";
  for (let index = 0; index < answerButtons.length; index++) {
    //answerButtons[0], answerButtons[1], answerButtons[2], 
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
}


//Quiz question screens.Displays buttons, populates them with the choices, and listens for button clicks
function quizScreens() {
    console.log("quizScreens() function called")
    answerButtonsDiv.style.display = "block";
    currentQuestion.textContent = questions[questionNumber].Q;
    ansBtn1.textContent = questions[questionNumber].choices[0];
    ansBtn2.textContent = questions[questionNumber].choices[1];
    ansBtn3.textContent = questions[questionNumber].choices[2];
    ansBtn4.textContent = questions[questionNumber].choices[3];

    

  console.log("Question Number (this is in quizScreens): "+questionNumber)
}

//Evaluates whether they selected the correct answer
function evaluateAns(userAnswer) {
  console.log("evaluateAns() function called")
  var correctAnswer = questions[questionNumber].A;
  console.log("Correct Answer: " + questions[questionNumber].A)
  rightWrong.style.display="block"
  if (userAnswer == correctAnswer) {
    rightWrong.textContent = "Correct!"
  } else {
    rightWrong.textContent = "Wrong! 10 Seconds Removed!"
    secondsLeft-=10;
  }
  questionNumber+=1;
  if (questionNumber >= 4) {
    endScreen()
  } else {
    quizScreens();
  }
}

//Screen showing final score
function endScreen() {
  initialForm.style.display = "block";
  highScoreButtons.style.display = "none";
  answerButtonsDiv.style.display = "none";
  startBtn.style.display = "none";
  titleText.textContent ="All Done!"
  titleText.setAttribute("Style", "margin-left:30px; text-align:left;")
  currentQuestion.textContent="Your final score is " + secondsLeft;
  currentQuestion.setAttribute("Style", "margin-left:30px; text-align:left;")
  submitButton.addEventListener("click", function (event) {
    var li = document.createElement("li")
    li.textContent=userInitials.value + " - finished with " + secondsLeft + " seconds remaining!";
    scoreList.appendChild(li);
    event.preventDefault();
    console.log(userInitials.value)
    highScoreScreen();
  })
  // var tag = document.createElement("p");
  // tag.textContent = "Enter Initials";
  // initials=document.getElementById("quiz-box")
  // initials.appendChild(tag);
  // var input = document.createElement("INPUT");
  // input.setAttribute("type", "text");
  // input.setAttribute("value", "Hello World!");
  // document.body.appendChild(input);
  // var input = document.createElement("INPUT");
  // input=document.getElementById("quiz-box");
  // input.setAttribute("type","text");
  // input.setAttribute("value", "hello world!")
  // input.appendChild(tag);
}

function highScoreScreen() {
  highScoreButtons.style.display = "block";
  highScoreButtons.style.justifyContent="center";
  titleText.textContent = "Highscores"
  answerButtonsDiv.style.display = "none";
  currentQuestion.style.display = "none";
  startBtn.style.display = "none";
  initialForm.style.display = "none";
  currentQuestion.textContent = ""
  console.log("high score screen called")
  var backButton = document.getElementById("goBack");
  backButton.addEventListener("click", function(event) {
    event.preventDefault;
    console.log("back clicked")

  })
}

// function renderScores(){
//   for (var i = 0; i < scores.length; i++) {
//     var scores = scores[i];

//     var li = document.createElement("li");
//     li.textContent = scores;
//     li.setAttribute("data-index", i);

//     scoresList.appendChild(li);
//   }
// }



//Timer
function setTime() {
    var timerInterval = setInterval(function(){
      //Should return "Time: 72" or whatever the counter's at
      countSpace.textContent = secondsLeft;
      secondsLeft--
      if(secondsLeft===0){
        clearInterval(timerInterval);
      }
    },1000);
}
