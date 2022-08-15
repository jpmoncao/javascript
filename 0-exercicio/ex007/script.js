let spaceship = prompt(`Digite o nome da nave:`)
let newSpaceship = ""

let subCharacter = prompt(`Digite o caractere a ser substituido:`)
while (subCharacter.length > 1) {

    subCharacter = prompt(`Digite o caractere a ser substituido:`)
}
let newCharacter = prompt(`Digite o novo caractere:`)

for (let i = 0; i < spaceship.length; i++) {

    if (spaceship[i].toLowerCase() === subCharacter.toLowerCase()) {
        newSpaceship += newCharacter

    } else {
        newSpaceship += spaceship[i]
    }
}

alert(`Nave: ${spaceship}\nNave criptografada: ${newSpaceship}`)