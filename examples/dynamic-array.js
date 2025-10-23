/*  
    Agora nós vamos implementar o nosso próprio array
    Um exemplo útil de implementação é um gerenciador de items em um carrinho de compras,
    que armazena os produtos em ordem de adição, por exemplo.
*/

// Importamos a classe do nosso Array Dinâmico
const DynamicArray = require("../src/data-structures/DynamicArray.js");

// Criamos uma nova instância da classe 'DynamicArray' para simular um Carrinho de Compras
class shoppingCart {
    constructor() {
        this.items = new DynamicArray();
    }

    // Método para adicionar um item ao carrinho
    addItem(itemName, itemPrice){
        const item = { name: itemName, price: itemPrice };
        this.items.push(item);
        console.log(`Item adicionado ao carrinho: ${itemName} - R$${itemPrice.toFixed(2)}`);
    }

    // Método para remover o último item adicionado (como um desfazer)
    undoLastAddition(){
        const removedItem = this.items.pop();
        if (removedItem) {
            console.log(`Item removido do carrinho: ${removedItem.name} - R$${removedItem.price.toFixed(2)}`);
        } else {
            console.log("Carrinho vazio. Não há item para remover.");
        }
    }

    // Método para obter o item em um índice específico
    getItemByIndex(index){
        const item = this.items.get(index);
        if (item) {
            console.log(`Item no índice ${index}: ${item.name} - R$${item.price.toFixed(2)}`);
        } else {
            console.log("Índice inválido. Não há item nesse índice.");
        }
    }

    // Método para calcular o preço total no carrinho
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.items.size(); i++){
            const item = this.items.get(i);
            total += item.price;
        }
        console.log(`Total do carrinho: R$${total.toFixed(2)}`);
    }
}

// Criamos uma nova instância do carrinho de compras
let myCart = new shoppingCart();

// Adicionamos alguns itens ao carrinho
console.log("Adicionando itens ao carrinho:");
myCart.addItem("Corset Preto", 139.90);
myCart.addItem("Calça Oversized", 159.49);
myCart.addItem("Tênis Plataforma", 89.99);

// Acessamos um item específico pelo índice
console.log("\nAcessando item pelo índice:");
myCart.getItemByIndex(1);

// Calculamos o total do carrinho
console.log("\nCalculando total do carrinho:");
myCart.calculateTotal();

// Removemos o último item adicionado
console.log("\nRemovendo o último item adicionado:");
myCart.undoLastAddition();