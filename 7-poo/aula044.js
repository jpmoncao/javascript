// Variáveis estáticas

// Exemplo 1:
class Spaceship {
    static get deceletationRate() {
        return 0.15
    }

    constructor(name) {
        this.name = name
        this.currentvelocity = 0
    }

    speedUp(acceleration) {
        this.currentvelocity += (acceleration - (1 - Spaceship.deceletationRate))
    }
}

let spaceship = new Spaceship("Apollo")

spaceship.speedUp(100)
console.log(spaceship) // Exibe: Object { name: "Apollo", currentvelocity: 99.15 }