function show() {
    let element = document.getElementById("name") // Seleciona pelo id
    console.log(element)       // Exibe: <input id="name" type="text" name="name">
    console.log(element.value) // Exibe: João Pedro 
                               //        ** Texto escrito no input **

    let elements = document.getElementsByName("phone") // Seleciona pelo nome
    console.log(elements)          // Exibe: NodeList [ input#phone1, input#phone2 ]
    console.log(elements[0].value) // Exibe: 11111111 ** Número escrito no input **
    console.log(elements[1].value) // Exibe: 22222222 ** Número escrito no input **

    elements = document.querySelectorAll("div#phones input[name='phone']") // Seleciona por seletor
    console.log(elements)          // Exibe: NodeList [ input#phone1, input#phone2 ]
    console.log(elements[0].value) // Exibe: 11111111 ** Número escrito no input **
    console.log(elements[1].value) // Exibe: 22222222 ** Número escrito no input **
    

    elements = document.getElementsByTagName("input") // Seleciona pela tag
    console.log(elements)          // Exibe: HTMLCollection { 0: input#name, 1: input#phone1, 2: input#phone2, length: 3, … }
    console.log(elements[0].value) // Exibe: João Pedro **  Texto escrito no input **
    console.log(elements[1].value) // Exibe: 11111111   ** Número escrito no input **
}                              