// Try, catch e finally

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

    reload() {
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

try {
    fenixWeapon.shoot()    // Exibe: Bang!
    fenixWeapon.shoot()    // Exibe: Bang!
    fenixWeapon.shoot()    // Exibe: Bang!
    fenixWeapon.shoot()    // Exibe: Bang!
    fenixWeapon.shoot()    // Exibe: Bang!
    fenixWeapon.shoot()

} catch(e) { // Executa caso aconteça uma exceção
    console.log(e.message) // Exibe: Arma 10 sem munição!
    fenixWeapon.reload()

} finally { // Executa independente de acontecer uma exceção
    console.log("Arma deu bons tiros")
}


console.log(fenixWeapon)   // Exibe: Object { identifier: 10, shotsLeft: 5 }