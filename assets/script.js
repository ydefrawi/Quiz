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
    Q: "Who was the Norse god of mischief?",
    choices: ["Odin","Frigg","Loki","Baldur"],
    A: "Loki",
  },
  {
    Q: "Who was the Egyptian goddess of the moon?",
    choices: ["Ra","Anubis","Isis","Ma'at"],
    A: "Isis",
  },
  {
    Q: "Who was the King of the Roman pantheon?",
    choices: ["Jupiter","Mars","Venus","Apollo"],
    A: "Jupiter"
  },
  {
    Q: "Who was the Greek god of getting hammered and engaging in ritual madness?",
    choices:["Zeus","Poseidon","Ares","Dionysos"],
    A: "Dionysos"
  }
]

//checking array output
console.log(answers[1].Q)
console.log(answers[1].choices[1])

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

// startBtn.addEventListener("click", function() {
//   setTime();
//   startBtn.style.display = "none";
//   quizScreens();

// })
startScreen()

function startScreen(){
  startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";
  quizScreens();
  })
}

function quizScreens() {
  // var correctAnswer;
  // var userAnswer;
  answerButtonsDiv.style.display = "block";
  for (var i = 0; i < numberOfQuestions; i++) {
    currentQuestion.textContent = answers[0].Q;
      ansBtn1.textContent = answers[i].choices[0];
      ansBtn2.textContent = answers[i].choices[1];
      ansBtn3.textContent = answers[i].choices[2];
      ansBtn4.textContent = answers[i].choices[3];
    console.log(answers[i].choices[1])
    evaluateAns();
  }

}

function evaluateAns() {
  var correctAnswer;
  var userAnswer;
  ansBtn1.addEventListener("click", function(){
    userAnswer = ansBtn1.textContent;
    console.log(userAnswer)
  })
  ansBtn2.addEventListener("click", function(){
    userAnswer = ansBtn2.textContent;
    console.log(userAnswer)
  })
  ansBtn3.addEventListener("click", function(){
    userAnswer = ansBtn3.textContent;
    console.log(userAnswer)
  })
  ansBtn4.addEventListener("click", function(){
    userAnswer = ansBtn4.textContent;
    console.log(userAnswer)
  })
  if (userAnswer == answers[0].A) {
    correctAnswer = True;
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



