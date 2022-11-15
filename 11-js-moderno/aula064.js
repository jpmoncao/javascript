//  Operador Spread

// Exemplo 01
let spaceships = ['Colossus', 'Ártemis', 'Spaceships']
console.log(spaceships)     // Exibe: ['Colossus', 'Ártemis', 'Spaceships']
console.log(...spaceships)  // Exibe: 'Colossus' 'Ártemis' 'Spaceships' (Expandi como elemento único)

// Exemplo 02
let newSpaceships = [...spaceships, 'Puller']
console.log(newSpaceships)  // Exibe: [['Colossus', 'Ártemis', 'Spaceships'], 'Puller']

// Exemplo 03 
function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10]
let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity) // Exibe: 70