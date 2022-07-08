//FUNÇÕES COM TIPO
type MapStringsCallback = (item: number) => number

function mapNumbers (array: number[],callback: MapStringsCallback): number[] {
    const newArray: number [] = [];

    for (let c = 0; c < array.length; c++) {
        newArray.push(callback(array[c]))
    }

    return newArray;
};
const numeros = [1, 2, 3];
const abcMapped = mapNumbers(numeros, (item) => item * 2);

console.log(abcMapped);