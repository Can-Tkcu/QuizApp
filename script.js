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
    question: "Welches Spiel war das erste Computerspiel?",
    answer_1: "Pong",
    answer_2: "Spacewar!",
    answer_3: "Minecraft",
    answer_4: "Half-Life",
    right_answer: 1,
  },
  {
    question: "Wähle die am meisten verkaufte Konsole",
    answer_1: "Game Cube",
    answer_2: "NES",
    answer_3: "PS2",
    answer_4: "XBOX 1",
    right_answer: 3,
  },
  {
    question: "Welches Spiel ist das am meisten gespielte Spiel aller Zeiten?",
    answer_1: "Fortnite",
    answer_2: "Roblox",
    answer_3: "Minecraft",
    answer_4: "Sea of Thieves",
    right_answer: 1,
  },
  {
    question: "Nach welchem Essen wurde Pacman designed?" ,
    answer_1: "Wunderkugel",
    answer_2: "Kekse",
    answer_3: "Käse",
    answer_4: "Pizza",
    right_answer: 4,
  },
  {
    question: "Wie viele Half-Life Teile gibt es?",
    answer_1: "3",
    answer_2: "2",
    answer_3: "3",
    answer_4: "3",
    right_answer: 2,
  },
];


/**TODO
 * responsive 
 * finish end screen
 */
let rightAnsweredQuestions = 0;

let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio("audio/success.mp3");

let AUDIO_FAIL = new Audio("audio/fail.mp3");

let AUDIO_BEGIN = new Audio("audio/begin.mp3")

let AUDIO_END = new Audio("audio/end.mp3")

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
    AUDIO_END.play();
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
    AUDIO_END.play();
    document.getElementById("quiz-start").classList.add("d-none");
    document.getElementById("quiz-end").classList.remove("d-none");
    document.getElementById("quiztotal-end").innerHTML = questionsB.length;
    document.getElementById("end-score-correct-answers").innerHTML =  rightAnsweredQuestions;
}

function returnToStart(){
  document.getElementById("quiz-end").classList.add("d-none");
  document.getElementById("quiz-start").classList.add("d-none");
  document.getElementById("javascript-quiz").classList.add("d-none");
  document.getElementById("start-quiz").classList.remove("d-none");
  rightAnsweredQuestions = 0;
  currentQuestion = 0;
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
  document.getElementById("quiz-start").classList.remove("d-none");
}

/**initiates JS Quiz */
function SelectQuizA(){
  document.getElementById('start-quiz').classList.add('d-none');
  initA();
  AUDIO_BEGIN.play();
}
/**initiates Games Quiz */
function SelectQuizB(){
  document.getElementById('start-quiz').classList.add('d-none');
  initB();
  AUDIO_BEGIN.play();
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
  document.getElementById("quiz-type").innerHTML = "Games quiz wurde beendet";
}


