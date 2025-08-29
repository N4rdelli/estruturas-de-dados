/*  Enunciado:
    O setor de Recursos Humanos de uma empresa deseja armazenar os nomes dos funcionários que participaram de um treinamento
*/

// Importamos a Classe
const MeuArray = require("./MeuPrimeiroArray.js");

// Criamos uma nova instância da classe
let funcionariosTreinamento = new MeuArray();

// Adicionamos alguns nomes de funcionários
funcionariosTreinamento.adicionar("Ana Silva");
console.table(funcionariosTreinamento.itens);

funcionariosTreinamento.adicionar("Bruno Souza");
console.table(funcionariosTreinamento.itens);

funcionariosTreinamento.adicionar("Carla Pereira");
console.table(funcionariosTreinamento.itens);

funcionariosTreinamento.adicionar("Daniel Oliveira");
console.table(funcionariosTreinamento.itens);

// Acessamos o nome do terceiro funcionário que participou do treinamento
console.log(funcionariosTreinamento.obterElemento(2));

// Limpamos todos os registros do array
funcionariosTreinamento.limpar();

// Exibimos o estado atual do array (vazio)
console.table(funcionariosTreinamento.itens);

/*  Perguntas a serem respondidas:
    1. O que acontece quando tentamos acessar um índice fora do tamanho do array?
       O método retorna 'undefined', indicando que não há elemento nesse índice.

    2. Como modificar a classe para garantir que os nomes armazenados sejam únicos?
       Podemos adicionar uma verificação no método 'adicionar' para garantir que o nome não exista antes de adicioná-lo.
*/