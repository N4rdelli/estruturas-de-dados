/*
    Dicionários também são utilizados para representar respostas de APIs, onde os dados são estruturados em pares chave-valor.
*/

const apiResponse = {
    status: "success",
    data: {
        id: 1,
        nome: "Produto Exemplo",
        preco: 99.90
    }
};

console.log(apiResponse.data.nome);

// Testando com arrays:

const respostaApi2 = {
    status: "success",
    data: {
        id: [101, 124, 205],
        nome: ["Shampoo", "Condicionador", "Pré-poo"],
        preco: [14.90, 25.90, 21.90]
    }
};

console.log(respostaApi2.data.nome);
console.log(respostaApi2)