/**JAVASCRIPT QUIZ */
let questionsA = [
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

/**GAMES QUIZ */
let questionsB = [
  {
    question: "TEST",
    answer_1: "Rammstein",
    answer_2: "Brandan Eich",
    answer_3: "Elon Musk",
    answer_4: "Olaf Scholz",
    right_answer: 2,
  },
  {
    question: "TEST",
    answer_1: "42",
    answer_2: "0",
    answer_3: "7",
    answer_4: "1337",
    right_answer: 3,
  },
  {
    question: "TEST",
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
    question: "TEST" ,
    answer_1: "let gamma = zeta.ArrayInit",
    answer_2: "let z = >.<",
    answer_3: "let x = <.<",
    answer_4: "let x = [];",
    right_answer: 4,
  },
  {
    question: "TEST",
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

///////////////////////////////////////////////////////////////////////////////////JAVASCRIPT QUIZ////////////////////////////////////////////////////////////////////////////////////

function initA() {
  showQuiz();
  showQuestionA();
}

function showQuestionA() {
  let question = questionsA[currentQuestion];
  if (gameIsOverA()) {
      showEndScreen();
  } else {
      displayCurrentQuestion(question);
      updateQuestionA();
      updateProgressBarA();
  }
}

function selected(answer) {
  let question = questionsA[currentQuestion];
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
  disableSelection();
  document.getElementById("next-question").disabled = false;
}

function nextQuestionA() {
  currentQuestion++;
  showQuestionA();
  resetCard();
  enableSelection();
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

function restartGameA() {
  document.getElementById("quiz-start").classList.remove("d-none");
  document.getElementById("quiz-end").classList.add("d-none");
  rightAnsweredQuestions = 0;
  currentQuestion = 0;
  initA();
}

function showEndScreen(){
    document.getElementById("quiz-start").classList.add("d-none");
    document.getElementById("quiz-end").classList.remove("d-none");
    document.getElementById("quiztotal-end").innerHTML = questionsA.length;
    document.getElementById("end-score-correct-answers").innerHTML =  rightAnsweredQuestions;
}

function updateProgressBarA(){
  let percent = (currentQuestion) / questionsA.length;
  percent = percent * 100;
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%`;
}
 
function updateQuestionA(){
  document.getElementById("quiztotal").innerHTML = questionsA.length;
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}

function displayCurrentQuestion(question){
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function gameIsOverA(){
  return currentQuestion >= questionsA.length;
}

function disableSelection(){
  document.getElementById("answer_a").style.pointerEvents = 'none';
  document.getElementById("answer_b").style.pointerEvents = 'none';
  document.getElementById("answer_c").style.pointerEvents = 'none';
  document.getElementById("answer_d").style.pointerEvents = 'none';
}

function enableSelection(){
  document.getElementById("answer_a").style.pointerEvents = 'auto'; 
  document.getElementById("answer_b").style.pointerEvents = 'auto'; 
  document.getElementById("answer_c").style.pointerEvents = 'auto'; 
  document.getElementById("answer_d").style.pointerEvents = 'auto'; 
}

///////////////////////////////////////////////////////////////////////////////////JAVASCRIPT QUIZ END////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////GAMES QUIZ/////////////////////////////////////////////////////////////////////////////////////////////

function initB() {
  showQuiz();
  showQuestionB();
}

function showQuestionB() {
  let question = questionsB[currentQuestion];
  if (gameIsOverB()) {
      showEndScreen();
  } else {
      displayCurrentQuestion(question);
      updateQuestionB();
      updateProgressBarB();
  }
}

function selected(answer) {
  let question = questionsB[currentQuestion];
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
  disableSelection();
  document.getElementById("next-question").disabled = false;
}

function nextQuestionB() {
  currentQuestion++;
  showQuestionB();
  resetCard();
  enableSelection();
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

function restartGameB() {
  document.getElementById("quiz-start").classList.remove("d-none");
  document.getElementById("quiz-end").classList.add("d-none");
  rightAnsweredQuestions = 0;
  currentQuestion = 0;
  initB();
}

function showEndScreen(){
    document.getElementById("quiz-start").classList.add("d-none");
    document.getElementById("quiz-end").classList.remove("d-none");
    document.getElementById("quiztotal-end").innerHTML = questionsB.length;
    document.getElementById("end-score-correct-answers").innerHTML =  rightAnsweredQuestions;
}

function updateProgressBarB(){
  let percent = (currentQuestion) / questionsB.length;
  percent = percent * 100;
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%`;
}
 
function updateQuestionB(){
  document.getElementById("quiztotal").innerHTML = questionsB.length;
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}

function displayCurrentQuestion(question){
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function gameIsOverB(){
  return currentQuestion >= questionsB.length;
}

function disableSelection(){
  document.getElementById("answer_a").style.pointerEvents = 'none';
  document.getElementById("answer_b").style.pointerEvents = 'none';
  document.getElementById("answer_c").style.pointerEvents = 'none';
  document.getElementById("answer_d").style.pointerEvents = 'none';
}

function enableSelection(){
  document.getElementById("answer_a").style.pointerEvents = 'auto'; 
  document.getElementById("answer_b").style.pointerEvents = 'auto'; 
  document.getElementById("answer_c").style.pointerEvents = 'auto'; 
  document.getElementById("answer_d").style.pointerEvents = 'auto'; 
}

///////////////////////////////////////////////////////////////////////////////////GAMES QUIZ END//////////////////////////////////////////////////////////////////////////////////////

function showQuiz(){
  document.getElementById('javascript-quiz').classList.remove('d-none');
}

/**initiates JS Quiz */
function SelectQuizA(){
  document.getElementById('start-quiz').classList.add('d-none');
  initA();
  
}
/**initiates Games Quiz */
function SelectQuizB(){
  document.getElementById('start-quiz').classList.add('d-none');
  initB();
}
/**selects JS Quiz */
function selectA(){
  document.getElementById("quiz-button").setAttribute( "onClick", "SelectQuizA()" );
  document.getElementById("next-question").setAttribute( "onClick", "nextQuestionA()" );
  document.getElementById("restart-button").setAttribute( "onClick", "restartGameA()" );
  document.getElementById("JS").classList.add('selected');
  document.getElementById("GM").classList.remove('selected');
}
/**selects Games Quiz */
function selectB(){
  document.getElementById("quiz-button").setAttribute( "onClick", "SelectQuizB()" );
  document.getElementById("next-question").setAttribute( "onClick", "nextQuestionB()" );
  document.getElementById("restart-button").setAttribute( "onClick", "restartGameB()" );
  document.getElementById("GM").classList.add('selected');
  document.getElementById("JS").classList.remove('selected');
}