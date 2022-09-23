class Spaceship {
    constructor(name, crewQuantity = 0) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.hitchedStatus = false
        this.doorStatus = false
    }

    hitchingSpaceship() {
        if (!this.hitchedStatus) {
            let confirmHitch = confirm("Deseja engatar a nave?")
            if (confirmHitch) {
                this.hitchedStatus = true
                this.openedDoorStatus = true
                alert("Nave foi engatada!")
            } else {

            }
        } else {
            alert("A nave já está engatada!")
        }
    }
}


function showMenu() {
    let choosenOption = prompt(
        `ESCOLHA UMA OPÇÃO:\n`
        + `  1) Realizar engate\n`
        + `  2) Imprimir naves\n`
        + `  3) Sair do programa`
    )

    return choosenOption
}

let hitchedSpaceships = new Array()

function createSpaceship() {
    let name = prompt("Nome da nave:")
    let crewQuantity = prompt("Número de tripulantes:")
    let spaceship = new Spaceship(name, crewQuantity)
    return spaceship
}

function printHitchedSpaceships(spaceships) {
    let spaceshipsList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipsList += `${index + 1} - ${spaceship.name} (${spaceship.crewQuantity} tripulantes)\n`
    })
    alert(spaceshipsList)
}

let choosenOption = showMenu()
console.log(choosenOption)
do {
    switch (choosenOption) {
        case "1":
            let spaceship = createSpaceship()
            spaceship.hitchingSpaceship()
            if (spaceship.hitchedStatus) {
                hitchedSpaceships.push(spaceship)
            }
            break
        case "2":
            printHitchedSpaceships(hitchedSpaceships)
            break
        case "3":
            alert("Saindo...")
            break
        default:
            break
    }
    choosenOption = showMenu()
} while (choosenOption != 3)