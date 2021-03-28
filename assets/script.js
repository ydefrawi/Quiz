var startBtn = document.getElementById("startQuiz")
var answerButtonsDiv = document.getElementById("multipleChoice")
var ansBtn1 = document.getElementById("choice1")
var ansBtn2 = document.getElementById("choice2")
var ansBtn3 = document.getElementById("choice3")
var ansBtn4 = document.getElementById("choice4")
var currentQuestion = document.querySelector("#newQuestion")
//number of quiz questions
var numberOfQuestions=4;
var questionNumber=0;
//var questions = ["Question 1?","Question2?","Question 3?", "Question 4?", "Question 5?"];

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


startScreen()

//The applies to the initial screen baked into the HTML
function startScreen(){
  answerButtonsDiv.style.display = "none";
  startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";
  quizScreens();
  })
}


//Quiz question screens. I'd like these to iterate through each question
function quizScreens() {
    answerButtonsDiv.style.display = "block";
    currentQuestion.textContent = questions[questionNumber].Q;
    ansBtn1.textContent = questions[questionNumber].choices[0];
    ansBtn2.textContent = questions[questionNumber].choices[1];
    ansBtn3.textContent = questions[questionNumber].choices[2];
    ansBtn4.textContent = questions[questionNumber].choices[3];

    for (let index = 0; index < answerButtons.length; index++) {
        answerButtons[index].addEventListener("click", function(event){
          console.log(event.target.textContent)
          evaluateAns(event.target.textContent)
        })
    }
  
    console.log(questionNumber)
    questionNumber++;
 
}

//Checks user button clicks and then evaluates whether they selected the correct answer
function evaluateAns(userAnswer) {
  var correctAnswer=questions[questionNumber].A;
  if (userAnswer == correctAnswer) {
    var isRight = true;
  } 

  quizScreens();
}

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
