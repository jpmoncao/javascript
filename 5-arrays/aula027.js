// Iteração com Arrays
/* 
    - As funções de iteração que veremos são HOF
        Enviamos callbacks
    - O callback é chamado para cada elemento do Array
    - Segue o seguinte formato:
        array.funcaoDeIterar(function(elementoAtual, indice, array) {
            <corpo da função>
        })
*/

// Exemplo 1:
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function (currentSpaceship, index) {
    console.log(`Nave: ${currentSpaceship}\nÍndice: ${index}`)
}) // Retorna: 
//          Nave: Deméter
//          Índice: 0
//          Nave: Darwin
//          Índice: 1
//          Nave: Supernova
//          Índice: 2
//          ...


// Exemplo 2:
let upcasedSpaceships = hitchedSpaceships.map(function (currentSpaceship, index) {
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(hitchedSpaceships) // Retorna: ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]
console.log(upcasedSpaceships) // Retorna: ["DEMÉTER", "DARWIN", "SUPERNOVA", "FENIX", "PULLER"]

// Exemplo 3:
let with7Chars = hitchedSpaceships.filter(element => element.length >= 7)

console.log(with7Chars) // Retorna: ["Deméter", "Supernova"]

with7Chars = hitchedSpaceships.find(element => element.length >= 7)

console.log(with7Chars) // Retorna: "Deméter"
