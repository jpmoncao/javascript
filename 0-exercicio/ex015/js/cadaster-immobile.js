function getDataImmobile() {
    event.preventDefault()
    let type = document.querySelector("input[name='immobile']:checked").value
    let area = document.getElementById("area").value
    let status = document.querySelector("input[name='status']:checked").value

    cadasterNewImmobile(type, area, status)
    clearFields()
}

function cadasterNewImmobile(type = "Não informado", area = 0, status = "Não informado") {
    const container = document.querySelector("section.list-immobile")

    let immobile = new Immobile(type, area, status)
    immobile.addNewElementImmobile(container, type, area, status)
}

function removeImmobile(trigger) {
    let immobileList = document.querySelector("section.list-immobile")
    let immobileToRemove = trigger.parentNode
    
    immobileList.removeChild(immobileToRemove)
}  

function clearFields() {
    document.getElementById("area").value = ""
}
