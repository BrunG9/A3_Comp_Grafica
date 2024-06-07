import * as jdenticon from "jdenticon";
import sample from "./examples/widget02.js";

function widget(key, draw) {
    // Gere o avatar usando Jdenticon
    const svg = jdenticon.toSvg(key, 100); // Gera SVG com tamanho 100px

    // Insira o SVG no elemento de destino (draw)
    draw.innerHTML = svg;

    // Ainda chama o sample se necessário
    sample(key, draw);
}
export default widget;