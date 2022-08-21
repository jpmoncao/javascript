let spaceshipVelocity = 150

function slowDown(velocity, printer) {
    while (velocity > 0) {
        printer(velocity)
        velocity -= 20
    }
    alert("Nave parada!\nAs comportas podem ser abertas.")
}
newVelocity = slowDown(spaceshipVelocity, (velocity) => {
    alert(`Velocidade atual:${velocity}`)
})
