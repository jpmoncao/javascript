let distance = prompt("Digite a distância em anos luz:")
let chosenOption = prompt("Escolha uma das opções:\n1) Parsec (pc)\n2) Unidade astronômica (AU)\n3) Quilômetros (km)")

let chosenUnity
let convertedDistance
console.info(chosenOption)

switch (chosenOption) {
    case "1":
        console.log(`Opção ${chosenOption} escolhida: Parsec`)

        chosenUnity = "Parsec"
        convertedDistance = distance * 0.306601
        break

    case "2":
        console.log(`Opção ${chosenOption} escolhida: Unidade astronômica`)

        chosenUnity = "Unidades astronômicas"
        convertedDistance = distance * 63241, 1
        break

    case "3":
        console.log(`Opção ${chosenOption} escolhida: Quilômetros`)

        chosenUnity = "Quilômetros"
        convertedDistance = distance * 9, 5 * (Math.pow(10, 12))
        break

    default:
        console.warn(`Opção ${chosenOption} escolhida: não existe!`)

        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert(`Distância em anos-luz: ${distance}\nDistância em ${chosenUnity}: ${convertedDistance}`)