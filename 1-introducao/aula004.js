// Variavéis
//      As variavéis são recurso que utilizamos para armazenarmos valores, e usarmos
//      futuramente no nosso código. Temos 3 tipos de variável.

// Let (valores variáveis):
let spaceship = "FE Supernova"  // Cria variavel e atribui o valor "FE Supernova"
console.log(spaceship)          // = "FE Supernova" (retorna o valor da variável)
spaceship = "FE Helmet"         // Troco o valor da variável
console.log(spaceship)          // = "FE Helmet" (retorna o novo valor da variável)

// Const (valores constantes):
const squad = "Estelar"  // Cria constante e atribui o valor "Estelar"
console.log(squad)       // = "Estelar" (retorna o valor da constante)
squad = "Espacial"       // Tenta trocar o valor **NÃO É POSSÍVEL** (valor é constante)
console.log(squad)       // = "Estelar" (retorna o valor da constante)

// Var (valores variáveis, herança de outras linguagens)
var velocity = 80       // Cria variavel e atribui o valor "FE Supernova"
console.log(velocity)   // = 80 (retorna o valor da variável)
velocity = 25           // Troco o valor da variável
console.log(velocity)   // = 25 (retorna o novo valor da variável)

// Variáveis sem valores
let noValue
console.log(noValue) // = undefined
// EXPLICAÇÃO: Isso acontece porque a variável foi apenas criada, mas não
//             tem valor atribuido, assim, ficando undefined.

// Retornando as respostas
let departureConfirmation = confirm("Nave pronta pra decolar. Aguardando confirmação")
console.log(departureConfirmation) // Retorna true ou false

let pilot = prompt("Qual seu nome, piloto?")
console.log(pilot) // Retorna resposta do prompt