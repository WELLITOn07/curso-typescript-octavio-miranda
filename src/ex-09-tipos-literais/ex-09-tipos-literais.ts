//TIPO LITERAIS
const a = 10 //a é do tipo 10 e não pode ser mudado
let b = 20 as const
//mudou esse let para const não podendo mudar esse tipo
function coresEnuns (cor: 'VERMELHO' | 'AZUL' | 'AMARELO'): string {
    return cor;
}

console.log(coresEnuns('AZUL'));