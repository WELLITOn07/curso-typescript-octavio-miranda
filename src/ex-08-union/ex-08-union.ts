//union

function SomandoUnions (x: number | string, y: number | string): number | string {
    if (typeof x === 'number' && typeof y === 'number') return x + y;
    return `${x}${y}`
}

console.log(SomandoUnions(10, 10));
console.log(SomandoUnions('1', '50'));
