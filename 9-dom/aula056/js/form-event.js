function save() {
    event.preventDefault() // Impede que o evento tenha o comportamento padrão
    let name = document.querySelector("input[name='name']").value
    let programmingLanguage = document.querySelector("select[name='programming-language']").value
    alert(`Nome: ${name}\nLinguagem de programação: ${programmingLanguage}`)
}