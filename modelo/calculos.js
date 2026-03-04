/*********************************************************************
 * Objetivo: Programar os principais calculos da aplicação
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const utilidades = require('./utilidades');

/**
 * Calcula o IMC utilizando a fórmula:
 * peso / (altura * altura)
 *
 * @param {number} altura - Altura da pessoa em metros (ex: 1.75 ou 1,75).
 * @param {number} peso - Peso da pessoa em quilogramas (ex: 70.5 ou 70,5).
 * @returns {number | false} Retorna o valor do IMC calculado.
 */
const calcularImc = function (altura, peso) {
    let alturaUsuario = utilidades.normalizarNumero(altura, 0.65, 2.52);
    let pesoUsuario = utilidades.normalizarNumero(peso, 2.1, 635);

    if (alturaUsuario && pesoUsuario) {
        let calculo = pesoUsuario / (alturaUsuario * alturaUsuario);
        return calculo.toFixed(2);
    } else {
        return false;
    }
}

/**
 * Calcula uma média usando 4 numeros com a formula 
 * (numero1 + numero2 + numero3 + numero4) / 4
 *
 * @param {number} numero1 - Primeira numero (ex: 10.5 ou 10,5).
 * @param {number} numero2 - Segunda numero (ex: 10.5 ou 10,5).
 * @param {number} numero3 - Terceira numero (ex: 10.5 ou 10,5).
 * @param {number} numero4 - Quarta numero (ex: 10.5 ou 10,5).
 * @returns {number | false} Retorna a média calculada
 */
const calcularMedia = function(numero1, numero2, numero3, numero4) {
    let nota1 = utilidades.normalizarNumero(numero1, 0, 100);
    let nota2 = utilidades.normalizarNumero(numero2, 0, 100);
    let nota3 = utilidades.normalizarNumero(numero3, 0, 100);
    let nota4 = utilidades.normalizarNumero(numero4, 0, 100);

    if(nota1 && nota2 && nota3 && nota4) {
        let media = (nota1 + nota2 + nota3 + nota4) / 4;
        return media.toFixed(2);
    } else {
        return false;
    }
}

/**
 * Calcula uma média usando 2 numeros com a formula 
 * (numero1 + numero2) / 2
 *
 * @param {number} numero1 - Primeira numero (ex: 10.5 ou 10,5).
 * @param {number} numero2 - Segunda numero (ex: 10.5 ou 10,5).
 * @returns {number | false} Retorna a média calculada
 */
const calcularMediaExame = function(numero1, numero2) {
    let nota1 = utilidades.normalizarNumero(numero1, 0, 100);
    let nota2 = utilidades.normalizarNumero(numero2, 0, 100);

    if(nota1 && nota2) {
        let media = (nota1 + nota2) / 2;
        return media.toFixed(2);
    } else {
        return false;
    }
}

module.exports = {
    calcularImc,
    calcularMedia,
    calcularMediaExame
}