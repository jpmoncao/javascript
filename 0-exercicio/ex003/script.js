let pilot = prompt(`Digite o nome do piloto:`)

let wantedVelocity = prompt(`Digite a velocidade desejada:`)
const initialVelocity = 0
let confirmVelocity = confirm(`Estamos indo para ${wantedVelocity}km/h. Deseja confirmar a ação?`)

if (confirmVelocity) {
    let velocity = wantedVelocity - initialVelocity

    if (velocity < 0) {
        alert("Nave está parada. Considere partir e aumentar a velocidade")
    } else if (velocity < 40) {
        alert("Você está devagar, podemos aumentar mais")
    } else if (velocity >= 40 && velocity < 80) {
        alert("Parece uma boa velocidade para manter")
    } else if (velocity >= 80 && velocity < 100) {
        alert("Velocidade alta. Considere diminuir")
    } else if (velocity > 100) {
        alert("Velocidade perigosa! Controle automático forçado")
    }
}


alert(`CONTROLE DE BORDO\nPiloto: ${pilot}\nVelocidade atual: ${wantedVelocity - initialVelocity}`)