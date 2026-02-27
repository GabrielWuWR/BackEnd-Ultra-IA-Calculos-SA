/*********************************************************************
 * Objetivo: Programar as interfaces (consoles) da aplicação
 * Autor: Gabriel
 * Data: 25/02/26
 * Versão: 1.0.25.2
 ********************************************************************/

const imcModel = require('./imcModel');

const comeco = `
<|>-=-=-=-=-=-=-=-=-=-=-=-=-=-=<|>=-=-=-=-==-=-=-=-=-=-=-=-=-=-=<|>
<|>-=-=-=-=-=-=-=-=-=-=-<|>CALCULOS SA<|>-=-=-=-=-=-=-=-=-=-=-=-<|>
<|>-=-=-=-=-=-=-=-=-=-=-=-=-=-=<|>=-=-=-=-==-=-=-=-=-=-=-=-=-=-=<|>

<|>Olá seja bem vindo a Super IA Calculos SA<|>
<|>Como podemos te ajudar hoje?<|>

<|>-=-=-=Nossos Serviços=-=-=-<|>
<|>(1) - Calcular IMC - (1)<|>

Resposta: 
`

const finalizacao = `
<|>-=-=-=-=-=-=-=-=-=-=-=-=-=-=<|>=-=-=-=-==-=-=-=-=-=-=-=-=-=-=<|>
<|>-=-=-=-=-=-<|>Obrigado por usar nossos Serviços<|>-=-=-=-=-=-<|>
<|>-=-=-=-=-=-=-=-=-=-=-=-=-=-=<|>=-=-=-=-==-=-=-=-=-=-=-=-=-=-=<|>
`;

////////Exercicio 1 (IMC)\\\\\\\\\\
const mostrarResultadoIMC = function (nomeUser, imc) {
    let estadoIMC = imcModel.retornarClassificacaoIMC(imc);

    let resposta = `
<|>Olá ${nomeUser}
<|>Segundo nossos calculos seu imc atual é: ${imc};
<|>Portanto o(a) senhor(a) está ${estadoIMC}.
${finalizacao}
`;

    return resposta;
};



module.exports = {
    comeco,
    mostrarResultadoIMC,
}