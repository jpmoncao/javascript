// High Order Functions
/*
    -High Order Functions siginifica Funções de Alta Classe;
    -São funções que recebem ou retornam outras funções;
    -As funções que uma HOF recebem, geralmente são anônimas:
        Podemos usar uma Arrow Function ou não.
    -A função é enviada como um parâmetro de uma HOF é chama-
     da de callback.
*/

//Exemplo 1:
function doubleVelocity(velocity, printer) {    // printer: callback
    console.log("Entrei em double velocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
}

let printVelocity = velocity => {
    console.log(`Nova velocidade: ${velocity}km/s`)
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity) // Retorna: "Entrei em double velocity"
//          "Nova velocidade: 120km/s"

//Exemplo 2:
/*
    Nesse exemplo, invés de criarmos uma função anô-
    nima, depois passamos como parâmetro, criamos ela
    diretamente como parâmetro
*/
let anotherVelocity = doubleVelocity(50, velocity => {
    console.log(`Outra velocidade: ${velocity}`)
})
// Retorna: "Entrei em double velocity"
//          "Outra velocidade: 100km/s"