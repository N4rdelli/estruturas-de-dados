// Exercício 1

// Enunciado: Uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe.
// As tarefas devem ser armazenadas em Array, utilizando nossa implementação manual, que simula o comportamento de um array básico sem recorrer às funções nativas do JavaScript.

import Array from "../../estruturas-de-dados/Array.js";

const tarefasDaEquipe = new Array();

tarefasDaEquipe.adicionarElementoNoFinal("Definir escopo do projeto.");
tarefasDaEquipe.adicionarElementoNoFinal("Listar Requisitos Funcionais.");
tarefasDaEquipe.adicionarElementoNoFinal("Criar modelo Canvas de negócio.");
tarefasDaEquipe.adicionarElementoNoFinal("Prototipar páginas principais.");
tarefasDaEquipe.adicionarElementoNoFinal("Desenvolver funcionalidades para o MVP.");

console.table(tarefasDaEquipe.verItensDoArray());

tarefasDaEquipe.removerElementoNoFinal();

console.table(tarefasDaEquipe.verItensDoArray());

// Pergnta 1: O que acontece quando tentamos acessar um índice fora do tamanho do Array?
tarefasDaEquipe.obterElementoPorIndice(5);
// Recebemos o retorno definido caso o índice solicitado não estivesse ao alcance.
// Nesse caso, temos que "O índice não é válido para o Array".
