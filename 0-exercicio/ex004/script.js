let departureDateEntry = prompt(`Digite a data de partida (DD/MM/YYYY): `)
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment() // Retorna data atual

let dateDiff = today - departureDate // Isso é possivel porque a data é calculada em milissegundos

let chosenOption = prompt(
    "Escolha como gostaria de exibir o tempo de partida:\n  1) Segundos\n  2) Minutos\n  3) Horas\n  4) Dias"
)

if (chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert(`Tempo de vôo: ${secondsOfDeparture} segundos`)

} else if (chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert(`Tempo de vôo: ${minutesOfDeparturearture} minutos`)

} else if (chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert(`Tempo de vôo: ${hoursOfDeparture} horas`)

} else if (chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert(`Tempo de vôo: ${daysOfDeparture} dias`)
} else {
    if (chosenOption == null || chosenOption == undefined) {
        chosenOption = 0
    }
    alert(`Opção inválida! A opção ${chosenOption} não existe.`)
}