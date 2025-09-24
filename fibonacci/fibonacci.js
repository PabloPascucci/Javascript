// Archivo Fibonacci

console.log("Si ves este log, el JS esta correctamente enlazado");

let a = 0;
let b = 1;
let resultado = [0, 1];

while (resultado.length < 50){
    let siguiente = a + b;
    resultado.push(siguiente);

    a = b;
    b = siguiente;
}

console.log(resultado);
console.log(`Cantidad de números: ${resultado.length}`);