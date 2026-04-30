const revealButtons = [...document.querySelectorAll("[data-reveal]")];
const answerButtons = [...document.querySelectorAll(".answer")];
const welcomeScreen = document.getElementById("welcome-screen");
const resultContent = {
  abandonment: {
    title: "Tu patrón dominante es la herida de abandono emocional",
    intro:
      "Tus respuestas apuntan a una marca muy específica: aprendiste a vivir el amor con miedo a perderlo. Por eso puedes sobreentregar, esperar de más o quedarte en vínculos que te desgastan con tal de no volver a sentir el vacío.",
    key:
      "No estás exagerando lo que sientes. Tu sistema aprendió a vivir el amor como algo que puede irse en cualquier momento.",
    body1:
      "Cuando en la historia temprana hubo distancia emocional, ausencia, frialdad o una sensación constante de soledad, el corazón aprende a aferrarse incluso a lo que no le hace bien.",
    body2:
      "Eso hace que a veces confundas conexión con necesidad, y presencia con alivio momentáneo. No eliges solo a la persona: eliges la sensación conocida que intenta reparar una falta antigua.",
    quote:
      "Lo que más temes perder afuera muchas veces es lo que más te faltó adentro.",
    closing:
      "Entender esto cambia todo, porque deja de parecer que simplemente eliges mal. En realidad estás intentando resolver una herida que todavía sigue activa.",
    meaningTitle: "Lo que significa vivir desde la herida de abandono",
    meaningBody:
      "Cuando el abandono emocional marca tu historia, el amor suele sentirse inestable, incierto o demasiado valioso como para arriesgarte a perderlo. Por eso puedes tolerar más de lo que mereces o perseguir vínculos que no te sostienen."
  },
  approval: {
    title: "Tu patrón dominante es la necesidad de aprobación afectiva",
    intro:
      "Tus respuestas muestran que una parte profunda de ti aprendió a asociar amor con esfuerzo, mérito y validación. Eso hace que muchas veces sientas que para ser elegida debes demostrar, cuidar, sostener o convertirte en lo que el otro espera.",
    key:
      "No estás amando demasiado. Estás intentando ganar un amor que en algún momento sentiste condicionado.",
    body1:
      "Cuando el amor llegó con exigencia, comparación o condiciones emocionales, se instala la idea de que ser tú no basta y que necesitas hacer más para merecer cercanía.",
    body2:
      "El problema es que ese patrón te lleva a relaciones donde sigues buscando confirmación en lugar de descanso. Te vinculas desde el rendimiento, no desde la tranquilidad de sentirte suficiente.",
    quote:
      "Querer que te elijan no es el problema. El dolor empieza cuando sientes que tienes que ganarte el amor.",
    closing:
      "Ponerle nombre a esto es importante, porque te muestra que no estás fallando por insegura. Estás repitiendo una forma aprendida de buscar amor.",
    meaningTitle: "Lo que significa vivir buscando aprobación",
    meaningBody:
      "Cuando la aprobación se vuelve el centro del vínculo, el amor deja de ser refugio y se convierte en examen. Por eso puedes adaptarte demasiado, silenciarte o medir tu valor según la respuesta que recibes del otro."
  },
  rejection: {
    title: "Tu patrón dominante es la herida de rechazo relacional",
    intro:
      "Tus respuestas muestran una huella emocional ligada al rechazo: una sensación profunda de que mostrarte por completo puede terminar en distancia, desinterés o dolor. Por eso puedes cerrarte, desconfiar o quedarte en relaciones donde nunca te sientes del todo vista.",
    key:
      "No te cuesta amar. Te cuesta sentirte segura al ser vista tal como eres.",
    body1:
      "Cuando en la historia familiar hubo críticas, silencios, invalidez emocional o una sensación de no ser elegida de verdad, se instala el impulso de protegerte antes de exponerte.",
    body2:
      "Eso hace que a veces toleres migajas emocionales, porque una parte de ti ya aprendió a esperar poco. El patrón no está en tu valor: está en el lugar interno desde donde te relacionas.",
    quote:
      "Cuando el rechazo marca la historia, hasta el amor puede sentirse como algo que en cualquier momento te deja afuera.",
    closing:
      "Entender este patrón no solo explica lo que repites. También abre la posibilidad de dejar de leer tu historia como prueba de que no eres suficiente.",
    meaningTitle: "Lo que significa vivir desde la herida de rechazo",
    meaningBody:
      "La herida de rechazo hace que el vínculo se viva con hipersensibilidad, duda o autocontrol. Muchas veces no es que no quieras amor, sino que tu cuerpo no ha aprendido todavía a sentirse seguro recibiéndolo."
  },
  lineage: {
    title: "Tu patrón dominante es una lealtad invisible al dolor del linaje",
    intro:
      "Tus respuestas muestran algo más profundo que una mala experiencia aislada: hay señales de que estás repitiendo una forma de amar que ya existía en tu sistema familiar. Como si cargaras una historia que empezó antes de ti y hoy siguiera expresándose en tus vínculos.",
    key:
      "No solo repites una herida personal. También podrías estar sosteniendo una memoria emocional heredada.",
    body1:
      "Cuando ciertos dolores se normalizan en la familia, el sistema aprende a reconocerlos como parte del amor: sacrificio, silencio, tensión, abandono o imposibilidad de recibir algo simple y tranquilo.",
    body2:
      "Por eso a veces sientes que entiendes el patrón, pero aun así vuelves a él. No siempre es falta de voluntad. A veces es una lealtad invisible a lo que el linaje dejó sin resolver.",
    quote:
      "Lo que una familia calla durante años, muchas veces reaparece como destino en quien se atreve a mirarlo.",
    closing:
      "Ver esto con claridad es poderoso, porque deja de parecer una cadena sin explicación. Y ahí empieza la posibilidad real de romperla.",
    meaningTitle: "Lo que significa repetir un patrón del linaje",
    meaningBody:
      "Cuando el patrón viene del linaje, la repetición no siempre responde solo a tu historia personal. También puede estar conectada con lealtades, mandatos y formas heredadas de sobrevivir emocionalmente dentro de la familia."
  }
};
const resultScores = {
  abandonment: 0,
  approval: 0,
  rejection: 0,
  lineage: 0
};
const resultOrder = ["abandonment", "approval", "rejection", "lineage"];
const resultTitle = document.getElementById("result-title");
const resultIntro = document.getElementById("result-intro");
const resultKey = document.getElementById("result-key");
const resultBody1 = document.getElementById("result-body-1");
const resultBody2 = document.getElementById("result-body-2");
const resultQuote = document.getElementById("result-quote");
const resultClosing = document.getElementById("result-closing");
const meaningTitle = document.getElementById("meaning-title");
const meaningBody = document.getElementById("meaning-body");

function getWinningResult() {
  return resultOrder.reduce((bestKey, currentKey) => {
    if (resultScores[currentKey] > resultScores[bestKey]) return currentKey;
    return bestKey;
  }, resultOrder[0]);
}

function renderResult() {
  const winningKey = getWinningResult();
  const content = resultContent[winningKey];
  if (!content) return;

  resultTitle.textContent = content.title;
  resultIntro.textContent = content.intro;
  resultKey.textContent = content.key;
  resultBody1.textContent = content.body1;
  resultBody2.textContent = content.body2;
  resultQuote.textContent = content.quote;
  resultClosing.textContent = content.closing;
  meaningTitle.textContent = content.meaningTitle;
  meaningBody.textContent = content.meaningBody;
}

function revealById(id) {
  const target = document.getElementById(id);
  if (!target) return;

  target.classList.remove("is-hidden");
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

revealButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextId = button.getAttribute("data-reveal");
    if (nextId === "quiz-stage" && welcomeScreen) {
      welcomeScreen.classList.add("is-hidden");
    }
    revealById(nextId);
    button.disabled = true;
  });
});

answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".step-card");
    const parentAnswers = button.closest(".answers");
    if (!parentAnswers) return;

    const siblings = [...parentAnswers.querySelectorAll(".answer")];
    siblings.forEach((sibling) => {
      sibling.disabled = true;
      sibling.classList.remove("is-picked");
    });

    button.classList.add("is-picked");
    const resultKeyName = button.getAttribute("data-result-key");
    if (resultKeyName && Object.hasOwn(resultScores, resultKeyName)) {
      resultScores[resultKeyName] += 1;
    }
    if (card) {
      card.classList.add("is-complete");
      const pickedAnswer = card.querySelector(".picked-answer");
      if (pickedAnswer) {
        pickedAnswer.textContent = `Tu respuesta: ${button.textContent}`;
      }
    }
    if (button.getAttribute("data-next") === "result-card") {
      renderResult();
    }
    revealById(button.getAttribute("data-next"));
  });
});
