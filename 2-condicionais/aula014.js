// Switch case
/*
    É uma estrutura de condição usada de forma difente do IF/ELSE, ela recebe
    um valor e analisa em cada case, se for real executada o bloco de código
    mas se não for pula para o próximo case. Caso nenhum dos cases for reais,
    executa o bloco default, que serve como um case padrão.
*/

// Exemplo 01
let velocity = 80

switch (velocity * 2) {
    case 100:
        console.log("Sua velocidade é 100km/s")
        break
    case 160:
        console.log("Sua velocidade é 160km/s") // Essa mensagem será exibida
        break                                   // Para a execução do switch
    default:
        console.log("Velocidade não identificada")
        break
}

// Exemplo 02
let spaceship = "Elemental"

switch (spaceship) {
    case "Golias":
        console.log("Nave mais resitente")
        break
    case "Raptor":
        console.log("Nave mais rápida")
        break
    case "Enterprise":
        console.log("Nava da Frota Estelar")
        break
    default:
        console.log("Nave comum") // Essa mensagem será exibida
        break
}

// Exemplo 03
velocity = 90

switch (velocity) {
    case 80:
    case 90:
    case 100:
        console.log("Velocidade aceitável") // Essa mensagem será exibida
        break
    case 110:
        console.log("Velocidade alta, mas aceitável")
        break
    default:
        console.log("Velocidade não identificada")
        break
}   /*
        Apesar do valor ser 90 ele exibe o bloco do case 100, isso acontece
        porque o switch após achar o primeiro case real, o executa e continua
        a executar os próximos até achar o comando break (que não existe no bloco
        do case 90).
    */