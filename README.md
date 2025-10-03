# Estruturas de Dados com JavaScript

Estruturas de dados são formas organizadas de armazenar e gerenciar informações de maneira eficiente. Elas permitem que os dados sejam manipulados para realizar operações específicas, como: inserção, busca, remoção e ordenação.

Em linguagens como JavaScript, estruturas de dados desempenham um papel crucial na escrita de código eficiente e na otimização de processos computacionais.

Estruturas de dados básicas incluem arrays, listas, pilhas, filas, árvores e grafos. Esse repositório reúne os meus estudos e práticas sobre cada uma dessas estruturas, com suas características e aplicações particulares.

## Arrays
> Um array é uma estrutura de dados que armazena uma coleção de elementos em posições consecutivas de memória.

...

## Pilhas
> Uma pilha (ou _stack_) é uma estrutura de dados linear que segue os princípios FILO e LIFO.

> No sentido figurado, podemos imaginar que os dados estão sendo literalmente empilhados (não é possível retirar a base sem antes retirar tudo o que colocamos em cima dela).

* **FILO**: _First in - Last out_.
* **LIFO**: _Last in - First out_.

## Filas
> Uma fila também é uma estrutura de dados linear, porém ela segue o princípio FIFO.

> No sentido figurado, podemos imaginar literalmente uma fila de pessoas esperando para serem atendidas (não é possível cchegar até a última pessoa sem antes atender todas as outras que chegaram primeiro).

* **FIFO**: _First in - First out_

## Listas Encadeadas
> A lista encadeada é a primeira estrutura de dados que não utiliza um array como base.

> Uma lista encadeada armazena elementos (nós) em sequência, não em locais contíguos na memória (ou seja, não precisamos de índices).

Cada elemento de uma lista encadeada é chamado de **nó** (node). Um nó é composto por duas partes:
* **value**: os dados que estamos armazenando.
* **next**: uma referência que aponta para o próximo nó na sequência (como um ponteiro).

...

## Listas Duplamente Encadeadas
> Uma lista duplamente encadeada é uma estrutura de dados onde cada nó possui uma referência que aponta tanto para o próximo nó quanto para o nó anterior.

> Diferentemente das listas encadeadas simples, ela permite percorrer a lista tanto do início ao fim quanto no inverso.

## Dicionários
> Os dicionários são estruturas de dados que armazenas pares chave-valor. Eles permitem armazenar dados de forma associativa, onde uma chave é usada para acessar um valor correspondente.

> Para trabalhar com dicionários, podemos utilizar tanto Object quanto Map.

| Aspecto | Object | Map |
| --- |:---:|:---:|
| _Tipos de chaves_ | Apenas strings e símbolos  | Qualquer tipo, incluindo objjetos, funções, números, etc... |
| _Ordem das chaves_ | Não garantida (pode variar) | Preserva a ordem de inserção |
| _Iteração_ | 'for...in' ou 'Object.keys', etc... | Iteração direto com 'for...of' |
| _Tamanho_ | Precisa calcular manualmente | Acesso rápido com map.size |
| _Métodos utilitários_ | Limitados | Métodos como set, get, delete, clear |
| _Desempenho_ | Menor eficiência em grandes conjuntos | Melhor desempenho para adição e remoção frequente |