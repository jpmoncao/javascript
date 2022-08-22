// Funções básicas com Arrays
/* 
    É possível usar algumas funções nativas do
    JS para manipular os Arrays.
*/

let hitchedSpaceships = ["Colossus", "Elemental", "Helmet"]

console.log(hitchedSpaceships) //Retorna: ["Colossus", "Elemental", "Helmet"]

// .push()
hitchedSpaceships.push("Supernova") // Adiciona um elemento na última posição.
console.log(hitchedSpaceships)      // Retorna: ["Colossus", "Elemental", "Helmet", "Supernova"]

// .pop()
hitchedSpaceships.pop()        // Remove o último elemento do Array.
console.log(hitchedSpaceships) // Retorna: ["Colossus", "Elemental", "Helmet"]

// .shift()
hitchedSpaceships.shift()      // Remove o primeiro elemento do Array.
console.log(hitchedSpaceships) // Retorna: ["Elemental", "Helmet"]

// .unshift()
hitchedSpaceships.unshift("Phoenix") // Adiciona um elemento na primeira posição.
console.log(hitchedSpaceships)       // Retorna: ["Phoenix", "Elemental", "Helmet"]

// .length
console.log(hitchedSpaceships.length) // Retorna: 3

// .indexOf()
let elementalPos = hitchedSpaceships.indexOf("Elemental")   // Verifica posição do valor "Elemental"
let goliasPos = hitchedSpaceships.indexOf("Golias")   // Verifica posição do valor "Golias"
console.log(elementalPos)                                   // Retorna: 1
console.log(goliasPos)                                      // Retorna: -1 (Não existe nesse Array)