// Archivo Fibonacci

console.log("Si ves este log, el JS esta correctamente enlazado");

let a = 0;
let b = 1;
let resultado = [0,1]

while (true) {
    let siguiente = a + b;

    if(siguiente > 100) {
        break;
    }

    resultado.push(siguiente);

    a = b;
    b = siguiente;
}

console.log(resultado);