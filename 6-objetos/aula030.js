// Objetos (parte 2)

// Exemplo 1:
let spacialStation = {
    name: "Fox",
    platformsQuantity: 10,
    "new name": "Estelar",
    true: false,
    2: "Descoberta"
    // É possivel declarar chaves de todas maneiras, mas podemos esbarrar em exceções...
}

// Exceção (INTEIROS):
console.log(spacialStation.2)    // Exibe: Uncaught SyntaxError: missing ) after argument list
console.log(spacialStation[2])   // Exibe: Descoberta
console.log(spacialStation["2"]) // Exibe: Descoberta

// Exceção (ALFANUMÉRICOS)
console.log(spacialStation.new name)     // Exibe: Uncaught SyntaxError: missing ) after argument list
console.log(spacialStation["new name"])  // Exibe: "Estelar"
