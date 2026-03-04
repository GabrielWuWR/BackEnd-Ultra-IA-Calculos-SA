/*********************************************************************
 * Objetivo: Programar algumas lógicas usadas no exercicio 2 (media)
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const utilidades = require('../utilidades');

const retornarClassificacaoMedia = function(media) {
    let mediaAluno = utilidades.normalizarNumero(media, 0, 100);
    let resposta;

    if (mediaAluno) {
        if (mediaAluno < 50) resposta = 'foi reprovado.';
        else if (mediaAluno >= 50 && mediaAluno <= 69) resposta = 'está de exame.';
        else if (mediaAluno >= 70) resposta = 'foi aprovado.';
    } else {
        resposta = false;
    }

    return resposta;
};

