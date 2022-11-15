// Desestruturação de objetos e arrays

// Exemplo 01 (Objeto)
let spaceship = {
    name: 'Colossus',
    crewQuantity: 10,
    isHitched: false,
}

// let spaceshipName = spaceship.name
// let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity) // Exibe: 'Colossus' 10

// Exemplo 02
let { name: spaceshipName, crewQuantity: crewQuantity } = spaceship

console.log(spaceshipName, crewQuantity) // Exibe: 'Colossus' 10



// Exemplo 03 (Array)
let spaceships = ['Colossus', 'Ártemis', 'Fênix']

// let colossus = spaceship[0]
// let artemis = spaceship[1]

console.log(colossus, artemis) // Exibe: 'Colossus' 'Ártemis'

// Exemplo 04
let [colossus, artemis] = spaceships
console.log(colossus, artemis) // Exibe: 'Colossus' 'Ártemis'