// Aninhando Arrays e Objetos

// Exemplo 1:
let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Pietra", "Thiago", "João Pedro"]
}

spaceship.crew.push("Ten. Fernanda") // Podemos usar métodos de Array ja que a propriedade Crew é um.

console.log(spaceship)
/* Exibe: Object {
            "name": "Supernova",
            "type": "Batalha",
            "crew": Array [
                "Cap. Silva",
                "Pietra",
                "Thiago",
                "João Pedro",
                "Ten. Fernanda"
            ]
        }
*/

// Exemplo 2:
let spaceships = [
    { name: "Elemental", crewQuantity: 10 },
    { name: "Colossus", crewQuantity: 8 },
    { name: "Helmet", crewQuantity: 15 }
]

console.log(spaceships[2].name)         // Exibe: Helmet
console.log(spaceships[1].crewQuantity) // Exibe: 8

spaceships.forEach(spaceship => {
    alert(`${spaceship.name} tem ${spaceship.crewQuantity} tripulantes.`)
})

// Exemplo 3:
spaceship = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}

console.log(spaceship.captain.name) // Exibe: Hugo Trent
