let olderPersonName = prompt(`Digite o nome da pessoa mais velha:`)
let olderPersonAge = prompt(`Digite a idade da pessoa mais velha:`)

let youngerPersonName = prompt(`Digite o nome da pessoa mais nova:`)
let youngerPersonAge = prompt(`Digite a idade da pessoa mais nova:`)

const ageDifference = olderPersonAge - youngerPersonAge

alert(
    `PESSOA MAIS VELHA\nNome: ${olderPersonName}\nIdade: ${olderPersonAge}` +
    `\n\nPESSOA MAIS NOVA\nNome: ${youngerPersonName}\nIdade: ${youngerPersonAge}` +
    `\n\nTendo uma diferença de idade de: ${ageDifference} anos`
)