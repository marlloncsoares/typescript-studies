{ // chaves para ignorar erro de variável de bloco do typescript 


// ----------------------------------------------------------------------------
// Tipo Boolean
// ----------------------------------------------------------------------------

// Declara uma variável do tipo Boolean
let check: boolean = true;

// Mostra o tipo e o valor da variável check
console.log(typeof check, check);

// ----------------------------------------------------------------------------
// Tipo Number
// ----------------------------------------------------------------------------

let decimal: number = 1500;
let hexadecimal: number = 0x5DC; // 1500
let binario: number = 0b1101111; 111
let octal: number = 0o3744; 2020

console.log('Number decimal: ', decimal);
console.log('Number hexadecimal: ', hexadecimal);
console.log('Number binario: ', binario);
console.log('Number octal: ', octal);

// ----------------------------------------------------------------------------
// Tipo String
// ----------------------------------------------------------------------------

// Declarando uma variável do tipo string
let name: string = "Marllon Soares"; // Utilizando aspas duplas
let age: string = '26'; // Utilizando aspas simples
let text: string = `My name is ${name} and i am ${age} years old.`; // Utilizando templates
console.log(text);

// ----------------------------------------------------------------------------
// Tipo Array
// ----------------------------------------------------------------------------

// Declarando um array de tipo number
let numbers: number[] = [1, 2, 3];
console.log(numbers);

// Declarando (de forma diferente) um array de tipo string
// Poderia ser com string[]
const months: Array<string> = [
                                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
                                'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 
                                'Novembro', 'Dezembro'
                            ];
console.log(months);

// ----------------------------------------------------------------------------
// Tipo Tuple
// ----------------------------------------------------------------------------

let x: [string, number] = ['Lorem Ipsum', 150];
console.log(x);


// ----------------------------------------------------------------------------
// Tipo Enum
// ----------------------------------------------------------------------------
enum colors {red, green};
const color = colors.red;

console.log('colors', colors);
console.log('color', color);

// ----------------------------------------------------------------------------
// Tipo any
// ----------------------------------------------------------------------------

let notIdentified: any = 10;
console.log(typeof notIdentified, notIdentified);

notIdentified = 'Lorem ipsum';
console.log(typeof notIdentified, notIdentified);

// ----------------------------------------------------------------------------
// Tipo void
// ----------------------------------------------------------------------------
function log(): void {
    console.log('Está mensagem é um log.');
}
log();

// ----------------------------------------------------------------------------
// Tipo null e undefined
// ----------------------------------------------------------------------------

let u: undefined = undefined;
let n: null = null;

console.log(typeof u, u);
console.log(typeof n, n);

// ----------------------------------------------------------------------------
// Tipo never
// ----------------------------------------------------------------------------
// function error(message: string): never {
//     throw new Error(message);
// }
// try {
//     error('Tipo never');
// } catch (e) {
//     console.log(e);
// }


}

// ----------------------------------------------------------------------------
// Tipo Object
// ----------------------------------------------------------------------------
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return "Hello " + person.name;
}

const people = {
    name: "Marllon Soares",
    age: 26
}
const msg = greet(people);

console.log(msg);