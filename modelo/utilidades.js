/*********************************************************************
 * Objetivo: Programar algumas funções variadas os projetos vão usar
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

/**
 * Função interna responsável por preparar o número trocando , por . e arredondando as casas decimais em 2
 * @param {string | number} numero - Número que vamos formatar.
 * @returns {number | false}
 */
const _formatarNumero = function (numero) {
    let numeroFormatar = numero;

    if (numeroFormatar == null || numeroFormatar == undefined || numeroFormatar == '') {
        return false;
    }

    let numeroNormalizado = String(numeroFormatar).trim().replace(',', '.');
    let numeroConvertido = Number(numeroNormalizado);

    if (isNaN(numeroConvertido)) {
        return false;
    } else {
        let numeroFinal = numeroConvertido.toFixed(2);
        return numeroFinal;
    }
}

/**
 * Função que valida e converte um numero possivelmente mal formatado para os padrões de calculos no js.
 * @param {string | number} numero - número que vamos verificar a integridade.
 * @param {number} minimo - Valor minimo permitido ao número.
 * @param {number} maximo - Valor máximo permitido ao número.
 * @returns {number | false} Caso a conversão seja possivel retornamos um número, caso não o retorno será um false.
 */
const normalizarNumero = function (numero, minimo, maximo) {
    let numeroMinimo = Number(minimo);
    let numeroMaximo = Number(maximo);
    let numeroCorrigido = _formatarNumero(numero);

    //Primeira verificação vendo se realmente ha algum valor
    if (numero == null || numero == undefined || numero == '') {
        return false;
    }

    //Caso a conversão seja um sucesso contimuamos o código
    if (numeroCorrigido) {
        if (numeroCorrigido < numeroMinimo || numeroCorrigido > numeroMaximo) { //Verificando se o número atende aos limites impostos.
            return false; //Se não atender retorna false.
        } else {
            return numeroCorrigido; //Se atender retorna o numero.
        }
    } else { // Caso a conversão falhe retornamos false.
        return false;
    }
};

module.exports = {
    normalizarNumero,
}