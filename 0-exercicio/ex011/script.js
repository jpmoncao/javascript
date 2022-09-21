let spaceship = {
    velocity: 0,
    maxVelocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration
        if (this.velocity > this.maxVelocity) {
            alert(`COMANDO NEGADO! Velocidade máxima de ${this.maxVelocity} será ultrapassada!`)
            this.velocity -= acceleration
        }
        alert(`Velocidade atual: ${this.velocity}`)
        showMenu()
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Nome da nave: ")
    spaceship.type = prompt("Tipo da nave: ")
    spaceship.maxVelocity = Number(prompt("Velocidade máxima da nave: "))
    if (spaceship.name != null && spaceship.name != undefined && spaceship.name.trim() != "" && spaceship.type != null && spaceship.type != undefined && spaceship.name.trim() != "" && spaceship.maxVelocity > 0) {
        return true
    }
    else {
        alert("ERRO: Algum dado não foi preenchido corretamente! Tente novamente!")
        return false
    }
}

function accelerate() {
    let acceleration = Number(prompt("Deseja acelerar quantos km/h?"))
    spaceship.speedUp(acceleration)
}

function stop() {
    alert(
        `CONTROLE DA NAVE\n`
        + `Nome: ${spaceship.name}\n`
        + `Tipo: ${spaceship.type}\n`
        + `Velocidade: ${spaceship.velocity}\n`
        + `Velocidade Máxima: ${spaceship.maxVelocity}\n\n`
        + `PARANDO A NAVE...`
    )

    spaceship.velocity = 0
}

function showMenu() {
    do {
        let resp = prompt(
            "CONTROLE DA NAVE\n"
            + "Deseja acelerar?\n"
            + "  1) Sim, acelere a nave.\n"
            + "  2) Não, pare a nave.")

        switch (resp) {
            case "1":
                accelerate()
                resp = false
                break
            case "2":
                stop()
                resp = true
                break
            default:
                alert(`ERRO: Opção ${resp} não existe! Tente novamente.`)
                break
        }
    } while (!resp)
}

do {
    register = registerSpaceship()
} while (!register)

showMenu()
