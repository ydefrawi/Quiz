var startBtn = document.getElementById("startQuiz");
var answerButtons = document.getElementById("multipleChoice")
var currentQuestion = document.querySelector("#newQuestion")
var questions = ["Question 1?","Question2?","Question 3?", "Question 4?", "Question 5?"];
var q1Answers = ["Walter PPK", "AR-15", "Famas", "Sdar"];

var totalQuestions=questions.length;
console.log(totalQuestions)
//number of quiz questions
var questionNumber;
//Sets number of seconds in timer 
var secondsLeft=75;
//sets a space for the timer to appear at the top right 
var countSpace = document.querySelector("#countSpace");

//hides answer buttons div initially 
answerButtons.style.display = "none";

startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";
  answerButtons.style.display = "block";
  for (questionNumber=0; questionNumber<totalQuestions; questionNumber++){
    currentQuestion.textContent = questions[questionNumber];
    
  }
})


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



