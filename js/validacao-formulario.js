export const validarFormulario = (formulario) => {
    const inputs = formulario.querySelectorAll(".form__input");
    const camposErro = formulario.querySelectorAll(".form__erro");
    let validou = true;
    for (let i = inputs.length - 1; i >= 0; i--) {
        let validouTemp = true;
        if (!validarInput(inputs[i], camposErro[i])) {
            validouTemp = false;
            inputs[i].focus();
        }
        if (validou) {
            validou = validouTemp;
        }
    }
    console.log(validou);
    return validou;
};
const validarInput = (input, CampoErro) => {
    // Verifica os "validity" e retorna false se algum deles ocorrer.
    if (input.validity.valueMissing) {
        CampoErro.textContent = `informe ${input.getAttribute('name')}`;
        return false;
    }
    if (input.validity.typeMismatch) {
        CampoErro.textContent = `informe ${input.getAttribute('name')} válido`;
        return false;
    }
    if (input.validity.tooShort) {
        CampoErro.textContent = `${input.getAttribute('name')} deve ter no mínimo ${input.getAttribute('minLength')} caracteres`;
        return false;
    }
    if (input.validity.tooLong) {
        CampoErro.textContent = `${input.getAttribute('name')} deve ter no máximo ${input.getAttribute('maxLength')} caracteres`;
        return false;
    }
    // Telefone e CPF não estão validando com "tooShort" e "tooLong". O motivo tem a ver com a
    // aplicação das máscaras nesses campos, mas não consegui descobrir porque não funciona.
    // Inclui o teste abaixo para forçar a validação apenas para esses dois inputs.
    if (input.id === 'contato__telefone') {
        if (input.value.length.toString() < input.getAttribute('minlength') ||
            input.value.length.toString() > input.getAttribute('maxlength')) {
            CampoErro.textContent = `informe um ${input.getAttribute('name')} válido`;
            return false;
        }
    }
    // Se não encontrou problemas, limpa o <span> da mensagem de erro e retorna true.
    CampoErro.textContent = " ";
    return true;
};
// export const mascaraTelefone = (value: string): string => {
//     if (!value) return ''
//     return value
//         .replace(/[\D]/g, '')
//         .replace(/(\d{2})(\d)/, '($1) $2')
//         .replace(value[5] != '9' ? /(\d{4})(\d)/ : /(\d{5})(\d)/, '$1-$2')
//         .replace(/(-\d{4})(\d+?)/, '$1')
// }
export const mascaraTelefone = (value) => {
    if (!value)
        return "";
    return value.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d)(\d{4})$/, "$1-$2");
};
