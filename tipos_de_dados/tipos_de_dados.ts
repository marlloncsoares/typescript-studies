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
// String
// ----------------------------------------------------------------------------

// Declarando uma variável do tipo string
let name: string = "Marllon Soares"; // Utilizando aspas duplas
let age: string = '26'; // Utilizando aspas simples
let text: string = `My name is ${name} and i am ${age} years old.`; // Utilizando templates
console.log(text);




}