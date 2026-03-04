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

const imc = require('./modelo/IMC/imcQuestao');

entradaDeDados.question(UI.comeco, (resposta) => {
    usuarioResposta = resposta;

    if (usuarioResposta == '1') {
        console.log('');
        console.log('<|>-=-=-=Serviço selecionado CALCULO DE IMC=-=-=-<|>');
        console.log('');

        imc.imcEvento(entradaDeDados);
    }
});