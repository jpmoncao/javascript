

function setBlueBackground() {
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

function setRedColor() {
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

function removeRedColor() {
    let element = document.getElementById("style-text")
    element.classList.remove("red-color")
}

function setTransparentBackground() {
    let element = document.getElementById("style-text")    
    element.style.backgroundColor = "transparent"
}