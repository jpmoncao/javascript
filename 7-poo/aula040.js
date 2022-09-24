// Sobrescrita de métodos

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
    speedUp() {  // Sobrescreve o método
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)

transportSpaceship.speedUp()
console.log(transportSpaceship) // Exibe: Object { name: "Transportadora", maxCrew: 4, maxRecommendVelocity: 100, currentVelocity: 1 }

transportSpaceship.speedUp(100)
console.log(transportSpaceship) // Exibe: Object { name: "Transportadora", maxCrew: 4, maxRecommendVelocity: 100, currentVelocity: 2 } ** NÃO CHAMA O MÉTODO DA CLASSE PAI