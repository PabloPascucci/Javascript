// Archivo JS para determinar si una palabra o frase es un isograma
// Subido a GitHub: 15/09/2025
// Actualizado en GitHub: //

console.log("Si ves este log, el JS esta enlazado")

for (i = 1; i < 101; i++) {
    let divisibleThree = i % 3 == 0
    let divisibleFive = i % 5 == 0

    if(divisibleThree && divisibleFive){
        console.log("fizzbuzz")
    } else if(divisibleThree) {
        console.log("fizz");
    } else if(divisibleFive) {
        console.log("buzz")
    } 
    else {
        console.log(i);
    }
}