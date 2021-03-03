/**
 * Import Confetti generator para tener un fondo animado
 */

import ConfettiGenerator from "confetti-js";
/**
 * Código javascript del confeti
 */
var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
