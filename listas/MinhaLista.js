/*
    Nós vamos fazer a implementação manual de uma Lista Encadeada, sem recorrer a métodos nativos
    do JavaScript.
*/

/*
    Protótipo da Classe:

    class LinkedList {

        #head = undefined;
        #length = 0;

        insertAtBeginning(value) { }
        insertAtEnd(value) { }
        removeByValue(value) { }
        find(value) { }
        size() { }
        isEmpty() { }
        toString() { }
    }

    module.exports = LinkedList;
*/

// Importamos a classe Node que representa cada nó da lista
const Node = require('./Node');

class LinkedList {

    // Utilizamos um objeto para representar o nó inicial (cabeça) da lista
    #head = undefined;

    // E utilizamos uma variiável para manter o controle do tamanho  da lista
    #length = 0;

    // O método 'InsertAtBeginning' insere um elemento no início da lista
    insertAtBeginning(value) {

        // Criamos um novo nó com o valor fornecido
        let newNode = new Node(value);

        // A referência (next) desse novo nó aponta para o antigo primeiro nó (head)
        newNode.next = this.#head;

        // Atualizamos o "head": agora é esse novo nó criado
        this.#head = newNode;

        // E então incrementamos o tamanho da lista
        this.#length++;
    }

    // O método 'InsertAtEnd' insere um elemento no final da lista
    insertAtEnd(value) {
        // Criamos um novo nó com o valor fornecido
        let newNode = new Node(value);

        // Se a lista estiver vazia, o novo nó se torna o "head" e depois interrompemos a execução do método
        if (this.#head === undefined) {
            this.#head = newNode;
            return; // Return para sair da função
        }

        // Caso contrário, percorremos a lista até o último nó
        let current = this.#head;
        while (current.next !== undefined) {
            current = current.next;
        }

        // Fazemos a referência (next) do último nó apontar para o novo nó
        current.next = newNode;

        // E então incrementamos o tamanho da lista
        this.#length++;
    }

    // O método 'RemoveByValue' remove o primeiro nó que contém o valor fornecido
    removeByValue(value) {

        // Se a lista estiver vazia, nós interrompemos a execução do método
        if (this.#head === undefined) {
            return; // Return para sair da função
        }

        // Se o valor a ser removido estiver no primeiro nó (head):
        if (this.#head.value === value) {

            // Atualizamos o "head" para o próximo nó
            this.#head = this.#head.next;
            return;
        }

        // Caso contrário:
        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Percorremos a lista para encontrar o nó com o valor fornecido
        while (current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        // Se encontramos o nó com o valor fornecido, atualizamos a referência (next) do nó anterior para pular o nó removido
        if (current.next !== undefined) {
            current.next = current.next.next;
        }

        // E então decrementamos o tamanho da lista
        this.#length--;

        // Nos não precisamos deletar oss valores do nó. Só de alterar as referências já é o suficiente para escluir esse nó da lista encadeada.
    }

    // O método 'Find' procura por um nó que contém o valor fornecido e retorna esse nó (ou undefined se não for encontrado)
    find(value) {
        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Percorremos a lista até encontrar o valor ou chegar ao final da lista
        while (current !== undefined) {
            console.log(current.value);

            // Se o valor do nó atual for igual ao valor procurado, retornamos esse nó e interrompemos a execução do método
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }

        // Retornamos undefined se o valor não for encontrado
        return undefined;
    }

    // O método 'Size' retorna o número de elementos na lista
    size() {
        // Inicializamos um contador
        let count = 0;
        
        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Percorremos a lista incrementando o contador para cada nó encontrado
        while (current !== undefined){
            count++;
            current = current.next;
        }
        
        // Retornamos o contador
        return count;
    }

    // O método 'IsEmpty' verifica se a lista está vazia
    isEmpty = () => this.#head === undefined;

    // O método 'ToString' retorna uma representação em string da lista
    toString() {
        // Inicializamos uma string vazia
        let list = '';

        // Recuperamos o nó inicial (head)
        let current = this.#head;

        // Percorremos a lista concatenando os valores dos nós na string
        while (current !== undefined){
            list += current.value + ' -> ';
            current = current.next;
        }

        // Retornamos a lista (adicionando 'undefined' para indicar o final da lista)
        console.log(list + 'undefined');
    }
}

module.exports = LinkedList;