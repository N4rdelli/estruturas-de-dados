// Criando um dicionário como object
const dicionario = {
    nome: "João",
    idade: 25,
    profissao: "Engenheiro"
};

// Acessando valores
console.log(dicionario.nome); // João
console.log(dicionario["idade"]); // 25

// Adicionando novos pares chave-valor
dicionario.cidade = "São Paulo";
dicionario["país"] = "Brasil";

// Atualizando valores
dicionario.idade = 26;

console.log(dicionario);

// Removendo uma chave
delete dicionario["país"];
console.log(dicionario);

// Iterando sobre um dicionário
const dicionario2 = {
    fruta: "Maçã",
    cor: "Vermelha",
    sabor: "Doce",
    preco: 5.99
};

// Usando for ... in
for (const chave in dicionario2) {
    console.log(`${chave}: ${dicionario2[chave]}`);
}

// Usando Object.keys(): obtém todas as chaves
console.log(Object.keys(dicionario2));

// Usando Object.values(): obtém todos os valores
console.log(Object.values(dicionario2));

// Usando Object.entries(): obtém pares chave-valor
Object.entries(dicionario2).forEach(([chave, valor])  => {
    console.log(`${chave}: ${valor}`);
});

// Validando e trabalhando com chaves

if ("fruta" in dicionario2) {
    console.log("A chave 'fruta' existe no dicionário.");
} else {
    console.log("A chave 'fruta' não existe no dicionário.");
}

const dados = { nome: "Carlos"}

if (!("idade" in dados)) {
    dados.idade = 28; // Adiciona a chave 'idade' se não existir
}

console.log(dados);
console.table(dados);