/*********************************************************************
 * Objetivo: Programar as principais entradas de dados da aplicação
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const readline = require('readline');

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const UI = require('./modelo/UI');
const utilidades = require('./modelo/utilidades');
const calculos = require('./modelo/calculos');
const erros = require('./modelo/erro');

entradaDeDados.question(UI.comeco, (resposta) => {
    usuarioResposta = resposta;

    if (usuarioResposta == '1') {
        console.log('');
        console.log('<|>-=-=-=Serviço selecionado CALCULO DE IMC=-=-=-<|>');
        console.log('');

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
                            let pesoUsuario = utilidades.normalizarNumero(peso);

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
                    }
                });
            }
        });
    };
});