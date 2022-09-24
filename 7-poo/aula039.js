// Herança
/*
    • É um recurso do paradigma Orientado a Objetos;
    • Permite que as classes herdem características de outras classes;
        ▪ Ou seja, declaramos uma classe que vai herdar métodos e atributos
          outra classe
    • É uma técnica de reuso de código;
    • As duas classes dever ter uma realção de "é um"
        ▪ Por exemplo: Todo capitão 'é uma' pessoa
        ▪ Poderia ter uma classe Captain herdando de Person
*/

// Exemplo 1:
class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if (this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nDiminui ou poderá provocar danos à nave.")
        }
    }
}

class BattleSpaceship extends Spaceship { // BattleSpaceship herda de Spaceship
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave da batalha")
    }
}

class DiscoverSpaceship extends Spaceship { // DiscoverSpaceship herda de Spaceship
    stop() {
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

let darwin = new DiscoverSpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin) // Exibe: Object { name: "Darwin", maxCrew: 10, maxRecommendedVelocity: 200, currentVelocity: 0 }
console.log(fenix)  // Exibe: Object { name: "Fenix", maxCrew: 8, maxRecommendedVelocity: 240, currentVelocity: 0 }

darwin.speedUp(210) // Executa método herdado (mostra alert)
fenix.speedUp(230)  // Executa método herdado

console.log(fenix)  // Exibe: Object { name: "Fenix", maxCrew: 8, maxRecommendedVelocity: 240, currentVelocity: 230 }

darwin.stop()       // Executa método
fenix.stop()        // Executa método

console.log(darwin) // Exibe: Object { name: "Darwin", maxCrew: 10, maxRecommendedVelocity: 200, currentVelocity: 0 }
console.log(fenix)  // Exibe: Object { name: "Fenix", maxCrew: 8, maxRecommendedVelocity: 240, currentVelocity: 0 }