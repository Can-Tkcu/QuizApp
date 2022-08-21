let questions = [
  {
    question: "Wer hat JavaScript erfunden?",
    answer_1: "Rammstein",
    answer_2: "Brandan Eich",
    answer_3: "Elon Musk",
    answer_4: "Olaf Scholz",
    right_answer: 2,
  },
  {
    question: "Wie viele Datentypen/Datenstrukturen besitzt JavaScript?",
    answer_1: "42",
    answer_2: "0",
    answer_3: "7",
    answer_4: "1337",
    right_answer: 3,
  },
  {
    question: "Was ist der Unterschied zwischen Java und JavaScript?",
    answer_1:
      "Java ist eine OOP-Programmiersprache, während JavaScript eine OOP-Skriptingsprache ist",
    answer_2:
      "Java wurde nur für Minecraft entwickelt, während JavaScript universell ist",
    answer_3: "JavaScript und Java sind beide gleich",
    answer_4:
      "Java ist der große Bruder von JavaScript, daher sind beide fast gleich",
    right_answer: 1,
  },
  {
    question: "Wie erstellt man ein Array in JavaScript?",
    answer_1: "let gamma = zeta.ArrayInit",
    answer_2: "let z = >.<",
    answer_3: "let x = <.<",
    answer_4: "let x = [];",
    right_answer: 4,
  },
  {
    question: "Was macht eine for-Schleife?",
    answer_1: "Eine Methode um sich die Schuhe zu zubinden",
    answer_2:
      "For-Schleifen sind ein einfaches Werkzeug, um einzelne Schritte wiederholt auszuführen",
    answer_3: "Eine for-Schleife bindet externe Webseiten ein",
    answer_4: "Mit der for-Schleife kann man Krawattenbindeprogramme coden",
    right_answer: 2,
  },
];

let rightAnsweredQuestions = 0;

let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio("audio/success.mp3");

let AUDIO_FAIL = new Audio("audio/fail.mp3");

function init() {
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  if (gameIsOver()) {
      showEndScreen();
  } else {
      displayCurrentQuestion(question);
      updateQuestion();
      updateProgressBar();
  }
}

function selected(answer) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = answer.slice(-1);
  let correctAnswerId = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    AUDIO_SUCCESS.play();
    document.getElementById(answer).parentNode.classList.add("bg-success");
    rightAnsweredQuestions++;
  } else {
    AUDIO_FAIL.play();
    document.getElementById(answer).parentNode.classList.add("bg-danger");
    document.getElementById(correctAnswerId).parentNode.classList.add("bg-success");
  }
  document.getElementById("next-question").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  resetCard();
  document.getElementById("next-question").disabled = true;
}

function resetCard() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
}

function restartGame() {
  document.getElementById("quiz-start").classList.remove("d-none");
  document.getElementById("quiz-end").classList.add("d-none");
  rightAnsweredQuestions = 0;
  currentQuestion = 0;
  init();
}

function showEndScreen(){
    document.getElementById("quiz-start").classList.add("d-none");
    document.getElementById("quiz-end").classList.remove("d-none");
    document.getElementById("quiztotal-end").innerHTML = questions.length;
    document.getElementById("end-score-correct-answers").innerHTML =  rightAnsweredQuestions;
}

function updateProgressBar(){
  let percent = (currentQuestion + 1) / questions.length;
  percent = percent * 100;
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%`;
}
 
function updateQuestion(){
  document.getElementById("quiztotal").innerHTML = questions.length;
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}

function displayCurrentQuestion(question){
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function gameIsOver(){
  return currentQuestion >= questions.length;
}