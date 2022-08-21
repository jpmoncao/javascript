// Arrays
/*
    - Array é uma estrutura de dados:
        É capas de armazenar e organizar outros dados
    - Dados são organizados em forma de lista:
        Cada valor fica numa determinada posição
    - Pode armazenar internamente qualquer outro tipo:
        Number, string, boolean etc.
        E até outro Array
*/

// Exemplo 1:
let hitchedSpaceships = ["Supernova", "Elemental", "Helmet"] // Criando Array

console.log(hitchedSpaceships[0]) //Retorna: "Supernova"
console.log(hitchedSpaceships)    //Retorna: ["Supernova", "Elemental", "Helmet"]

// Exemplo 2:
let spaceshipInfo = ["Colossus", 7, true]

console.log(spaceshipInfo[1]) //Retorna: 7
console.log(spaceshipInfo[3]) //Retorna: undefined (pois não existe)

// Exemplo 3:
let hitchedSpaceship = new Array("Supernova", "Elemental", "Helmet") // Outra forma de criar o Array

console.log(hitchedSpaceships[0]) //Retorna: "Supernova"
console.log(hitchedSpaceships)    //Retorna: ["Supernova", "Elemental", "Helmet"]

// Exemplo 4:
let getNumber = new Array(5)

console.log(getNumber) //Retorna: [undefined, undefined, undefined, undefined, undefined]
/*
    Essa forma está errada, pois é criado um array com 5 posições vazias e não com 1 posição
    com o número 5
*/