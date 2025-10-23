/*  
    Implementação manual de um Array Dinâmico em JavaScript, simulando o comportamento
    de arrays sem utilizar os métodos nativos de Arrays em JavaScript.
*/

class DynamicArray{
    // O método 'constructor' é chamado quando uma nova instância da classe (Objeto) é criada
    constructor(){
        // Utilizamos um objeto para simular a estrutura de armazenamento do array
        this.data = {};

        // E utilizamos uma variável para manter o controle do tamanho do array (inicializa em zero)
        this.length = 0;
    }

    // O método 'get' acessa o elemento armazenado em um índice (index) específico do array.
    get(index) {
        // Verificamos se o índice está dentro dos limites válidos do array (de 0 até length - 1)
        if (index < 0 || index >= this.length) {
            // return undefined; // Retorna undefined se o índice for inválido (não há o que acessar)
            return console.log("Índice fora dos limites do array. Não há o que acessar.");
        }

        // Se o índice for válido, retornamos o elemento armazenado no índice especificado
        return this.data[index];

        // Podemos comparar ao método nativo 'meuArray[indice]'
    }

    // O método 'push' adiciona um novo elemento ao final do array.
    push(element){
        // Iserimos o novo elemento na posição atual do tamanho do array
        this.data[this.length] = element;

        // Incrementamos o contador de tamanho
        this.length++;

        // Podemos comparar ao método nativo 'meuArray.push(elemento)'
    }

    // O método 'pop' remove o último elemento do array e o retorna.
    pop(){
        // Verificamos se o array está vazio
        if (this.length === 0) {
            // return undefined; // Retorna undefined se o array estiver vazio (não há o que remover)
            return console.log("Array vazio. Não há o que remover.");
        }

        // Armazenaos o último elemento do array em uma variável
        const removedElement = this.data[this.length - 1];

        // Removemos o último elemento do array
        delete this.data[this.length - 1];

        // Decrementamos o tamanho do array
        this.length--;

        // Retornamos o elemento removido
        return removedElement;
    }

    // O método 'size' retorna o tamanho atual do array
    // Podemos utilizar uma arrow function para simplificar a sintaxe
    size = () => this.length;
    // Podemos comparar ao método nativo 'meuArray.length'

    // O método 'clear' remove todos os elementos do array
    clear() {
        // Resetamos o armazenamento de objetos
        this.data = {};

        // Zeramos o tamanho do array
        this.length = 0;
    }

    // O método 'insertAt' insere um elemento em um índice específico do array
    insertAt(index, element){
        // Verificamos se o índice está dentro dos limites válidos do array (de 0 até length)
        if (index < 0 || index > this.length) {
            return console.log("Índice fora dos limites do array. Não é possível inserir.");
        }

        // Deslocamos todos os elementos a partir do índice para a direita (+1)
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        // Inserimos o novo elemento no índice especificado
        this.data[index] = element;

        // Incrementamos o tamanho do array
        this.length++;
    }
}  

// Fim da classe, vamos exportá-la
module.exports = DynamicArray;