const Node = require("./Node.js");

// A class BinaryTree representa a árvore binária
class BinaryTree {

    constructor(){
        this.root = null; // Inicialmente, a árvore estáa vazia, então a raiz é null
    }

    // O método 'insert' insere um valor na árvore
    insert(value){
        const newNode = new Node(value)
        if (this.root === null){
            // Se a árvore estiver vazia, o novo nó se torna a raiz
            this.root = newNode
        } else {
            // Se a árvore já possuir uma raiz, insere o nó na posição correta
            this._insertNode(this.root, newNode);
        }
    }

    // O método 'insertNode' é um método auxiliar para encontrar a posição correta e inserir o nó na árvore
    _insertNode(node, newNode){
        if (newNode.value < node.value){
            // Se o valor do novo nó for menor que o valor do nó atual, vai para a sub-árvore esquerda
            if (node.left === null) {
                // Se não houver nó à esquerda, insere o novo nó aqui
                node.left = newNode;
            } else {
                // Caso contrário, chama o método recursivamente na sub-árvore
                this._insertNode(node.left, newNode);
            }
        } else {
            // Se o valor do novo nó for maior ou igual ao valor do nó atual
            if (node.right === null) {
                // Se não houver nó à direita, insere o novo nó aqui
                node.right = newNode;
            } else {
                // Caso contrário, chama o método recursivamente na subárvore
                this._insertNode(node.right, newNode);
            }
        }
    }

    // O método 'inOrder' é um Percurso em Ordem: visita a sub-árvore esquerda, o nó atual e a sub-árvore direita
    inOrder(node = this.root){
        if (node !== null){
            this.inOrder(node.left); // Visita a sub-árvore esquerda
            console.log(node.value); // Visita o nó atual
            this.inOrder(node.right); // Visita a sub-árvore direita
        }
    }

    // O método 'preOrder' é um Percurso Pré Ordem: visita o nó atual, a sub-árvore esquerda e a sub-árvore direita
    preOrder(node = this.root){
        if (node !== null) {
            console.log(node.value); // Visita o nó atual
            this.preOrder(node.left); // Visita a subárvore esquerda
            this.preOrder(node.right); // Visita a subárvore direita
        }
    }

    // O método 'postOrder' é um Percurso Pós Ordem: visita a sub-árvore esquerda, a sub-árvore direita e por fim o nó atual
    postOrder(node = this.root){
        if (node !== null){
            this.postOrder(node.left); // Visita a su-árvore esquerda
            this.postOrder(node.right); // Visita a subárvore direita
            console.log(node.value); // Visita o  nó atual
        }
    }

    // Método para buscar um valor na árvore
    search(value){
        return this._searchNode(this.root, value);  // Inicia a  busca a partir da raiz
    }

    // Método auxiliar para realizar a busca recursivamente
    _searchNode(node, value){
        if (node === null) {
            // Se o nó atual é null, o valor não está na árvore
            return false;
        }
        if (value === node.value) {
            // Se o valor é encontrado, retorna true
            return true;
        } else if (value < node.value) {
            // Se o valor procurado é menor, continua a busca na sub-árvore esquerda
            return this._searchNode(node.left, value);
        } else {
            // Se o valor procurado é maior, continua a busca na subárvore direita
            return this._searchNode(node.right, value);
        }
    }

    // Método para remover um nó com o valor especificado
    remove(value){
        this.root = this._removeNode(this.root, value); // Inicia a remoção a partir da raiz
    }

    _removeNode(node, value) {
        if (node === null) {
            return null; // Se o nó é null, não há nada para remover
        }

        if (value < node.value) {
            // Se o valor a ser removido é menor, continua na subárvore esquerda
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            // Se o valor a ser removido é maior, continua na subárvore direita
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            // Se o valor é igual ao nó atual, este é o nó a ser removido

            // Caso 1: Nó sem filhos (nó folha)
            if (node.left === null && node.right === null){
                node === null; // Remove o nó, definindo ele como null
                return node;
            }

            // Caso 2: Nó com um filho
            if (node.left === null){
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Caso 3: Nó com dois filhos
            // Enconntra o nó com menor valor na sub-árvore direita
            const aux = this._findMinNode(node.right);
            node.value = aux.value; // Substitui o valor do nó atual pelo valor mínimo encontrado
            node.right = this._removeNode(node.right, aux.value); // Remove o nó duplicado na sub-árvore direita
            return node;
        }
    }

    _findMinNode(node){
        while (node.left !== null){
            // Continua indo para a esquerda até encontrar o menor valor
            node =  node.left;
        }
        return node;
    }
}

module.exports = BinaryTree;