/*
    Agora nós vamos implementar a nossa própria fila
*/

// Importamos a classe do arquivo MinhaFila.js
const MinhaFila = require("./MinhaFila.js");

// Criamos uma nova instância da classe 'MinhaFila', chamamos esse objeto de 'minhaVariável'
let minhaVariável = new MinhaFila();

/*  Utilizamos os métodos da classe para adicionar, remover e acessar elementos da fila
    Utilizamos o console.log para exibir o elemento do início da fila no console
*/

// Adicionamos alguns elementos à fila
minhaVariável.enqueue(10);
minhaVariável.enqueue("Cliente 2");
minhaVariável.enqueue(1.73);

// Acessamos o elemento do início da fila
console.log(minhaVariável.front());

// Removemos o elemento do início da fila
console.log(minhaVariável.dequeue());

// Acessamos o elemento do início da fila novamente
console.log(minhaVariável.front());

// Acessamos o tamanho atual da fila
console.log(minhaVariável.tamanho());