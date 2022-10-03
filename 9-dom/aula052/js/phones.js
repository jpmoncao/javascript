function addNewPhone() {
    const phoneForm = document.querySelector("form#form-phones")
    console.log(phoneForm.children) // Exibe: HTMLCollection { 0: p, length: 1 }

    const newPhone = phoneForm.children[0].cloneNode(true) // Clona o filho 0, caso true clona o filho e todas as heranças
    newPhone.value = ""
    const phonePosition = phoneForm.children.length + 1    // Define a posição do filho

    newPhone.querySelector("label").innerText = `Telefone ${phonePosition}` // Edita o label
    phoneForm.append(newPhone) // Adiciona um novo telefone (filho)

    console.log(phoneForm.children) // Exibe os filhos
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']") // Seleciona os telefones
    phones.forEach((phone, index) => {
        message += `Telefone ${index + 1}: ${phone.value}\n`
        // Formata a mensagem
    })
    alert(message) // Imprimi os telefones em um alert
}