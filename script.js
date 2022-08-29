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
    answer_1: "Java ist eine OOP-Programmiersprache, während JavaScript eine OOP-Skriptingsprache ist",
    answer_2: "Java wurde nur für Minecraft entwickelt, während JavaScript universell ist",
    answer_3: "JavaScript und Java sind beide gleich",
    answer_4: "Java ist der große Bruder von JavaScript, daher sind beide fast gleich",
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
    answer_2: "For-Schleifen sind ein einfaches Werkzeug, um einzelne Schritte wiederholt auszuführen",
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


let rightAnsweredQuestions = 0;

let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio("audio/success.mp3");

let AUDIO_FAIL = new Audio("audio/fail.mp3");

let AUDIO_BEGIN = new Audio("audio/begin.mp3")

let AUDIO_END = new Audio("audio/end.mp3")

let JS = questionsA;
let GM = questionsB;

///////////////////////////////////////////////////////////////////////////////////JAVASCRIPT QUIZ////////////////////////////////////////////////////////////////////////////////////////

function initA() {
  showQuiz();
  showQuestion(JS);
}

/**initiates JS Quiz */
function SelectQuizA(){
  document.getElementById('start-quiz').classList.add('d-none');
  initA();
  AUDIO_BEGIN.play();
}

/**selects JS Quiz */
function selectA(){
  document.getElementById("quiz-button").setAttribute( "onClick", "SelectQuizA()" );
  document.getElementById("next-question").setAttribute( "onClick", "nextQuestion(JS)" );
  document.getElementById("restart-button").setAttribute( "onClick", "restartGame(initA)" );
  document.getElementById("answer_a").setAttribute( "onClick", "selected('answer_1', JS)" );
  document.getElementById("answer_b").setAttribute( "onClick", "selected('answer_2', JS)" );
  document.getElementById("answer_c").setAttribute( "onClick", "selected('answer_3', JS)" );
  document.getElementById("answer_d").setAttribute( "onClick", "selected('answer_4', JS)" );
  document.getElementById("JS").classList.add('selected');
  document.getElementById("GM").classList.remove('selected');
  document.getElementById("quiz-type").innerHTML = "JavaScript Quiz beendet!";
  document.getElementById("quiz-button").disabled = false;
}

///////////////////////////////////////////////////////////////////////////////////JAVASCRIPT QUIZ END////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////GAMES QUIZ/////////////////////////////////////////////////////////////////////////////////////////////

function initB() {
  showQuiz();
  showQuestion(GM);
}

/**initiates Games Quiz */
function SelectQuizB(){
  document.getElementById('start-quiz').classList.add('d-none');
  initB();
  AUDIO_BEGIN.play();
  
}

/**selects Games Quiz */
function selectB(){
  document.getElementById("quiz-button").setAttribute( "onClick", "SelectQuizB()" );
  document.getElementById("next-question").setAttribute( "onClick", "nextQuestion(GM)" );
  document.getElementById("restart-button").setAttribute( "onClick", "restartGame(initB)" );
  document.getElementById("answer_a").setAttribute( "onClick", "selected('answer_1', GM)" );
  document.getElementById("answer_b").setAttribute( "onClick", "selected('answer_2', GM)" );
  document.getElementById("answer_c").setAttribute( "onClick", "selected('answer_3', GM)" );
  document.getElementById("answer_d").setAttribute( "onClick", "selected('answer_4', GM)" );
  document.getElementById("GM").classList.add('selected');
  document.getElementById("JS").classList.remove('selected');
  document.getElementById("quiz-type").innerHTML = "Games Quiz beendet!";
  document.getElementById("quiz-button").disabled = false;
}

///////////////////////////////////////////////////////////////////////////////////GAMES QUIZ END/////////////////////////////////////////////////////////////////////////////////////////

function selected(answer, question) {
  let rightAnswer = question[currentQuestion]["right_answer"];
  let selectedQuestionNumber = answer.slice(-1);
  let correctAnswerId = `answer_${rightAnswer}`;
  if (selectedQuestionNumber == rightAnswer) {
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

function nextQuestion(quiztype) {
  currentQuestion++;
  showQuestion(quiztype);
  resetCard();
  enableSelection();
  document.getElementById("next-question").disabled = true;
}

function showQuestion(quiztype) {
  if (gameIsOver()) {
      showEndScreen();
  } else {
    if(quiztype == questionsA) {
      displayCurrentQuestion(questionsA[currentQuestion]);
    } else {
      displayCurrentQuestion(questionsB[currentQuestion]);
    }
      updateQuestion();
      updateProgressBar();
  }
}

function displayCurrentQuestion(question){
  document.getElementById("questiontext").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateQuestion(){
  document.getElementById("quiztotal").innerHTML = questionsA.length;
  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}

function updateProgressBar(){
  let percent = (currentQuestion) / questionsA.length;
  percent = percent * 100;
  document.getElementById("progress-bar").innerHTML = `${percent}%`;
  document.getElementById("progress-bar").style = `width: ${percent}%`;
}

function restartGame(init) {
  document.getElementById("quiz-start").classList.remove("d-none");
  document.getElementById("quiz-end").classList.add("d-none");
  ResetVarsToZero();
  init();
}

/**game over listener*/
function gameIsOver(){
  return currentQuestion >= questionsA.length;
}

/**Returns the User back to the starting screen */
function returnToStart(){
  document.getElementById("quiz-end").classList.add("d-none");
  document.getElementById("quiz-start").classList.add("d-none");
  document.getElementById("javascript-quiz").classList.add("d-none");
  document.getElementById("start-quiz").classList.remove("d-none");
  ResetVarsToZero();
}

/**Disables answer selection */
function disableSelection(){
  document.getElementById("answer_a").style.pointerEvents = 'none';
  document.getElementById("answer_b").style.pointerEvents = 'none';
  document.getElementById("answer_c").style.pointerEvents = 'none';
  document.getElementById("answer_d").style.pointerEvents = 'none';
}

/**Enables answer selection */
function enableSelection(){
  document.getElementById("answer_a").style.pointerEvents = 'auto'; 
  document.getElementById("answer_b").style.pointerEvents = 'auto'; 
  document.getElementById("answer_c").style.pointerEvents = 'auto'; 
  document.getElementById("answer_d").style.pointerEvents = 'auto'; 
}

/**Resets Variables to Zero */
function ResetVarsToZero() {
  rightAnsweredQuestions = 0;
  currentQuestion = 0;
}

/**displays quiz */
function showQuiz(){
  document.getElementById('javascript-quiz').classList.remove('d-none');
  document.getElementById("quiz-start").classList.remove("d-none");
}

/**Resets the selection after each question */
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

/**displays Endscreen */
function showEndScreen(){
  AUDIO_END.play();
  document.getElementById("quiz-start").classList.add("d-none");
  document.getElementById("quiz-end").classList.remove("d-none");
  document.getElementById("quiztotal-end").innerHTML = questionsA.length;
  document.getElementById("end-score-correct-answers").innerHTML =  rightAnsweredQuestions;
}


