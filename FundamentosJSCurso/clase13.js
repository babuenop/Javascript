/* ESTRUCTURA FOR
La estructura for permite realizar bucles de una forma muy sencilla. 

for(inicializacion; condicion; actualizacion) {
  ...
}

La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición".

La "inicialización" es la zona en la que se establece los valores iniciales de las variables que controlan la repetición.
La "condición" es el único elemento que decide si continua o se detiene la repetición.
La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición. var mensaje = "Hola, estoy dentro de un bucle";

for(var i = 0; i < 5; i++) {
  console.log(mensaje);
}

La parte de la inicialización del bucle consiste en:

var i = 0;

Por tanto, en primer lugar se crea la variable i y se le asigna el valor de 0. Esta zona de inicialización solamente se tiene en consideración justo antes de comenzar a ejecutar el bucle. Las siguientes repeticiones no tienen en cuenta esta parte de inicialización.

La zona de condición del bucle es:

i < 5
Los bucles se siguen ejecutando mientras se cumplan las condiciones y se dejan de ejecutar justo después de comprobar que la condición no se cumple. En este caso, mientras la variable i valga menos de 5 el bucle se ejecuta indefinidamente.

Como la variable i se ha inicializado a un valor de 0 y la condición para salir del bucle es que i sea menor que 5, si no se modifica el valor de i de alguna forma, el bucle se repetiría indefinidamente.

Por ese motivo, es imprescindible indicar la zona de actualización, en la que se modifica el valor de las variables que controlan el bucle:

i++
En este caso, el valor de la variable i se incrementa en una unidad después de cada repetición. La zona de actualización se ejecuta después de la ejecución de las instrucciones que incluye el for.

*/

var alberto = {
    nombre: 'Alberto',
    apellido :'Bueno',
    edad: 28, 
    peso: 75
}

console.log(`Al inicio del año ${alberto.nombre} pesa ${alberto.peso} kilogramos`)
const INCREMENTO_PESO = 0.200 
const DIAS = 365

const aumentarDePeso = (persona, incremento)=> persona.peso += INCREMENTO_PESO
const adelgazar = (persona, incremento)=> persona.peso -= INCREMENTO_PESO

for (var i=1; i<=DIAS; i++){
    var random = Math.random()
    if(random<0.25){
        aumentarDePeso(alberto)
    } else if (random<0.50){
        adelgazar(alberto)
    } 
}
console.log(`Al final del año ${alberto.nombre} pesa ${alberto.peso.toFixed(2)} kilogramos`)
