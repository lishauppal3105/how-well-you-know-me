var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name : "Kavita",
    score : 5,
  },
  {
    name : "Neeta",
    score : 3,
  },
]

var listOfQuestions = [
  {
    question : "Where do I live? ",
    answer : "Faridabad",
  },
  {
    question : "How old I am? ",
    answer : "21",
  },
  {
    question : "What is my favourite color? ",
    answer : "blue",
  },
  {
    question : "Which is my favourite superhero? ",
    answer : "Iron Man",
  },
  {
    question : "Which is my favourite holiday destination? ",
    answer : "Manali"
  }
]

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome "+ userName + " to DO YOU KNOW Lisha?");
}


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are correct!");
    score = score + 1;
  }
  else{
    console.log("You are wrong..");
  }

  console.log("Your current score is " + score);
  console.log("----------------------");
}

function game() {
  for(var i=0; i<listOfQuestions.length; i++){
    var currentQuestion = listOfQuestions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("Wohoo!! You scored " + score);
  console.log("Check out the high scores, if you think you should be there, ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
