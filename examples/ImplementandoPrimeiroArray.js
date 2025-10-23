/*  Agoras nós vamos implementar o nosso próprio array */

// Importamos a classe do arquivo MeuPrimeiroArray.js
const MeuArray = require("./MeuPrimeiroArray.js");

// Criamos uma nova instância da classe 'MeuArray', chamamos esse objeto de 'minhaVariável'
let minhaVariavel = new MeuArray();

/*  Utilizamos os métodos da classe para adicionar, remover e acessar elementos do array
    Utilizamos o console.table para exibir o estado atual do array no console
*/

// Adicionamos alguns elementos ao array
minhaVariavel.adicionar(10);
console.table(minhaVariavel.itens);

minhaVariavel.adicionar(20);
console.table(minhaVariavel.itens);

minhaVariavel.adicionar(30);
console.table(minhaVariavel.itens);

// Acessamos o elemento no índice 1 (segundo elemento)
console.log(minhaVariavel.obterElemento(1));

// Acessamos o tamanho atual do array
console.log(minhaVariavel.tamanhoArray());

// Removemos o último elemento do array
console.log(minhaVariavel.remover());