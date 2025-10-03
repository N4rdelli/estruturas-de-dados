/*
    Os objtos em JavaScript são extremamente felixíveis. Eles permitem armazenar arrays como valores associados a chaves.
    Aqui nós iremos explorar como usar arrays dentro de objetos para criar dicionários mais complexos.
*/

// Criando um dicionário com arrays como valores
const dicionarioArrays = {
  frutas: ['Maçã', 'Banana', 'Laranja'],
  vegetais: ['Cenoura', 'Brócolis', 'Espinafre'],
  laticinios: ['Leite', 'Queijo', 'Iogurte'],
};

// Acessando os arrays dentro do dicionário
console.log(dicionarioArrays.frutas); // ["Maçã", "Banana", "Laranja"]
console.log(dicionarioArrays.vegetais[1]); // "Brócolis"

// Adicionando um novo item a um array dentro do dicionário
dicionarioArrays.laticinios.push('Manteiga');
console.log(dicionarioArrays.laticinios); // ["Leite", "Queijo", "Iogurte", "Manteiga"]

// Iterando sobre os arrays dentro do dicionário
for (const categoria in dicionarioArrays) {
  console.log(`${categoria}:`);
  dicionarioArrays[categoria].forEach((item) => {
    console.log(` - ${item}`);
  });
}

// Verificando se uma categoria existe no dicionário
if ('frutas' in dicionarioArrays) {
  console.log("A categoria 'frutas' existe no dicionário.");
} else {
  console.log("A categoria 'frutas' não existe no dicionário.");
}

// Removendo um item de um array dentro do dicionário
const index = dicionarioArrays.vegetais.indexOf('Cenoura');
if (index > -1) {
  dicionarioArrays.vegetais.splice(index, 1); // Remove 'Cenoura'
}
console.log(dicionarioArrays.vegetais); // ["Brócolis", "Espinafre"]

// Adicionando uma nova categoria com um array vazio
dicionarioArrays.bebidas = [];
console.log(dicionarioArrays.bebidas); // []

for (const categoria in dicionarioArrays) {
  console.log(`${categoria}:`);
  dicionarioArrays[categoria].forEach((item) => {
    console.log(` - ${item}`);
  });
}

// Exibindo todas as categorias (chaves) do dicionário
console.log(Object.keys(dicionarioArrays));

// Exibindo todos os itens (valores) do dicionário
console.log(Object.values(dicionarioArrays));

// Exibindo todos os pares chave-valor do dicionário
Object.entries(dicionarioArrays).forEach(([categoria, itens]) => {
  console.log(`${categoria}: ${itens.join(', ')}`);
});

// Verificando o tamanho do dicionário
console.log(`O dicionário possui ${Object.keys(dicionarioArrays).length} categorias.`);

// Atualizando um item em um array dentro do dicionário
const frutaIndex = dicionarioArrays.frutas.indexOf('Banana');
if (frutaIndex > -1) {
  dicionarioArrays.frutas[frutaIndex] = 'Manga'; // Atualiza 'Banana' para 'Manga'
}
console.log(dicionarioArrays.frutas); // ["Maçã", "Manga", "Laranja"]

// Limpando todos os itens de uma categoria
dicionarioArrays.laticinios = [];
console.log(dicionarioArrays.laticinios); // []

// Removendo uma categoria inteira do dicionário
delete dicionarioArrays.bebidas;
console.log(dicionarioArrays.bebidas); // undefined
console.log(Object.keys(dicionarioArrays)); // ["frutas", "vegetais", "laticinios"]