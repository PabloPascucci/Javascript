// Archivo para determinar si dos palabras son anagramas o no

console.log("Si ves este log, el JS esta correctamente enlazado");

function esAnagrama(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    if (word1 == word2) {
        return false;
    }
    
    // Convertir a array, ordenar y volver a string
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

console.log(esAnagrama("Amor","Roma"));     // true
console.log(esAnagrama("Hola", "Mundo"))    // false
console.log(esAnagrama("Amiga", "Magia"))   // true
console.log(esAnagrama("amor", "amor"))     // false

// =====================================================
// slipt('') -> Convierte el string en array de caracteres
// sort() ----> Ordena el array alfabéticamente
// join() ----> Convierte el array ordenado de vuelta a string