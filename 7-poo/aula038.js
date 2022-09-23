// Associando classes

// Exemplo 1:
class Captain {
    constructor(name, age, flightHours) {
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship {
    constructor(name, crewQuantity, captainName, captainAge, captainFlightHours) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, captainFlightHours) // Criamos um objeto de outra classe
    }
}

let spaceship = new Spaceship("Ártemis", 13, "Will Grey", 45, 15000)

console.log(spaceship)
//  Exibe: Spaceship { name: 'Ártemis', crewQuantity: 13, Captain {name: 'Will Grey', age: 45, flightHours: 15000}, crewQuantity: 13, name: "Ártemis" }