// Arrow Functions
/*
    As Arrows Functions são funções anônimas que
    possuem uma sintâxe própria para ser criada.
*/

// Exemplo 1:
// Essa é a estrutura básica de uma Arrow Function
const doubleVelocity = (velocity) => {
    return velocity * 2
}

console.log(doubleVelocity(60)) // Retorna: 120

//Exemplo 2:
/*  Quando o bloco de código possui apenas uma linha,
    como no nosso caso, é possível simplificar ainda mais
    a estrutura da Arrow Function
*/
const doubleSpeed = (speed) => speed * 2

console.log(doubleSpeed(60)) // Retorna: 120

//Exemplo 3:
/*  Quando nossa Arrow Function possui apenas um parâmetro,
    como no nosso caso, podemos omitir os parênteses.
*/
const doubleAcceleration = acceleration => acceleration * 2

console.log(doubleAcceleration(60)) // Retorna: 120