// Estruturas de repetição

/*
    Estruturas de repetição são um método da lógica de
    programação, usados para fazer determinado algoritmo
    algumas vezes, conforme for determinado.
*/

// For
/*
    Estrutura do for:
    for(variável; expressão; laço iterável){
        <código a ser executado>
    }
*/

// Exemplo 1
let spaceship = "Helmet"
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] === "e") {
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship) // Resultado: Hilmit

/*
    O for é executado e comparado através da variável iterável,
    no caso, o "i". Enquanto a expressão  for falsa, o for continuara
    executado o bloco de código, e a cada iteração(repetição), a ação
    do laço iterável, no caso, i++ (i + 1). Portanto, a cada repetição
    o i muda seu valor:
        Na 1° repetição: 0
        Na 2° repetição: 1
        Na 3° repetição: 2...
*/
    