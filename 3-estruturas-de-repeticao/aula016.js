// Estruturas de repetição

/*
    Estruturas de repetição são um método da lógica de
    programação, usados para fazer determinado algoritmo
    algumas vezes, conforme for determinado.
*/

// While
/*
    Estrutura do while:
    while(expressão){
        <código a ser executado>
    }
*/

// Exemplo 1:
let velocity = 50;
let acceleration = 5;

while (velocity <= 100) {
  console.log(`Acelerando: estamos a ${velocity} km/s`);
  velocity += acceleration; // velocity = velocity + acceleration
}
/*
   Esse bloco de código será executado até a expressão for falsa, ou seja, velocity for maior que 100
   Enquanto for true, ele continuará repetindo
   -Exemplo:
        Acelerando: estamos a 50 km/s, 55 km/s, 60 km/s, 65 km/s, 70 km/s..., e por ai vai, até 100 km/s!
*/

// Exemplo 2:
let pos = 0;
let constellation = "Andromeda";
let constellationLength = constellation.length;
while (pos < constellation) {
  if (constellation[pos] == "a" || constellation[pos] == "A") {
    console.log(pos);
  }
  pos++;
}
