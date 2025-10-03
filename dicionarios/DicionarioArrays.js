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
