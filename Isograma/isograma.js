// Archivo JS para determinar si una palabra o frase es un isograma
// Subido a GitHub: //
// Actualizado en GitHub: //

console.log("Si ves este log, el JS esta enlazado");

const esIsograma = (palabra) => {
    const letrasVistas = [];
    const isogramaTrue = "La palabra " + palabra + " es un isograma";
    const isogramaFalse = "La palabra " + palabra + " no es un isograma";

    for(const letra of palabra.toLowerCase()) { // Convertir a minúsculas
        if(letrasVistas.includes(letra)) {
            // Si ya vimos esta letra, NO es isograma
            return console.log(isogramaFalse);
        }
        letrasVistas.push(letra)
    }
    // Si llegamos hasta aquí, todas las letras son únicas
    return console.log(isogramaTrue);
}

// Pruebas a la función
esIsograma("Perro");
esIsograma("gato");