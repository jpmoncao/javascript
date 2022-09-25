// Getters e Setters

// Exemplo 1:
class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    
    set velocity(newVelocity) { // Simula uma variável em um método set
        if (newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportadora")
spaceship.velocity = 130 // Por conta do 'set', é interpretado como variável
console.log(spaceship)   // Exibe: Object { name: "Transportadora", currentVelocity: 120 }

// Exemplo 2:
class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() { // Simula uma variável em um método get 
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaya",  500)
console.log(resourceProcessor.weeklyProcessedLoad) // Exibe: 125

resourceProcessor.monthlyProcessedLoad = 600
console.log(resourceProcessor.weeklyProcessedLoad) // Exibe: 150