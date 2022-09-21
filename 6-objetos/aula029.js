/* 
Objetos (parte 1)

   • São estruturas de dados, capazes de armazenar e organizar outros dados;
   • Dados são organizados através de propriedades;
   • Associação chave-valor;
       □ Chave: nome da propriedade
       □ Valor: valor que esta propriedade irá receber
   • Também podem armazenar internamente qualquer outro tipo.

*/


// Exemplo 1:
let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship) // Exibe:   Object { name: 'Fenix', crewQuantity: 7, type: 'Batalha' }
// Sintaxe: {chave1: valorX, chave2: valorY, chave3: valorZ}       
console.log(spaceship.type)    // Exibe: "Batalha"
console.log(spaceship["type"]) // Exibe: "Batalha"

// Exemplo 2:
spaceship.isHitched = false
spaceship["shieldLevel"] = 100
console.log(spaceship) // Exibe: Object { name: "Fenix", crewQuantity: 7, type: "Batalha", isHitched: false, shieldLevel: 100 }

// Exemplo 3:
let spaceship = {}
console.log(spaceship) // Exibe: Object {}

// Exemplo 4: 
let spaceship = new Object()
console.log(spaceship) // Exibe: Object {}