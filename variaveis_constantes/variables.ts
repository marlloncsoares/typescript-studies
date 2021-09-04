// -----------------------------------------------------------------------------
// Formas de declarar variáveis
// -----------------------------------------------------------------------------

let employee: string = "José da Silva";
console.log(employee);

let employee2: string = "Maria";
console.log(employee2);

let employee_2: string = "Gabriel";
console.log(employee_2);

let _employee: string = "Gustavo";
console.log(_employee);

// -----------------------------------------------------------------------------
// Variáveis declaradas com inferência de tipo
// -----------------------------------------------------------------------------

// Variável do tipo string declarada por inferência de tipo
let user = "Phil";

// Variável do tipo string declarada explicitamente
let _user = "Tony";


// Tipo number será inferido pelo valor 1
let id = 1;

// Tipo string será inferido pelo valor "Eduarda"
let _name = "Eduarda";

// Tipo string será inferido pelo valor "10"
let value = "10";

// -----------------------------------------------------------------------------
// Momento da criação
// -----------------------------------------------------------------------------

// Declarando variável
let y;

// Atribuindo valor para a variável declarada
y = 10;

// Utilizando variável
console.log(y);

// Declarando variável
let text: string;

// Atribuindo valor
text = "Lorem Ipsum";

// Utilizando variável
console.log(text);
