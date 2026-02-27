/*********************************************************************
 * Objetivo: Programar algumas lógicas usadas no exercicio 1 sobre (imc)
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const utilidades = require('./utilidades');

/**
 * função que recebe um imc e retorna sua classificação.
 * @param {number} imc - Número de imc que será classificado.
 * @returns {string | false}
 */
const retornarClassificacaoIMC = function (imc) {
    let imcUsuario = utilidades.normalizarNumero(imc, 0, 300);
    let resultado;

    if (imcUsuario) {
        if (imcUsuario <= 18.5) resultado = 'abaixo do peso';
        if (imcUsuario > 18.5 && imcUsuario <= 24.99) resultado = 'com o peso normal';
        if (imcUsuario >= 25 && imcUsuario <= 29.99) resultado = 'acima do peso (sobrepeso)';
        if (imcUsuario >= 30 && imcUsuario <= 34.99) resultado = 'com obesidade I';
        if (imcUsuario >= 35 && imcUsuario <= 39.99) resultado = 'com obesidade II';
        if (imcUsuario >= 40)                       resultado = 'com obesidade III';
    } else {
        resultado = false;
    }

    return resultado;
};

module.exports = {
    retornarClassificacaoIMC,
};