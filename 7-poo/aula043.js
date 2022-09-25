// Métodos estáticos

// Exemplo 1:
class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours) { // Método estático
        return monthlyProcessing / 720 * hours // Carga mensal divida pelas horas do mês vezes as horas
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6) // Chamamos o método sem necessariamente instanciar um objeto
console.log(totalProcessing) // Exibe: 4.166666666666666

let processor = new ResourceProcessorStation("Gaya", 2000)         // ***FORMA***INCORRETA***
processor.calculateProcessInHours(processor.monthlyProcessing, 10) // Exibe: Uncaught TypeError: processor.calculateProcessInHours is not a function (função não encontrada)

totalProcessing = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalProcessing) // Exibe: 27.77777777777778