// Funções

/*
    Funções são um bloco de código que recebem um nome
    de referência, e que só serão executados ao serem
    chamados. Ainda é possível estabelcer alguns para-
    mêtros a serem adicionados na hora da chamada.
    
    //Function
        function algumaTarefa() {
            <bloco de código>
        }
        algumaTarefa()
*/

// Exemplo 1:
function greetPilot() {
    alert("Bom dia, piloto!")
}

greetPilot() // Retorna um alerta: Bom dia, piloto!


// Exemplo 2:
function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(`Nova velocidade: ${newVelocity}`)
}

speedUp(60, 10) // Retorna: Nova velocidade: 70
speedUp(40, 20) // Retorna: Nova velocidade: 60
speedUp(70, 5) //  Retorna: Nova velocidade: 75


// Exemplo 3:
function greetPilot(name, message = "Olá") {
    alert(`${message}, ${name}!`)
}

greetPilot("John Mars")            // Retorna um alerta: Olá, John Mars! 
greetPilot("John Mars", "Bom dia") // Retorna um alerta: Bom dia, John Mars!

// Exemplo 4 (return):
function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration
    console.log(`Nova velocidade: ${newVelocity}`)
    return newVelocity // Vai retornar o valor para a chamada da função
}

let velocity = 80
let acceleration = 5
console.log(velocity) // Retorna: 80

velocity = speedUp(velocity, acceleration)
console.log(velocity) // Retorna: 85

console.log(speedUp(90, 10)) // Retorna: 100