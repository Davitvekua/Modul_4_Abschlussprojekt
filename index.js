const fragenListe = [
  {
    frage: "Was ist die Hauptstadt von Deutschland?",
    antworten: ["München", "Berlin", "Hannover", "Hamburg"],
    richtigeAntwort: "Berlin",
  },
  {
    frage: "Was ist die Hauptstadt von Frankreich?",
    antworten: ["Lyon", "Marseille", "Paris", "Bordeaux"],
    richtigeAntwort: "Paris",
  },
];

function createAnsers(anserNominal) {
  const anser = document.createElement("button");
  const anserText = document.createTextNode(anserNominal);
  anser.appendChild(anserText);
  anser.classList.add("anser");
  anser.id = anserText.nodeValue;
  anser.setAttribute("onclick", `clickAnser( "${anserText.nodeValue}")`);
  return anser;
}

let questionIndex = 0;

function nextQuestion() {
  if (questionIndex >= fragenListe.length) {
    questionIndex = 0;
  }

  currentQuestion = fragenListe[questionIndex];
  questionIndex += 1;

  let container = document.createElement("div");
  container.classList.add("container");

  let heading = document.createElement("span");
  let headingText = document.createTextNode(currentQuestion.frage);
  heading.appendChild(headingText);
  heading.classList.add("heading");

  let ansers = document.createElement("div");

  currentQuestion.antworten.forEach((a) => {
    const createdAnser = createAnsers(a);
    ansers.appendChild(createdAnser);
  });

  ansers.classList.add("ansers");

  container.appendChild(heading);
  container.appendChild(ansers);

  document.getElementById("test").replaceChildren(container);
  // anser.classList.remove("green");
}

function solution() {
  document
    .getElementById(currentQuestion.richtigeAntwort)
    .classList.add("green");
}

function clickAnser(id) {
  solution();
  if (id !== currentQuestion.richtigeAntwort) {
    document.getElementById(id).classList.add("red");
    alert("Antwort ist falsch");
  } else {
    alert("Antwort ist richtig");
  }
}
