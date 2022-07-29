// Aula 006

alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let nome = prompt("Qual seu nome?")
let age = prompt("Qual sua idade?")
let ageConfirmation = confirm(`Sua idade é ${age} anos. Confirma essa informação?`)

alert(`Nome: ${nome}\nIdade:${age}\nIdade confirmada: ${ageConfirmation}`)