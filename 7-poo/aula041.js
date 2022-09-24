// Método super

// Exemplo 1:
class Spaceship {
    constructor(name, maxCrew, maxRecommendVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendVelocity = maxRecommendVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendVelocity) {
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA! \nDiminua ou poderá provocar danos à nave.")
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendVelocity, maxLoadWeight) {
        super(name, maxCrew, maxRecommendVelocity) // Chama o construtor da classe pai
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration) {
        acceleration /= 2
        alert(`Implementando velocidade em ${acceleration} km/s`)
        super.speedUp(acceleration) // Chama o método pai
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)
console.log(transportSpaceship) // Exibe: Object { name: "Transportadora", maxCrew: 4, maxRecommendVelocity: 100, currentVelocity: 0, maxLoadWeight: 400 }

transportSpaceship.speedUp(210) 
console.log(transportSpaceship) // Exibe: Object { name: "Transportadora", maxCrew: 4, maxRecommendVelocity: 100, currentVelocity: 105, maxLoadWeight: 400 }