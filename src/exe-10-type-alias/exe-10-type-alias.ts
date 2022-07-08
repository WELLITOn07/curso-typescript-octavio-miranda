//TYPE ALIAS
type Pessoa = {
    nome: string;
    idade: number;
    salario: number;
    corPreferida?: string
};

const pessoa: Pessoa = {
    nome: 'Welliton',
    salario: 1500,
    idade: 29
};

type RGB = 'VERMELHO' | 'VERDE' | 'AZUL';


function criandoPessoa(pessoa: Pessoa, cor: RGB): Pessoa {
    return {...pessoa, corPreferida: cor};
};

console.log(criandoPessoa(pessoa,'AZUL'));