//CLASS
class Empresa {
    public readonly nome: string;
    protected readonly cnpj: string;
    private readonly colaboradores: Colaborador [] = []

    constructor (nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores (): void {
        for (const col of this.colaboradores) {
            console.log(col)
        }
    }
};

    class Colaborador {
        constructor(public readonly nome: string, public readonly sobrenome: string) {

        }
    };

let empresa1 = new Empresa('Udemy', '10.10.10.10');
const colaborador1 = new Colaborador ('Welliton', 'Gruber')

console.log(empresa1); //MOSTRA A EMPRESA

empresa1.adicionaColaborador(colaborador1);
empresa1.mostrarColaboradores();