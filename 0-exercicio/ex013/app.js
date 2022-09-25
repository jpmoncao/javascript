class App {
    constructor() {
        this.spaceship = null
    }

    start() {
        this.enrollSpaceship()
        let choosenOption
        do {
            choosenOption = this.showInitialMenu()
            this.redirectFeature(choosenOption)
        } while (choosenOption != 3)

        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt("Nome da nave:")
        let spaceshipCrewQuantity = prompt("Quantidade de tripulantes:")
        let spaceshipType = this.askForSpaceshipType()

        if (spaceshipType == "1") {
            let weaponsQuantity = prompt("Quantidade de armas:")
            this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrewQuantity, weaponsQuantity)

        } else {
            let sitQuantity = prompt("Quantidade de assentos:")
            this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrewQuantity, sitQuantity)
        }

    }

    askForSpaceshipType() {
        let choosenOption
        while (!["1", "2"].includes(choosenOption)) {
            choosenOption = prompt(
                "Qual o tipo da nave?\n"
                + "  1) Nave de batalha\n"
                + "  2) Nave de transporte"
            )
        }
        return choosenOption
    }

    showInitialMenu() {
        const promptMessage = "O que deseja fazer?\n"
            + " 1) Acelerar a nave\n"
            + " 2) Trocar a nave\n"
            + " 3) Imprimir e sair"
        let choosenOption = prompt(promptMessage)
        while (!["1", "2", "3"].includes(choosenOption)) {
            choosenOption = prompt(promptMessage)
        }
        return choosenOption
    }

    redirectFeature(choosenOption) {
        switch (choosenOption) {
            case "1":
                this.accelerateSpaceship()
                break

            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("Quanto deseja acelerar?"))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMessage = `Nome: ${this.spaceship.name}\n`
            + `Quantidade de tripulantes: ${this.spaceship.crewQuantity}\n`
            + `Velocidade atual: ${this.spaceship.currentVelocity}`
        alert(finalMessage)
    }

}