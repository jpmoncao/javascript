// Exceções

/*
    • Exceções são erros que ocorrem no código
    • São capturados em tempo de execução (runtime)
    • Podem ser tratados para que o código não quebre
    • No JS, as exceções são lançadas pela classe Error
       ▪ Quando instanciada e lançada, o interpretador
         entende que ocorreu um erro
    • Para execução e exibe o erro
    • Podemos utilizar 'try' e 'catch'  para obter e 
    tratar esses erros
    • Assim como podemos lançar nossos próprios erros
        ▪ Utilizamos o throw
*/

// Exemplo 1:
class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot() {
        if(this.shotsLeft > 0) {
            console.log("Bang!")
            this.shotsLeft -= 1 
        } else {
            throw new Error(`Arma ${this.identifier} sem munição!`)
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

fenixWeapon.shoot()      // Exibe: Bang!
fenixWeapon.shoot()      // Exibe: Bang!
fenixWeapon.shoot()      // Exibe: Bang!
console.log(fenixWeapon) // Exibe: Object { identifier: 10, shotsLeft: 2 }

fenixWeapon.shoot()      // Exibe: Bang!
fenixWeapon.shoot()      // Exibe: Bang!
console.log(fenixWeapon) // Exibe: Object { identifier: 10, shotsLeft: 0 }

fenixWeapon.shoot()      // Exibe: Bang!
console.log(fenixWeapon) // Exibe: Object { identifier: 10, shotsLeft: -1 } ***Semânticamente estranho***

// (PÓS-THROW)
fenixWeapon.shoot()      // Exibe: Uncaught Error: Arma 10 sem munição!
console.log(fenixWeapon) // Exibe: Object { identifier: 10, shotsLeft: 0 } 

