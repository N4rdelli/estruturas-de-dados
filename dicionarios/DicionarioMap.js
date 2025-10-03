const mapa = new Map();

// Adicionando pares chave-valor ao mapa
mapa.set("nome", "João");
mapa.set("idade", 25);
mapa.set("profissao", "Engenheiro");

// Acessando valores
console.log(mapa.get("nome"));

// Verificando se uma chave existe
console.log(mapa.has("idade")); // true

// Removendo uma chave
mapa.delete("profissao");

// Iterando sobre um mapa 
const mapa2 = new Map([
    ["fruta", "Maçã"],
    ["cor", "Vermelha"],
    ["sabor", "Doce"],
    ["preco", 5.99]
]);

// Aqui utilizamos for ... of
for (const [chave, valor] of mapa2) {
    console.log(`${chave}: ${valor}`);
}