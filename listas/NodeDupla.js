class NodeDupla {
    constructor(value){
        this.value = value;
        this.next = undefined; // Referência para o próximo nó
        this.prev = undefined; // Referência para o nó anterior
    }
}

module.exports = NodeDupla;