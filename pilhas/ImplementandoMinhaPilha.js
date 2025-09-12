/*
    Agora nós vamos implementar a nossa própria pilha
*/

// Importamos a classe do arquivo MinhaPilha.js
const MinhaPilha = require("./MinhaPilha.js");

// Criamos uma nova instância da classe 'MinhaPilha', chamamos esse objeto de 'minhaVariável'
let minhaVariável = new MinhaPilha();

/*  Utilizamos os métodos da classe para adicionar, remover e acessar elementos da pilha
    Utilizamos o console.log para exibir o elemento do topo da pilha no console
*/

// Adicionamos alguns elementos à pilha
minhaVariável.adicionar(10);
console.log(minhaVariável.topo());

minhaVariável.adicionar("Ane");
console.log(minhaVariável.topo());

minhaVariável.adicionar(1.73);
console.log(minhaVariável.topo());

minhaVariável.adicionar(false);
console.log(minhaVariável.topo());

// Removemos o elemento do topo da pilha
console.log(minhaVariável.remover());
console.log(minhaVariável.topo());

// Acessamos o tamanho atual da pilha
console.log(minhaVariável.tamanhoPilha());