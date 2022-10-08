function getDataHome() {
    let numberHome = document.getElementById("number").value
    let neighborhoodHome = document.getElementById("neighborhood").value
    let cityHome = document.getElementById("city").value
    let areaHome = document.getElementById("area").value

    return [numberHome, neighborhoodHome, cityHome, areaHome]
}

function createNewHomeElement(number = 000, neighborhood = "Bairro não informado", city = "Cidade não informada", area = 0) {
    const homeHTMLTemplate = `<div class="home-list-children">
                                <p>Número: ${number}</p>
                                <p>Bairro: ${neighborhood}</p>
                                <p>Cidade: ${city}</p>
                                <p>Área da casa: ${area}²</p>
                                <div class="home-list-children-buttons">
                                    <button onclick="removeHomeToList(this)">Remover</button>
                                </div>  
                            </div>`
    return homeHTMLTemplate
}

function cadasterHome() {
    const dataHome = getDataHome()
    const homeList = document.querySelector("div.home-list")

    let newHome = createNewHomeElement(dataHome[0], dataHome[1], dataHome[2], dataHome[3])
    homeList.innerHTML += newHome
}

function removeHomeToList(button) {
    let houseToRemove = (button.parentNode).parentNode
    let houseList = document.querySelector("div.home-list")
    houseList.removeChild(houseToRemove)
}