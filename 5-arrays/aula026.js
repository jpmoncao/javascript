//  Splice
/*
    - Splice significa "Emendar" e "Costurar";
    - Substitui o Array original
    - A sintaxe deste método é:
        array.splice(index[, deleteCount[, elemento1[, ...[,elementoN]]]])
        ‣ Espera um primeiro parâmetro que é um índice do Array.
        ‣ O segundo é a quantidade de elementos que queremos remover a par-
        tir deste índice.
        ‣ Os próximos são os elementos que queremos adicionar no lugar.
        ‣ Apenas o primeiro parâmetro é "obrigatório".
*/

// Exemplo 1:
let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]
console.log(spaceshipNames)     // Retorna: ["Elemental", "Darwin", "Ártemis", "Supernova"]

let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")
// let removedSpaceships = spaceshipNames.splice(1, 2) 
// Apenas removeria e não substituiria

console.log(spaceshipNames)     // Retorna: ["Elemental", "Deméter", "Puller", "Golias", "Supernova"]
console.log(removedSpaceships)  // Retorna: ["Darwin", "Ártemis"]

//Slice
/*
    - Slice significa "Fatiar" e "Dividir";
    - Extrai uma parte do Array sem alterar o Array original
    - A sintaxe deste método é:
        array.slice([begin[, end]])
        ‣ Possui um parâmetro que é o índice  inicial.
        ‣ O segundo é o índice final.
        ‣ Retorna todos os elementos entre o elemento do índice "begin" e o
        anterior do elemento "end".
*/

// Exemplo 1:
spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

let extractedNames = spaceshipNames.slice(1, 3)

console.log(spaceshipNames) // Retorna: ["Elemental", "Darwin", "Ártemis", "Supernova"]
console.log(extractedNames) // Retorna: ["Darwin", "Ártemis"]