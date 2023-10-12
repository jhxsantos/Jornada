import { mascaraTelefone, validarFormulario } from "./validacao-formulario.js";
const formulario = document.querySelector(".contato__form");
const telefone = formulario.querySelector(".contato__telefone");
telefone.addEventListener('keyup', () => {
    if (telefone.value) {
        telefone.value = mascaraTelefone(telefone.value);
    }
});
const botaoEnviar = formulario.querySelector(".botao-enviar");
botaoEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarFormulario(formulario)) {
        alert("Mensagem enviada! Entraremos em contato assim que possível...");
        formulario.reset();
        formulario.focus();
    }
    ;
});
