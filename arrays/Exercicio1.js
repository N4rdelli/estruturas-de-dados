/*  Enunciado:
    Uma empresa deseja criar um sistema simples para gerenciar as tarefas da equipe.
    Cada tarefa será armazenada em um array utilizando a classe MeuArray.
*/

// Importamos a Classe
const MeuArray = require("./MeuPrimeiroArray.js");

// Criamos uma nova instância da classe
let tarefasEquipeMarketing = new MeuArray();

// Adicionamos algumas tarefas
tarefasEquipeMarketing.adicionar("Validar objetivos da camapnha");
console.table(tarefasEquipeMarketing.itens);

tarefasEquipeMarketing.adicionar("Definir público-alvo");
console.table(tarefasEquipeMarketing.itens);

tarefasEquipeMarketing.adicionar("Criar conteúdo para redes sociais");
console.table(tarefasEquipeMarketing.itens);

tarefasEquipeMarketing.adicionar("Planejar orçamento de anúncios");
console.table(tarefasEquipeMarketing.itens);

tarefasEquipeMarketing.adicionar("Analisar métricas de desempenho");
console.table(tarefasEquipeMarketing.itens);

// Removemos a última tarefa (analisar métricas de desempenho)
console.log(tarefasEquipeMarketing.obterElemento(2));

// Acessamos o tamanho atual do array
console.log(tarefasEquipeMarketing.tamanhoArray());

// Exibimos todas as tarefas restantes
console.table(tarefasEquipeMarketing.itens);

/*  Perguntas a serem respondidas:
    1. O que acontece quando tentamos acessar um índice fora do tamanh do array?
       O método retorna 'undefined', indicando que não há elemento nesse índice.
       
    2. Como garantir que a ordem das tarefas seja mantida ao adicionar e remover itens?
       A ordem das tarefas é mantida automaticamente, pois os elementos são adicionados no final do array e removidos do final também.
*/