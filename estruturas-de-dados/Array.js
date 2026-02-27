// Implementação manual de um Array, que simula os comportamentos de um array básico, sem utilizar as funções nativas do JavaScript

export default class Array {
    // Quando utilizamos '#', estamos dizendo que o atributo é privado, ou seja, não pode ser acessado fora da classe sem um método
    // Inicializamos uma lista 'itensDoArray' para armazenar os itens do Array
    #itensDoArray = [];

    // Inicializamos uma variável 'tamanhoDoArray' para manter o controle do tamanho do Array
    #tamanhoDoArray = 0;

    // Chamamos o construtor do objeto quando ele é criado

    constructor () {
        console.log("Array criado com sucesso");
    }

    // Método para adicionar um elemento no final do Array
    adicionarElementoNoFinal(elemento) {
        // Adicionamos o elemento no índice atual do tamanho do Array (se o Array não tem elementos, seu tamanho atual é 0, então adicionamos o elemento no índice zero)
        this.#itensDoArray[this.#tamanhoDoArray] = elemento;

        // Incrementamos o tamanho do Array
        this.#tamanhoDoArray++;

        // Opcional: Retornamos o item do Array que foi adicionado
        return console.log(`Item adicionado com sucesso: "${elemento}".`);
    }

    // Método para remover um item no final do Array
    removerElementoNoFinal() {
        // Verificação: Se o Array está vazio, não há item algum para ser removido
        if (this.#tamanhoDoArray === 0) {
            // return console.log("O array está vazio, não há nada para remover.");
            return undefined;
        }

        // Opcional: Fazemos uma cópia do último item do Array, que será removido, com o objetivo de retornar ele posteriormente
        const itemRemovido = this.#itensDoArray[this.#tamanhoDoArray - 1];

        // Removemos o último item do Array
        delete this.#itensDoArray[this.#tamanhoDoArray - 1];

        // Decrementamos o tamanho do Array (já que estamos removendo um item dele)
        this.#tamanhoDoArray - 1;

        // Opcional: Retornamos o item do Array que foi removido
        return console.log(`Item removido com sucesso: "${itemRemovido}".`);
        // return itemRemovido;
    }

    // Método para obter um item do Array a partir de um índice específico
    obterElementoPorIndice(indice) {
        // Verificação: Se o índice estiver fora de alcance, não há elemento para ser obtido
        if (indice < 0 || indice >= this.#tamanhoDoArray){
            return console.log("O índice não é válido para o Array.")
        }

        // Retornamos o elemento que está na posição do índice solicitado
        // return console.log(`Elemento no índice ${indice} encontrado com sucesso: ${this.#itensDoArray[indice]}.`);
        return this.#itensDoArray[indice];
    }

    // Método para obter o tamanho do Array (como 'tamanhoDoArray' é um atributo privado, ele só pode ser acessado por um método)
    verTamanhoDoArray = () => console.log(`Tamanho atual do Array: ${this.#tamanhoDoArray} posições de memória ocupadas`);
    // tamanhoArray = () => this.#tamanhoDoArray;

    // Método para obter todos os itens do Array
    verItensDoArray = () => this.#itensDoArray;

    // Método para remover todos os elementos do Array
    limparArray() {
        // Limpa a lista que armazena os itens do Array
        this.#itensDoArray = [];

        // Limpa a variável que reinicializa o tamanho
        this.#tamanhoDoArray = 0;
    }

    editar(indice, novoValor) {}

    // Método para obter o índice de um item do Array a partir do seu valor
    obterIndicePorElemento(elemento) {
        for (let indice = 0; indice < this.#tamanhoDoArray; indice++) {
            const item = this.#itensDoArray[indice];
            
            if (item === elemento){
                console.log(`Índice do elemento com valor "${elemento}" encontrado: índice ${indice}.`)
            }
        }
    }
}