// Rest Params

// Exemplo 1
function greetCrew(message, names) {
    names.forEach(name => console.log(`${message}, ${name}.`))
}

greetCrew('Seja bem-vindo(a)', ['Arthur', 'Jake', 'Melissa'])
// Exibe: Seja bem-vindo(a), Arthur
// Exibe: Seja bem-vindo(a), Jake
// Exibe: Seja bem-vindo(a), Melissa


// Exemplo 2 (w/ Rest Params)
function greetCrew(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}.`))
}

greetCrew('Seja bem-vindo(a)', 'Arthur', 'Jake', 'Melissa')
// Exibe: Seja bem-vindo(a), Arthur
// Exibe: Seja bem-vindo(a), Jake
// Exibe: Seja bem-vindo(a), Melissa
