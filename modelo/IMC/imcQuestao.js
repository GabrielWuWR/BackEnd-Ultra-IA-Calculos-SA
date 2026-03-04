/*********************************************************************
 * Objetivo: Programar as principais entrdas e saidas do serviço calcular imc
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const UI = require('../UI');
const utilidades = require('../utilidades');
const calculos = require('../calculos');
const erros = require('../erro');

const imcEvento = function (entradaDeDados) {
    entradaDeDados.question('<|>Vamos começar, primeiro digite seu nome: ', (nome) => {
        let nomeUsuario = String(nome);

        if (nomeUsuario.trim() == '' || nomeUsuario == null || nomeUsuario == undefined) {
            console.log(erros.ERRO_NOME_INVALIDO);
            entradaDeDados.close();
        } else {
            console.log('<|>Então vamos calcular seu IMC<|>');
            entradaDeDados.question('<|>Forneça a altura: ', (altura) => {
                let alturaUsuario = utilidades.normalizarNumero(altura, 0.65, 2.52);

                if (alturaUsuario) {
                    entradaDeDados.question('<|>Agora o peso: ', (peso) => {
                        let pesoUsuario = utilidades.normalizarNumero(peso, 2.1, 635);

                        if (pesoUsuario) {
                            let imc = calculos.calcularImc(alturaUsuario, pesoUsuario);
                            imc = utilidades.normalizarNumero(imc);
                            console.log('');
                            console.log('<|>Certo então vamos começar os cálculos<|>');

                            if (imc) {
                                console.log(UI.mostrarResultadoIMC(nomeUsuario, imc));
                                entradaDeDados.close();
                            } else {
                                console.log(erros.ERRO_GENERICO);
                                entradaDeDados.close();
                            }

                        } else {
                            console.log(erros.ERRO_NUMERO_INVALIDO);
                            entradaDeDados.close();
                        }
                    });
                } else {
                    console.log(erros.ERRO_NUMERO_INVALIDO);
                    entradaDeDados.close();
                };
            });
        };
    });
}

module.exports = {
    imcEvento
}