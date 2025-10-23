/*
    Nós vamos fazer a implementaçãao manual  de uma fila usando apenas um objeto como armazenamento interno
    e gerenciando manualmente os índices para garantir o funcionamento correto da fila, sem recorrer ao uso
    de métodos nativos do JavaScript (como push, shift ou length).
*/

/*
    Protótipo da Classe:

    class MinhaFila {
    
        #items = [];
        #inicio = 0;
        #fim = 0;

        enqueue(elemento) { }
        dequeue() { }
        front() { }
        estaVazia() { }
        tamanho() { }
        limpar() { }
    }

    module.exports = MinhaFila;
*/

class MinhaFila {

    // Usamos uma lista para armazenar os elementos da filha
    #items = [];

    // Representamos o início e o fim da fila com dois índices
    #inicio = 0;
    #fim = 0;

    // O método 'Enqueue' adiciona um elemento ao final da fila
    enqueue(elemento) {

        // Nós vamos inserir esse elemento na posição atual do índice do fim da fila.
        this.#items[this.#fim] = elemento;

        // E então incrementamos o índice do fim da fila
        this.#fim++;
    }

    // O método 'Dequeue' remove o elemento do início da fila
    dequeue() {
        // Se a fila estiver vazia, retornamos undefined (não há o que remover)
        if (this.estaVazia()){
            return undefined;
        }

        // Armazenamos o elemento do início da fila em uma variável
        const primeiroItem = this.#items[this.#inicio];

        // Removemos esse elemento do início da fila
        delete this.#items[this.#inicio];

        // Movemos o índice do início da fila para a próxima posição
        this.#inicio++;

        // Quando o início e o fim estiverem alinhados, redefinimos a fila
        if (this.#inicio === this.#fim) {
            this.limpar();
        }

        // E retornamos o elemento que foi removido
        return primeiroItem;
    }

    // O método 'Front' retorna o elemento do início da fila sem removê-lo
    front() {

        // Se a fila estiver vazia, retornamos undefined (não há o que retornar)
        if (this.estaVazia()){
            return undefined;
        }

        // Retornamos o elemento que está no início da fila
        return this.#items[this.#inicio];
    }

    // O método 'EstaVazia' verifica se a fila está vazia (verifica se os índices estão iguais)
    estaVazia = () => this.#fim === this.#inicio;

    // O método 'Tamanho' retorna o número de elementos na fila (calcula a diferença entre fim e início)
    tamanho = () => this.#fim - this.#inicio;

    // O método 'Limpar' redefine a fila, removendo todos os elementos
    limpar() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
}

module.exports = MinhaFila;