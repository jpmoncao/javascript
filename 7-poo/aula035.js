// Construtores e instâncias
/*
    • Instância de uma classe é o que dá origem ao objeto
    • A classe possui um método especial chamado 'constrututor'
        • Usado para definir valores iniciais
        • Este método é usado quando criamos uma instância de uma
        classe com a palavra new
*/

// Exemplo 1:
class SpacialStation {
    constructor(name, platformsQuantity) { // Método construtor
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatório", 40) // Criando um objeto a partir da classe
console.log(observatory) // Exibe: Object { name: "Observatório", platformsQuantity: 40 }

// Exemplo 2:
class Spaceship {
    constructor(myName, type = "Descoberta") {
        this.name = myName
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin) // Exibe: Object { name: "Darwin", type: "Descoberta" }
console.log(helmet) // Exibe: Object { name: "Helmet", type: "Batalha" }