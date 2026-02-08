const fragenListe = [
  {
    frage: "Was ist die Hauptstadt von Deutschland?",
    antwort1: "München",
    antwort2: "Berlin",
    antwort3: "Hannover",
    antwort4: "Hamburg",
  },
  {
    frage: "Was ist die Hauptstadt von Frankreich?",
    antwort1: "Lyon",
    antwort2: "Marseille",
    antwort3: "Paris",
    antwort4: "Bordeaux",
  },
];

let anser1;
let anser2;
let anser3;
let anser4;
let anser1Text;
let anser2Text;
let anser3Text;
let anser4Text;

let a = 0;

function nextQuestion() {
  if (a === 1) {
    a = 0;
  } else {
    a = 1;
  }

  let frage1 = fragenListe[a];

  let container = document.createElement("div");
  container.classList.add("container");

  let heading = document.createElement("span");
  let headingText = document.createTextNode(frage1.frage);
  heading.appendChild(headingText);
  heading.classList.add("heading");

  let ansers = document.createElement("div");

  anser1 = document.createElement("button");
  anser1Text = document.createTextNode(frage1.antwort1);
  anser1.appendChild(anser1Text);
  anser1.classList.add("anser");
  anser1.id = "first";
  anser1.setAttribute("onclick", `clickAnser( "first")`);

  anser2 = document.createElement("button");
  anser2Text = document.createTextNode(frage1.antwort2);
  anser2.appendChild(anser2Text);
  anser2.classList.add("anser");
  anser2.id = "second";
  anser2.setAttribute("onclick", `clickAnser("second")`);

  anser3 = document.createElement("button");
  anser3Text = document.createTextNode(frage1.antwort3);
  anser3.appendChild(anser3Text);
  anser3.classList.add("anser");
  anser3.id = "third";
  anser3.setAttribute("onclick", `clickAnser("third")`);

  anser4 = document.createElement("button");
  anser4Text = document.createTextNode(frage1.antwort4);
  anser4.appendChild(anser4Text);
  anser4.classList.add("anser");
  anser4.id = "fourth";
  anser4.setAttribute("onclick", `clickAnser("fourth")`);

  ansers.appendChild(anser1);
  ansers.appendChild(anser2);
  ansers.appendChild(anser3);
  ansers.appendChild(anser4);
  ansers.classList.add("ansers");

  container.appendChild(heading);
  container.appendChild(ansers);

  document.getElementById("test").replaceChildren(container);
  anser1.classList.remove("green");
  anser2.classList.remove("green");
  anser3.classList.remove("green");
  anser4.classList.remove("green");
}

function solution() {
  if (anser1Text.nodeValue === "Berlin" || anser1Text.nodeValue === "Paris") {
    anser1.classList.add("green");
  } else if (
    anser2Text.nodeValue === "Berlin" ||
    anser2Text.nodeValue === "Paris"
  ) {
    anser2.classList.add("green");
  } else if (
    anser3Text.nodeValue === "Berlin" ||
    anser3Text.nodeValue === "Paris"
  ) {
    anser3.classList.add("green");
  } else if (
    anser4Text.nodeValue === "Berlin" ||
    anser4Text.nodeValue === "Paris"
  ) {
    anser4.classList.add("green");
  }
}

function clickAnser(id) {
  solution();

  if (
    (id === "first") &
    (anser1Text.nodeValue !== "Berlin") &
    (anser1Text.nodeValue !== "Paris")
  ) {
    anser1.classList.add("red");
    alert("Antwort ist falsch");
  } else if (
    (id === "second") &
    (anser2Text.nodeValue !== "Berlin") &
    (anser2Text.nodeValue !== "Paris")
  ) {
    anser2.classList.add("red");
    alert("Antwort ist falsch");
  } else if (
    (id === "third") &
    (anser3Text.nodeValue !== "Berlin") &
    (anser3Text.nodeValue !== "Paris")
  ) {
    anser3.classList.add("red");
    alert("Antwort ist falsch");
  } else if (
    (id === "fourth") &
    (anser4Text.nodeValue !== "Berlin") &
    (anser4Text.nodeValue !== "Paris")
  ) {
    anser4.classList.add("red");
    alert("Antwort ist falsch");
  } else {
    alert("Antwort ist richtig");
  }
}
