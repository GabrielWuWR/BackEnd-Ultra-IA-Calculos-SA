/*********************************************************************
 * Objetivo: Programar as principais entrdas e saidas do serviço calcular média
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const UI = require('../UI');
const utilidades = require('../utilidades');
const calculos = require('../calculos');
const erros = require('../erro');

const mediaEvento = function (entradaDeDados) {
    entradaDeDados.question('<|>Vamos começar digite o nome do aluno: ', (nomeA) => {
        let nomeAluno = String(nomeA);

        if (nomeAluno.trim() == '' || nomeAluno == null || nomeAluno == undefined) {
            console.log(erros.ERRO_NOME_INVALIDO);
            entradaDeDados.close();
        } else {
            entradaDeDados.question('<|>Agora digite o nome do professor: ', (nomeP) => {
                let nomeProfessor = String(nomeP);

                if (nomeProfessor.trim() == '' || nomeProfessor == null || nomeProfessor == undefined) {
                    console.log(erros.ERRO_NOME_INVALIDO);
                    entradaDeDados.close();
                } else {
                    entradaDeDados.question('<|>Agora o gênero do aluno (M ou F): ', (generoA) => {
                        let generoAluno = generoA;

                        if (generoAluno.trim() == '' || generoAluno == null || generoAluno == undefined) {
                            console.log(erros.ERRO_NOME_INVALIDO);
                            entradaDeDados.close();
                        } else {
                            entradaDeDados.question('<|>E o gênero do professor (M ou F): ', (generoP) => {
                                let generoProfessor = generoP;

                                if (generoProfessor.trim() == '' || generoProfessor == null || generoProfessor == undefined) {
                                    console.log(erros.ERRO_NOME_INVALIDO);
                                    entradaDeDados.close();
                                } else {
                                    console.log('<|>-=-=Perfeito vamos começar a calcular a média=-=-<|>');
                                    
                                }
                            })
                        }
                    })
                }
            });
        }
    });
}