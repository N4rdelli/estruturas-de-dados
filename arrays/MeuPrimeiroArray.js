/*  Nós vamos fazer a imlementação manual de um Array, que simula o comportamento de um
    array básico sem recurrer às funções nativas do JavaScript (como push, pop ou length).
*/

/*  Implementação do Protótipo da Classe

class MeuPrimeiroArray {
    constructor() { }

    adicionar(elemento) { }

    remover() { }

    obterElemento(indice) { }

    tamanhoArray() { }

    limpar() { }
};

module.exports = MeuPrimeiroArray; */

class MeuPrimeiroArray {

    // O método contrutor é chamado quando uma nova instância da classe (Objeto) é criada
    constructor(){
        
        // Utilizamos uma lista para armazenar os itens do array
        this.itens = [];

        // E utilizaremos uma variável para manter o controle do tamanho do array
        this.tamanho = 0;
    };

    // O método 'Adicionar' adiciona um elemento no final do array
    adicionar(elemento){

        // Nós vamos inserir esse elemento na posição atual do tamanho do array.
        this.itens[this.tamanho] = elemento;

        // E então incrementamos o tamanho do array
        this.tamanho++;
    };

    // O método 'Remover' remove o último elemento do array
    remover(){

        // Se o array estiver vazio, retornamos undefined (não há o que remover)
        if (this.tamanho === 0){
            return undefined;
        }

        // Armazenamos o último elemento do array em uma variável
        const elementoRemovido = this.itens[this.tamanho - 1];

        // Removemos o último elemento do array
        delete this.itens[this.tamanho - 1];

        // Decrementamos o tamanho do array
        this.tamanho--;

        // Retornamos o elemento removido
        return elementoRemovido;
    };

    // O método 'ObterElemento' acessa o elemento de um índice específico
    obterElemento(indice){

        // Se o índice for inválido, retornamos undefined (não há o que acessar)
        if (indice < 0 || indice >= this.tamanho){
            return undefined;
        }

        // O índice é valido, retornamos o elemento na posição do índice
        return this.itens[indice];
    };

    // O método 'TamanhoArray' retorna o tamanho atual do array
    tamanhoArray(){

        // Literalemente só retornamos o tamanho do array
        return this.tamanho;
    };

    // O método 'Limpar' remove todos os elementos do array
    limpar(){

        // Resetamos a lista de objetos
        this.itens = [];

        // Reinicializamos o tamanho do array
        this.tamanho = 0;
    };

};

// Fim da classe, vamos exportá-la
module.exports = MeuPrimeiroArray;