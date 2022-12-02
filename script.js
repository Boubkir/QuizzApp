let questions = [
    {
        "question": "Das flächenmäßig kleinste Bundesland heißt?",
        "answer_1": "Berlin",
        "answer_2": "Bremen",
        "answer_3": "Saarland",
        "answer_4": "Hamburg",
        "right_answer": 2,
    },
    {
        "question": "Was bedeutet das lateinische “carpe diem”?",
        "answer_1": "Genieße das Leben",
        "answer_2": "Nutze den Tag",
        "answer_3": "Dein Tag wird toll werden",
        "answer_4": "Man sieht sich immer zweimal im Leben",
        "right_answer": 2,
    },
    {
        "question": "Was ist die “Goldene Himbeere”?",
        "answer_1": "Ein Preis für die schlechteste Leistung innerhalb eines Filmjahres",
        "answer_2": "Eine Nachspeise aus Russland",
        "answer_3": "Das teuerste Schmuckstück der Welt",
        "answer_4": "Das Symbol einer Sekte",
        "right_answer": 1,
    },
    {
        "question": "Welcher deutsche Herrscher trug den Beinamen “der Große”?",
        "answer_1": "Friedrich der I. von Preußen",
        "answer_2": "Friedrich der III. von Sachsen",
        "answer_3": "Friedrich II. von Preußen",
        "answer_4": "Friedrich der III. von Österreich",
        "right_answer": 3,
    },
    {
        "question": "Welche Gürtelfarbe existiert nicht im Kampfsport Karate?",
        "answer_1": "Schwarz",
        "answer_2": "Weiß",
        "answer_3": "Braun",
        "answer_4": "Rot",
        "right_answer": 4,
    },
    {
        "question": "Einen Feinschmecker nennt man auch?",
        "answer_1": "Gourmet",
        "answer_2": "Gourmed",
        "answer_3": "Genießer",
        "answer_4": "Leckermäulchen",
        "right_answer": 1,
    },
    {
        "question": "Welcher Pilz ist einer der giftigsten der Welt?",
        "answer_1": "Der Fliegenpilz",
        "answer_2": "Der Grüne Knollenblätterpilz",
        "answer_3": "Der Gemeine Kartoffelbovist",
        "answer_4": "Der Satansröhrling",
        "right_answer": 2,
    },
    {
        "question": "Welche Insel gehört nicht zu den balearischen Inseln?",
        "answer_1": "Ibiza",
        "answer_2": "Formentera",
        "answer_3": "Cabrera",
        "answer_4": "Gran Canaria",
        "right_answer": 4,
    },
    {
        "question": "Welcher Schauspieler hat nicht in einem James Bond-Film mitgespielt?",
        "answer_1": "Timothy Dalton",
        "answer_2": "Leonardo DiCaprio",
        "answer_3": "Daniel Craig",
        "answer_4": "Javier Bardem",
        "right_answer": 2,
    },
    {
        "question": "Wer oder was ist eine “Druidin”?",
        "answer_1": "Eine Kräutersammlerin im Harz",
        "answer_2": "Eine Hunderasse aus China",
        "answer_3": "Ein Magnetfeld",
        "answer_4": "Eine Priesterin oder Zauberin der keltischen Religion",
        "right_answer": 4,
    },
    {
        "question": "Mit welcher Tiergruppe sind die Dinosaurier am engsten verwandt?",
        "answer_1": "Vögeln",
        "answer_2": "Eidechsen",
        "answer_3": "Alligatoren",
        "answer_4": "Affen",
        "right_answer": 1,
    },
    {
        "question": "Was meinen Weinkenner, wenn sie das Wort “rassig” verwenden?",
        "answer_1": "Es beschreibt Weine mit vielen Duftstoffen.",
        "answer_2": "Es beschreibt alkohol- und körperreiche Weine.",
        "answer_3": "Es beschreibt Weine mit einer ausgeglichenen, aber ausgeprägten Säure.",
        "answer_4": "Es beschreibt Weine, die im Geschmack an frisches Obst erinnern.",
        "right_answer": 3,
    },
    {
        "question": "Welches Metall leitet Wärme am besten?",
        "answer_1": "Silber",
        "answer_2": "Kupfer",
        "answer_3": "Gold",
        "answer_4": "Aluminium",
        "right_answer": 1,
    },
    {
        "question": "Wo herrscht kein Linksverkehr?",
        "answer_1": "Irland",
        "answer_2": "Indien",
        "answer_3": "Island",
        "answer_4": "Großbritannien",
        "right_answer": 3,
    },
    {
        "question": "Wie lautet die Hauptstadt von Frankreich",
        "answer_1": "Paris",
        "answer_2": "Amsterdam",
        "answer_3": "Oslo",
        "answer_4": "Zürich",
        "right_answer": 1,
    },
];


let rightAnswers = 0;
let currentQuestion = 0
let startGameAudio = new Audio('sounds/thinking.mp3');
let wrongAnswerAudio = new Audio('sounds/wronganswer.mp3');
let rightAnswerAudio = new Audio('sounds/rightanswer.mp3');


function init() {
    showQuestion()
}


function startQuiz() {
    document.getElementById('startquiz').style = 'display : none';
    document.getElementById('questioncontent').style = '';
    document.getElementById('nextbutton').style.opacity ='0.2';
}


function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndScreem();

    } else {
        showNextQuestion();
    }
    enablePointer();
}


function showNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question').innerHTML = `${question['question']}`;
    document.getElementById('answer1').innerHTML = `<div class="choise">A</div><div class="questionfield">${question['answer_1']}</div>`;
    document.getElementById('answer2').innerHTML = `<div class="choise">B</div><div class="questionfield">${question['answer_2']}</div>`;
    document.getElementById('answer3').innerHTML = `<div class="choise">C</div><div class="questionfield">${question['answer_3']}</div>`;
    document.getElementById('answer4').innerHTML = `<div class="choise">D</div><div class="questionfield">${question['answer_4']}</div>`;
    questionCounter();
    progressBar()
}


function showEndScreem(){
    document.getElementById('endscreen').style = '';
    document.getElementById('questioncontent').style = 'display : none';
    document.getElementById('score').innerHTML = `${rightAnswers}/${questions.length}`;
    currentQuestion = 0;
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question['right_answer']}`
    if (selectedQuestionNumber == question['right_answer']) {
        ifRightAnswer(selection);
    } else {
        ifWrongAnswer(idOfRightAnswer, selection);
    }
    document.getElementById('nextbutton').disabled = false;
};


function enablePointer(){
    document.getElementById('answer1').style.pointerEvents = 'unset';
    document.getElementById('answer2').style.pointerEvents = 'unset';
    document.getElementById('answer3').style.pointerEvents = 'unset';
    document.getElementById('answer4').style.pointerEvents = 'unset';
}


function disablePointer(){
    document.getElementById('answer1').style.pointerEvents = 'none';
    document.getElementById('answer2').style.pointerEvents = 'none';
    document.getElementById('answer3').style.pointerEvents = 'none';
    document.getElementById('answer4').style.pointerEvents = 'none';
}


function ifRightAnswer(selection) {
    document.getElementById(selection).classList.add('bggreen');
    document.getElementById(selection).firstChild.classList.add('bggreenletter');
    document.getElementById('nextbutton').style.opacity = '1';
    disablePointer()
    rightAnswerAudio.play();
    rightAnswers++
}


function ifWrongAnswer(idOfRightAnswer, selection) {
    document.getElementById(selection).classList.add('bgred');
    document.getElementById(selection).firstChild.classList.add('bgredletter');
    document.getElementById(idOfRightAnswer).classList.add('bggreen');
    document.getElementById(idOfRightAnswer).firstChild.classList.add('bggreenletter');
    document.getElementById('nextbutton').style.opacity = '1';
    disablePointer();
    wrongAnswerAudio.play();
}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    document.getElementById('nextbutton').disabled = true;
    document.getElementById('nextbutton').style.opacity ='0.2';
    resetAnswerButton();
}


function lastQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        resetAnswerButton();
    } else {
    }
}


function resetAnswerButton() {
    document.getElementById('answer1').classList.remove('bggreen');
    document.getElementById('answer2').classList.remove('bggreen');
    document.getElementById('answer3').classList.remove('bggreen');
    document.getElementById('answer4').classList.remove('bggreen');
    document.getElementById('answer1').classList.remove('bgred');
    document.getElementById('answer2').classList.remove('bgred');
    document.getElementById('answer3').classList.remove('bgred');
    document.getElementById('answer4').classList.remove('bgred');
}


function questionCounter() {
    document.getElementById('questioncount').innerHTML = `${currentQuestion + 1} von ${questions.length} Fragen`
}


function replay() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('endscreen').style = 'display : none';
    document.getElementById('questioncontent').style = '';
    showQuestion()
}


function share(){
    window.alert('Ich weiß noch nicht wie man seiten Teilt :D')
}

function progressBar(){
    let succes = (currentQuestion/questions.length)*100;
    document.getElementById('myBar').style.width = `${succes}%`;
}