/*
    Nós vamos fazer a implementação manual de uma Pilha (Stack), que simula o comportamento básico
    de uma pilha, sem recorrer a métodos nativos do JavaScript (como push, pop ou length).
*/

/*
    Implementação do Protótipo da Classe:

    class MinhaPilha {
        
        #items = [];
        #tamanho = 0;

        adicionar(elemento) { }
        remover() { }
        topo() { }
        limpar() { }
        estaVazia() { }
        tamanhoPilha() { }
    }

    module.exports = MinhaPilha;
*/

class MinhaPilha {

    // Usamos um objeto (uma lista) para armazenar os elementos da pilha
    #items = [];

    // E utilizaremos uma variável para manter o controle do tamanho da pilha
    #tamanho = 0;

    // O método 'Adicionar' insere um elemento ao topo da pilha
    adicionar(elemento) {

        // Nós vamos inserir esse elemento na posição  atual do tamanho da pilha
        this.#items[this.#tamanho] = elemento;

        // E então incrementamos o tamanho da pilha
        this.#tamanho++;
    }

    // O método 'Remover' remove o elemento do topo da pilha
    remover(){

        // Se a pilha estiver vazia, retornamos undefined (não há o que remover)
        if (this.#tamanho === 0){
            return undefined;
        }

        // Armazenamos o elemento do topo da pilha em uma variável
        const ultimoItem = this.#items[this.#tamanho - 1];

        // Removemos o elemento do topo da pilha
        delete this.#items[this.#tamanho - 1];  

        // Decrementamos o tamanho da pilha
        this.#tamanho--;

        // E retornamos o elemento que foi removido
        return ultimoItem;
    }

    // O método 'Topo' retorna o elemento que está no topo da pilha, sem removê-lo
    topo(){

        // Se a pilha estiver vazia, retornamos undefined (não há o que retornar)
        if (this.#tamanho === 0){
            return undefined;
        }

        // Retornamos o elemento que está no topo da pilha
        return this.#items[this.#tamanho - 1];
    }

    // O método 'Limpar' esvazia a pilha
    limpar(){
        // Reseta o objeto que armazena os elementos da pilha
        this.#items = [];

        // E reseta o tamanho da pilha
        this.#tamanho = 0;
    }

    // O método 'EstaVazia' verifica se a pilha está vazia
    estaVazia = () => this.#tamanho === 0;

    // O método 'TamanhoPilha' retorna o tamanho atual da pilha
    tamanhoPilha = () => this.#tamanho;
}

// Exportamos a classe para que ela possa ser utilizada em outros arquivos
module.exports = MinhaPilha;