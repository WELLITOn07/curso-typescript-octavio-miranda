//INTERSECTION TYPES -> &
type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersecao = AB & AC & AD;
//--------------------------------
type TemNome = {nom: string};
type TemSobrenome = {sobrenom: string};
type TemIdade = {idad: number};

type Pessoa01 = TemNome & TemSobrenome & TemIdade;

const serHomano: Pessoa01 = {
    idad: 29,
    sobrenom: 'Gruber',
    nom: 'Welliton'
};

