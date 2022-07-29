// Operadores lógicos part. 2

let spaceship = "Elemental"
let velocity = 20

// E/And (&&)
console.log(spaceship.length == 9 && velocity > 15) // = true ("Elemental" possui 9 caracteres e velocidade é maior que 15)
// Logo V + V = V

console.log(velocity > 10 && velocity < 19)         // = false (velocity é maior que 10, mas não menor que 19)
// Logo V + F = F

console.log(spaceship == "Golias" && velocity > 20) // = false (spaceship não é igual a "Golias", nem maior que 20)         
// Logo F + F = F

// Ou/Or (||)
console.log(spaceship.length == 9 || velocity > 15) // = true ("Elemental" possui 9 caracteres e velocidade é maior que 15)
// Logo V + V = V

console.log(velocity > 10 || velocity < 19)         // = true (velocity não é menor que 19, mas é maior que 10)
// Logo V + F = V      

console.log(spaceship == "Golias" || velocity > 20) // = false (spaceship não é igual a "Golias", nem maior que 20)         
// Logo F + F = F

// Não/No (!)                        
console.log(!(velocity > 15))         // = false (velocity > 15 é VERDADEIRO, logo o operador not o transforma false)
// Logo Não F = V

console.log(!(spaceship == "Golias")) // = true (spaceship == "Golias" não é VERDADEIRO, logo o operador not o transforma true)
                                      // Logo Não V = F

/*
    |     TABELA VERDADE     |
    |Oper. | V+F | V+V | F+F |
    |  &&  |  F  |  V  |  F  |   !V = true
    |  ||  |  V  |  V  |  F  |    V = false
*/