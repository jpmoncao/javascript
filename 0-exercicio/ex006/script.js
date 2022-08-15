let numbersOfDouble = 0

let spaceshipName = prompt(`Digite o nome da nave:`)
let answerUser = prompt(`Deseja entrar em dobra espacial?\n1-Sim\n2-Não`)

if (answerUser == "1") {

    while (answerUser != "2") {
        numbersOfDouble++
        answerUser = prompt(`Deseja realizar a próxima dobra?\n1-Sim\n2-Não`)
    }

    alert(`Nave: ${spaceshipName}\nDobras realizadas: ${numbersOfDouble}`)

} else {

    alert(`Nave não iniciou dobra de velocidade!`)
}
