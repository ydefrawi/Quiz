// //  Selects carousel element
// var carousel = document.querySelector(".carouselbox");

// // Selects buttons using their parent carousel element
// var next = carousel.querySelector(".next");
// var prev = carousel.querySelector(".prev");


var startBtn = document.getElementById("startQuiz");
var currentQuestion = document.querySelector("#newQuestion")
var q1Answers = ["Walter PPK", "AR-15", "Famas", "Sdar"];
var q1 = "What's my name?"
//number of quiz questions
var numQuestions;
//Sets number of seconds in timer 
var secondsLeft=75;

//sets a space for the timer to appear at the top right 
var countSpace = document.querySelector("#countSpace");
console.log(countSpace)

startBtn.addEventListener("click", function() {
  setTime();
  startBtn.style.display = "none";
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



