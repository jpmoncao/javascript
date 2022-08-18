let velocity = 0
let spaceship = prompt("Digite o nome da nave: ")

do {
    userOption = mainMenu()
} while (userOption != "4")

function mainMenu() {
    let userOption

    do {
        userOption = prompt("Escolha uma opção:\n  1) Acelerar a nave em 5 km/s\n  2) Desacelar em 5 km/s\n  3) Imprimir dados de bordo\n  4) Sair do programa")

        switch (userOption) {
            case "1":
                accelerateShip()
                break
            case "2":
                decelerateShip()
                break
            case "3":
                printDataShip()
                break
            default:
                break
        }

    } while (userOption != "1" && userOption != "2" && userOption != "3" && userOption != "4")

    return userOption
}

function accelerateShip() {
    alert(`Velocidade da nave:${velocity} km/s\nNova velocidade da nave:${velocity += 5} km/s`)
}

function decelerateShip() {
    if (velocity >= 5) {
        alert(`Velocidade da nave:${velocity} km/s\nNova velocidade da nave:${velocity -= 5} km/s`)
    } else {
        alert(`Velocidade da nave: ${velocity}\nNÃO É POSSÍVEL DIMINUIR 5 km/s!`)
    }
}

function printDataShip() {
    alert(`Nave: ${spaceship}\nVelocidade atual: ${velocity}`)
}
