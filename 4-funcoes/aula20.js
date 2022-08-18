// Funções anônimas

/*
    São usadas dentro de variáveis e podem ser acessadas pelo 
    próprio nome da variável. Sua única diferença para as fun-
    ções tradicionais é que só podem ser acessadas após sua 
    declaração, e não em um escopo global.
*/

//Exemplo 1:
let doubleSpeed = function (velocity) {
    return velocity * 2
}

let newVelocity = doubleSpeed(40)
console.log(newVelocity) // Retorna: 80