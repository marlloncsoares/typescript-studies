{ // chaves para ignorar erro de variável de bloco do typescript 
    // ----------------------------------------------------------------------------
    // Tipo Boolean
    // ----------------------------------------------------------------------------
    // Declara uma variável do tipo Boolean
    var check = true;
    // Mostra o tipo e o valor da variável check
    console.log(typeof check, check);
    // ----------------------------------------------------------------------------
    // Tipo Number
    // ----------------------------------------------------------------------------
    var decimal = 1500;
    var hexadecimal = 0x5DC; // 1500
    var binario = 111;
    111;
    var octal = 2020;
    2020;
    console.log('Number decimal: ', decimal);
    console.log('Number hexadecimal: ', hexadecimal);
    console.log('Number binario: ', binario);
    console.log('Number octal: ', octal);
    // ----------------------------------------------------------------------------
    // Tipo String
    // ----------------------------------------------------------------------------
    // Declarando uma variável do tipo string
    var name_1 = "Marllon Soares"; // Utilizando aspas duplas
    var age = '26'; // Utilizando aspas simples
    var text = "My name is " + name_1 + " and i am " + age + " years old."; // Utilizando templates
    console.log(text);
    // ----------------------------------------------------------------------------
    // Tipo Array
    // ----------------------------------------------------------------------------
    // Declarando um array de tipo number
    var numbers = [1, 2, 3];
    console.log(numbers);
    // Declarando (de forma diferente) um array de tipo string
    // Poderia ser com string[]
    var months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
        'Novembro', 'Dezembro'
    ];
    console.log(months);
    // ----------------------------------------------------------------------------
    // Tipo Tuple
    // ----------------------------------------------------------------------------
    var x = ['Lorem Ipsum', 150];
    console.log(x);
    // ----------------------------------------------------------------------------
    // Tipo Enum
    // ----------------------------------------------------------------------------
    var colors = void 0;
    (function (colors) {
        colors[colors["red"] = 0] = "red";
        colors[colors["green"] = 1] = "green";
    })(colors || (colors = {}));
    ;
    var color = colors.red;
    console.log('colors', colors);
    console.log('color', color);
    // ----------------------------------------------------------------------------
    // Tipo any
    // ----------------------------------------------------------------------------
    var notIdentified = 10;
    console.log(typeof notIdentified, notIdentified);
    notIdentified = 'Lorem ipsum';
    console.log(typeof notIdentified, notIdentified);
    // ----------------------------------------------------------------------------
    // Tipo void
    // ----------------------------------------------------------------------------
    function log() {
        console.log('Está mensagem é um log.');
    }
    log();
    // ----------------------------------------------------------------------------
    // Tipo null e undefined
    // ----------------------------------------------------------------------------
    var u = undefined;
    var n = null;
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
function greet(person) {
    return "Hello " + person.name;
}
var people = {
    name: "Marllon Soares",
    age: 26
};
var msg = greet(people);
console.log(msg);
