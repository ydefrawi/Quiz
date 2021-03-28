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
var answers = [
  {
    Q: "Who was the Norse god of motherhood?",
    q1answers: ["Odin","Frigg","Loki","Baldur"],
    A: "Odin",
  },
  {
    Q: "Who was the Egyptian goddess of the moon?",
    q2answers: ["Ra","Anubis","Isis","Ma'at"],
  },
  {
    q3answers: ["Jupiter","Mars","Venus","Apollo"],
  },
  {
    q4answers:["Zeus","Poseidon","Ares","Dionysos"],
  }
]

//checking array output
console.log(answers[1].Q)
console.log(answers[1].q2answers[1])

//var totalQuestions=questions.length;
//console.log(totalQuestions)

//Sets number of seconds in timer 
var secondsLeft=75;
//sets a space for the timer to appear at the top right 
var countSpace = document.querySelector("#countSpace");


//---------trying to figure out how to change my 4 button names the answer values stored inq1Answers)
var choice1 = document.getElementById("multipleChoice").children[2];

console.log(choice1)

//hides answer buttons div 
answerButtonsDiv.style.display = "none";

startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";
  quizScreens();
  //Shows question buttons. MIGHT NEED TO PUT ELSEWHERE
 // answerButtons.style.display = "block";
})


function quizScreens() {
  answerButtonsDiv.style.display = "block";
  for (var i = -1; i < numberOfQuestions; i++) {
    currentQuestion.textContent = answers[0].Q;
    if (questionNumber === 0) {
      for (var i = 0; i < 4; i++) {
        ansBtn1.textContent = answers[0].q1answers[2];
      }
    } else if (questionNumber === 1) {
      ansBtn2.textContent = answers[1].q2answers[3];
    }

  }
}

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



