const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let with9Crew = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] >= 9
}).map(spaceship => {
    return spaceship[0]
})

let unhitchedSpaceship = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let upcasedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

alert(
      `Espaçonaves com mais de 9 tripulantes: ${with9Crew.join(', ')}\n`
    + `Espaçonaves desatreladas: ${unhitchedSpaceship}\n`
    + `Espaçonaves destacadas: ${upcasedSpaceships.join(', ')}`
)