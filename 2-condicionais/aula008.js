// Comparação de dados

/*
    Existem sinais chamados de operadores lógicos, que servem para
    justamente comparar informações, retornando se a comparação é
    verdadeira (true) ou  falsa (false).
*/

// Igual(==)
let spaceship = "Golias"
let velocity = 80

console.log(spaceship == velocity)  // = false
console.log(spaceship == "Golias")  // = true
console.log(velocity == "80")       // = true (ignora a tipagem de dados)

// Idêntico(===)
console.log(velocity === "80")  // = false
console.log(velocity === 80)    // = true

// Diferente (!=)
console.log(velocity != 70)     // = true
console.log(velocity != 80)     // = false
console.log(velocity != "80")   // = false

// Não Idêntico (!==)
console.log(velocity !== "80")  // = true
console.log(velocity !== 80)    // = false

// Maior que (>) e Maior ou igual (>=)
console.log(velocity > 70)          // = true
console.log(velocity > 80)          // = false
console.log(spaceship > "Helmet")   // = false (considera se "Golias" vem depois que "Helmet" alfabeticamente)

console.log(velocity >= 80)         // = true
console.log(velocity >= "Golias")   // = true

// Menor que (<) e Maior ou igual (<=)
console.log(velocity < 120)         // = true
console.log(spaceship < "Helmet")   // = true (considera se "Golias" vem antes que "Helmet" alfabeticamente)

console.log(velocity <= 130)        // = true
console.log(spaceship < "Helmet")   // = true

