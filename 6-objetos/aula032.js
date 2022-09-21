// Adicionando funções em Objetos

// Exemplo 1:
let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function () {
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
    }
}

spaceship.turnOn() // A função é executada
spaceship.velocity = 0
spaceship.speedUp = function (spaceshipToSpeedUp, acceleration) {
    spaceshipToSpeedUp.velocity += acceleration
}

console.log(spaceship) // Exibe: Object { name: "Deméter", type: "Extração", maxCrew: 20, turnOn: turnOn(), velocity: 0, speedUp: speedUp(spaceshipToSpeedUp, acceleration) }
spaceship.speedUp(spaceship, 10)
console.log(spaceship) // Exibe: Object { name: "Deméter", type: "Extração", maxCrew: 20, turnOn: turnOn(), velocity: 10, speedUp: speedUp(spaceshipToSpeedUp, acceleration) }

// Exemplo 2:
/* 
    Para evitar códigos macarronicos, podemos usar o método 'this' na criação de uma função.
    Esse método acesse a propriedade do próprio objeto, assim, passando disso:
        spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {
            spaceshipToSpeedUp.velocity += acceleration
        }
        spaceship.speedUp(spaceship, 10)

    Para isso:
        spaceship.speedUp = function(acceleration) {
            this.velocity += acceleration
        }
        spaceship.speedUp(10)
    
    Assim, te privando seu objeto de ser anexado como paramêtro para usar um valor já exis-
    tente nele mesmo.
*/

spaceship.speedUp = function (acceleration) {
    this.velocity += acceleration
}
spaceship.speedUp(10)
console.log(spaceship) // Exibe: Object { name: "Deméter", type: "Extração", maxCrew: 20, turnOn: turnOn(), velocity: 20, speedUp: speedUp(acceleration) }