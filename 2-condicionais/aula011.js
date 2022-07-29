// Condicionais

/*
    São controles fluxo de dados que através de expressões lógicas nos permite saber se será tomada uma media caso for
    verdadeira ou não. Assim, criando a possibilidade ded condições na lógica de programação.
*/

 
/* 
 - If (Se)
        O if avalia se uma expressão é true, e SE for, executa o bloco de código das chaves.
*/
let velocity = 90

if (velocity < 100) {
    console.log("Estamos numa velocidade aceitável.")
}


/*
 - Else (senão)
        Caso a expressão for false, o else executa o bloco de código das chaves.
*/

velocity = 110

if (velocity < 100) {
    console.log("Estamos numa velocidade aceitável.")
} else {
    console.log("Entrando em velocidade de risco!")
}


/*
 - Else if (Senão, se)
        O else if é acionado quando uma 1ª expressão é falsa, assim o fluxo
        é redirecionado para o else, esse que possui um outra if dentro de 
        si avaliando uma outra expressão lógica.
*/

velocity = 80

if (velocity < 40) {
    console.log("Velocidade baixa")
} else {
    if (velocity <=100) {
        console.log("Cuidado próximo a velocidade de risco")
    } else {
        console.log("Velocidade de risco!")
    }
}

// Operador ternário
/*
    Segue a mesma lógica que um if comum, porém é realizado em uma única expressão,
    é o que chamamos de "if de uma linha".
*/

(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")
//      ? = IF
//      : = ELSE
