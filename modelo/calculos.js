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
 * @returns {number} Retorna o valor do IMC calculado.
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

module.exports = {
    calcularImc,
}