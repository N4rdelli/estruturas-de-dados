/*
    Agora nós vamos fazer a implementação de uma lista duplamente encadeada. Nessa estrutura de dados, cada nó
    possui uma referência tanto para o próximo nó quanto para o nó anterior, permitindo uma navegação bidirecional.
*/

/* Protótipo da Classe:

    class DoublyLinkedList {
    
    #head = undefined;
    #tail = undefined;
    #length = 0;

    append(value) { }
    prepend(value) { }
    removeLast() { }
    removeFirst() { }
    traverse() { }
    traverseReverse() { }
    insertAt(value, index) { }
    removeAt(index) { }
    find(value)() { }
    size = () => this.#length;
    isEmpty = () => this.#length === 0;
    toString() { }
    }

    module.exports = DoublyLinkedList;

*/

// Importamos a classe NodeDupla que representa cada nó da lista duplamente encadeada
const Node = require('./NodeDupla');

class DoublyLinkedList {

    // Inicializamos as propriedades privadas da lista
    #head = undefined;
    #tail = undefined;
    #length = 0;

    // O método 'Append' insere um elemento no final da lista
    append(value) {

        // Criamos um novo nó com o valor fornecido
        const newNode = new Node(value);

        // Se a lista estiver vazia, o novo nó se torna o "head" e o "tail"
        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            // Caso contrário, ajustamos as referências para inserir o novo nó no final
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }

        // E então incrementamos o tamanho da lista
        this.#length++;
    }

    // O método 'Prepend' insere um elemento no início da lista
    prepend(value) {
        // Criamos um novo nó com o valor fornecido
        const newNode = new Node(value);

        // Se a lista estiver vazia, o novo nó se torna o "head" e o "tail"
        if (this.#head === undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            // Caso contrário, ajustamos as referências para inserir o novo nó no início
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        // E então incrementamos o tamanho da lista
        this.#length++;
    }

    // O método 'RemoveLast' remove o último elemento da lista
    removeLast() {
        // Se a lista estiver vazia, nós interrompemos a execução do método
        if (this.#tail === undefined) return undefined;

        const removedNode = this.#tail;
        // Se houver apenas um elemento na lista, atualizamos head e tail para undefined
        if (this.#head === this.#tail) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            // Caso contrário, ajustamos o tail para o nó anterior
            this.#tail = this.#tail.prev;
            // E e removemos a referência do novo tail para o próximo nó
            this.#tail.next = undefined;
        }

        // Decrementamos o tamanho da lista
        this.#length--;

        return removedNode.value; // Retornamos o valor do nó removido
    }

    // O método 'RemoveFirst' remove o primeiro elemento da lista
    removeFirst() {
        // Se a lista estiver vazia, nós interrompemos a execução do método
        if (this.#head === undefined) return undefined;

        const removedNode = this.#head;

        // Se houver apenas um elemento na lista, atualizamos head e tail para undefined
        if (this.#head === this.#tail) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            // Caso contrário, ajustamos o head para o próximo nó
            this.#head = this.#head.next;
            // E removemos a referência do novo head para o nó anterior
            this.#head.prev = undefined;
        }

        // Decrementamos o tamanho da lista
        this.#length--;
        return removedNode.value; // Retornamos o valor do nó removido
    }

    // O método 'Traverse' percorre a lista do início ao fim
    traverse() {

        // Se a lista estiver vazia, retornamos uma mensagem indicando isso
        if(this.isEmpty()){
            console.log("A lista está vazia.");
            return; // Interrompemos a execução do método
        }

        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Enquanto houver um nó atual, imprimimos seu valor e avançamos para o próximo nó
        while (current !== undefined) {
            console.log(current.value);
            current = current.next;
        }
    }

    // O método 'TraverseReverse' percorre a lista do fim ao início
    traverseReverse() {

        // Se a lista estiver vazia, retornamos uma mensagem indicando isso
        if(this.isEmpty()){
            console.log("A lista está vazia.");
            return; // Interrompemos a execução do método
        }

        // Recuperamos o nó final (tail)
        let current = this.#tail;

        // Enquanto houver um nó atual, imprimimos seu valor e retrocedemos para o nó anterior
        while (current !== undefined) {
            console.log(current.value);
            current = current.prev;
        }
    }

    // O método 'InsertAt' insere um elemento em uma posição específica da lista
    insertAt(value, index) {
        // Verificamos se o índice é válido
        if (index < 0 || index > this.#length) return undefined;

        // Criamos um novo nó com o valor fornecido
        const newNode = new Node(value);

        // Se o índice for 0, inserimos no início da lista
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // Se o índice for igual ao tamanho da lista, inserimos no final
        if (index === this.#length) {
            this.append(value);
            return;
        }

        // Caso contrário, percorremos a lista até a posição desejada
        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Nós também precisamos de uma referência para o nó anterior
        let previous;

        // Inicializamos um contador para rastrear a posição atual
        let count = 0;

        // Enqunato não chegamos ao índice desejado, avançamos na lista
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        // Quando chegammos ao índice desejado, ajustamos as referências para inserir o novo nó na posição correta
        // Primeiro nós ajustamos o next do novo nó: agora ele aponta para o nó que atualmente está na posição do índice
        newNode.next = current;

        // Depois ajustamos o prev do novo nó: agora ele aponta para o nó que está antes do índice
        newNode.prev = previous;

        // Em seguida, ajustamos o next do nó anterior: agora ele aponta para o novo nó
        previous.next = newNode;

        // E por últimmo, ajustamos o prev do nó que antes estava na posição do índice: agora ele aponta para o novo nó
        current.prev = newNode;

        // Finalmente, incrementamos o tamanho da lista
        this.#length++;
    }

    // O método 'RemoveAt' remove um elemento em uma posição específica da lista
    removeAt(index){
        // Verificamos se o índice é válido
        if (index < 0 || index >= this.#length) return undefined;

        // Se o índice for 0, removemos o primeiro elemento
        if (index === 0) return this.removeFirst();

        // Se o índice for igual ao tamanho da lista menos um, removemos o último elemento
        if (index === this.#length - 1) return this.removeLast();

        // Recuperamos o nó inicial (head)
        let current = this.#head;
        
        // Inicializamos um contador para rastrear a posição atual
        let count = 0;

        // Enqunato não chegamos ao índice desejado, avançamos na lista
        while (count < index) {
            current = current.next;
            count++;
        }

        // Quando chegamos ao índice desejado, ajustamos as referências para remover o nó da posição correta
        // Ajustamos o next do nó anterior para pular o nó atual
        current.prev.next = current.next;

        // Ajustamos o prev do nó seguinte para pular o nó atual
        current.next.prev = current.prev;

        // Finalmente, decrementamos o tamanho da lista
        this.#length--;
        return current.value; // Retornamos o valor do nó removido
    }

    // O método 'Find' procura por um nó que contém o valor fornecido e retorna esse nó (o índice dele)
    find(value) {
        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Inicializamos um contador para rastrear a posição em que estamos;
        let index = 0;

        // Percorremos a lista até encontrar o valor ou chegar ao final da lista
        while (current) {
            // Se o valor do nó atual for igual ao valor procurado, retornamos esse nó e interrompemos a execução do método
            if (current.value === value) return index;

            // Caso contrário, avançamos para o próximo nó e incrementamos o índice
            current = current.next;
            index++;
        }

        // Retornamos -1 se o valor não for encontrado
        return -1;
    }

    // O método 'Size' retorna o número de elementos na lista
    size = () => this.#length;

    // O método 'IsEmpty' verifica se a lista está vazia
    isEmpty = () => this.#length === 0;

    // O método 'ToString' retorna uma representação em string da lista
    toString() {

        // Se a lista estiver vazia, retornamos uma mensagem indicando isso
        if(this.isEmpty()){
            return "A lista está vazia.";
        }

        // Inicializamos uma string vazia para construir a representação da lista
        let list = ''; 

        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Percorremos a lista, adicionando o valor de cada nó à string
        while (current !== undefined) {
            list += current.value + ' <-> ';
            current = current.next;
        }

        // Retornamos a string representando a lista, removendo o último ' <-> ' e adicionando 'undefined' para indicar o final da lista
        console.log(list + 'undefined');
    }
}