const frases = [
    "¿Estás segura? 🥺",          // intento 1
    "Piénsalo otra vez 💔",       // intento 2
    "Mira que te quiero 😳",      // intento 3
    "Última oportunidad 😢",      // intento 4
    "El amor insiste 💘",         // intento 5
    "Ya no puedes escapar 😈"     // intento 7 (FINAL)
];

let intentos = 0;

const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const frase = document.getElementById("frase");
const buttonsContainer = document.querySelector(".buttons");

btnNo.addEventListener("click", () => {
    intentos++;

    /* 🔴 MENSAJES */
    if (intentos <= frases.length) {
        frase.textContent = frases[intentos - 1];
    } else {
        frase.textContent = frases[frases.length - 1];
    }

    /* 🔴 ESCALA BOTÓN SÍ */
    let escala = 1 + intentos * 0.4;
    if (escala > 4) escala = 4;

    /* 🔴 BAJAR SOLO EN EL INTENTO 7 */
    let bajar = 0;
    if (intentos >= 7) {
        bajar = 18; // a ras del contenedor
    }

    btnSi.style.transform = `scale(${escala}) translateY(${bajar}px)`;
    btnSi.style.zIndex = 3;

    /* 🔴 INTERCAMBIO DE POSICIONES */
    if (intentos >= 3) {
        buttonsContainer.style.flexDirection = "row-reverse";
    }

    if (intentos >= 6) {
        buttonsContainer.style.flexDirection =
            intentos % 2 === 0 ? "row-reverse" : "row";
    }

    /* 🔴 DEBILITAR BOTÓN NO */
    let opacidad = 1 - intentos * 0.15;
    let escalaNo = 1 - intentos * 0.1;

    btnNo.style.opacity = Math.max(opacidad, 0);
    btnNo.style.transform = `scale(${Math.max(escalaNo, 0.5)})`;

    /* 🔴 DESAPARICIÓN DEL NO */
    if (intentos >= 6) {
        btnNo.style.display = "none";
    }
});

/* ❤️ CORAZONES */
function crearCorazon() {
    const heartsContainer = document.querySelector(".hearts");
    const c = document.createElement("span");
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = Math.random() * 3 + 2 + "s";
    heartsContainer.appendChild(c);
    setTimeout(() => c.remove(), 5000);
}

setInterval(crearCorazon, 300);
