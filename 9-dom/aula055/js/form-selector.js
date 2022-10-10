function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionValue = []
    developerOptions.forEach(element => {
        optionValue.push(element.value)
    })
    let optionChecked = optionValue.join(", ")
    alert(`Nome: ${name}\nCor favorita: ${favoriteColor}\nGosta de programar? ${likeProgramming}\nConhecimentos: ${optionChecked}`)
}