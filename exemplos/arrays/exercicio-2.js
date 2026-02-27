// Exercício 2

// Enunciado: O setor de Recursos Humanos de uma empresa deseja armazenar os nomes dos funcionários que participaram de um treinamento.

import Array from "../../estruturas-de-dados/Array.js";

const funcionariosTreinados = new Array();

funcionariosTreinados.adicionarElementoNoFinal("Anelize Nardelli");
funcionariosTreinados.adicionarElementoNoFinal("Eduardo Petarnella");
funcionariosTreinados.adicionarElementoNoFinal("João Pedro Surita");
funcionariosTreinados.adicionarElementoNoFinal("Bruno Oller");

funcionariosTreinados.obterElementoPorIndice(2);

funcionariosTreinados.obterIndicePorElemento("João Pedro Surita");

funcionariosTreinados.limparArray();

// Pergunta 1: O que acontece se tentarmos acessar um índice inexistente após limpar o Array?
funcionariosTreinados.obterElementoPorIndice(2);
// Recebemos o retorno definido caso o índice solicitado não estivesse ao alcance.
// Nesse caso, temos que "O índice não é válido para o Array".