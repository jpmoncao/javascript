// Métodos

// Exemplo 1:
class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speedUp(acceletarion) { // Criando um método próprio (semelhante a uma função)
        this.velocity += acceletarion
    }
}

let artemis = new Spaceship("Artemis")
console.log(artemis) // Exibe: Object { name: "Artemis", velocity: 0 }

artemis.speedUp(10)  // Executando o método
artemis.speedUp(15)  // Executando o método novamente

console.log(artemis) // Exibe: Object { name: "Artemis", velocity: 25 }