class Immobile {
    constructor(type, area, status) {
        type = this.type
        area = this.area
        status = this.status
    }

    addNewElementImmobile(container, type, area, status) {
        const templateHTML = `<div class="list-immobile-item">
                                <div class="status">${status}</div>
                                <h4>Imóvel: </h4>
                                <p>${type}</p>
                                <h4>Área: </h4>
                                <p>${area}</p>
                                <button class="remove" onclick="removeImmobile(this)">Remover</button>
                            </div>`


        // let colorStatus = (statusDiv) => {
        //     if (this.status == "Alugado") {
        //         statusDiv.style.color = "white"
        //         statusDiv.style.backgroundColor = "red"
        //     } else {
        //         statusDiv.style.color = "white"
        //         statusDiv.style.backgroundColor = "skyblue"
        //     }
        // }
        // colorStatus()

        container.innerHTML += templateHTML
    }
}