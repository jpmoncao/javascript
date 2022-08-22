// Arrays Bidimensionais
/*
    Os Arrays bidimensionais, são Arrays que armaze-
    nam outros Arrays, algo que é totalmente válido.
*/

// Exemplo 1:
let hitchedSpaceships = [["Elemental", 7], ["Helmet", 13], ["Golias", 5], ["Supernova", 10]]
hitchedSpaceships.push(["Colossus", [true, false]])

console.log(hitchedSpaceships)      //Retorna: [["Elemental", 7],["Helmet", 13],["Golias", 5],["Supernova", 10],["Colossus", 8]]
console.log(hitchedSpaceships[3])   //Retorna: ["Supernova", 10]
console.log(hitchedSpaceships[3][0])//Retorna: "Supernova"
console.log(hitchedSpaceships[3][1])//Retorna: 10
console.log(hitchedSpaceships[4][1][0])//Retorna: true