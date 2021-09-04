# O que são variáveis?
Uma variável é um meio de armazenar dados em memória, como se fosse um container para valores em um programa de computador.

## Importância de aprender sobre variáveis
As variáveis são um recurso fundamental para qualquer linguagem de programação e aprender a utilizá-las de forma correta é uma das bases do desenvolvimento.

## Sintaxe de decleração de variável em TypeScript
O TypeScript possui algumas regras para declação de variáveis. VEja abaixo:

- O nome deve começar com uma letra ou sublinhado (_), nunca com número;
- Para o restante do nome apenas letras, números e sublinhado (_) podem ser utilizados. Qualquer outro caractere, símbolo ou mesmo espaço é proibido;
- Uma variável deve ser declarada antes de ser utilizada;
- Use a palavra-chave <strong>let</strong> para declarar uma variável


### Exemplos de declaração de variáveis
~~~typescript
// Declara uma variável _name do tipo string
let _name: string = "Marllon Soares";
~~~

## Inferência de tipo

 O TypeScript usa a inferência de tipos para prover informação, quando não se tem um tipo de dado explícito de anotação.

 ### Exemplo

 ~~~typescript

// Tipo number será inferido pelo valor 1
let id = 1;

// Tipo string será inferido pelo valor "José"
let user = "José"

// Tipo string será inferido pelo valor "50"
let amount = "50"
 ~~~

## Momento da declaração

Uma variável TypeScript deve ser declarada antes de ser utilizada. Exemplos:

Declarando e atribuindo avlor separadamente
~~~typescript
// Variável declarada
let x;

// Valor atribuído
x = 10;
~~~

Declarando e atribuindo valor ao mesmo tempo
~~~typescript
// Declarando e atribuindo valor ao mesmo tempo
let x = 10;
~~~

Tentar acessar uma variável que ainda não foi declarada também causará um erro
de compilação, exemplo:

~~~typescript
// Variável declarada e atribuída
let x = 10;

// Tentativa de utilizar uma variável que foi declarada
console.log(y);
~~~

# Utilizando constantes

Uma constante armazena um dado na memória, porém, o valor de uma constante não
pode ser alterado. Exemplo:

~~~typescript
// Variável
let x = 10;

// Constante
const y = 10;
~~~

Uma vez definida, o valor de uma constante permanece o mesmo durante toda
execução de um programa.