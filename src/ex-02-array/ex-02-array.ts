//MULTIPLICAR
function multiplicador (...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1 )
};

//CONCATENAR
function concatenar (...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor)
};


//ARRAY UPPERCASE
function upperCasse (...args: string[]): string [] {
    return args.map((valor) => valor.toUpperCase())
};

let multi = multiplicador (2, 5);
let conc = concatenar ('WELLI', 'TON')
let uper = upperCasse ('gruber')

console.log(multi);
console.log(conc);
console.log(uper);