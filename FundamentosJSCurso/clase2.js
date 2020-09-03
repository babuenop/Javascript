var nombre = 'Alberto', apellido = 'Bueno'

var nombreEnMayusculas = nombre.toUpperCase()
var nombreEnMinusculas = nombre.toLowerCase()

//[Nombredelavariable].charAt(0) nos devolvera como resultado el primer caracter de la variable

var primeraLetraDeñNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

// Concatenar Strings
var nombreCompleto = nombre + ' ' + apellido

// Interpolacion de texto 
var nombreCompleto =`${nombre} ${apellido}`

// Dentro de las llaves podemos utilizar codigo javascript 
var nombreCompleto = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
var nombreCompletoToCorreo = `${nombre.charAt(0).toLowerCase()}${apellido.toLowerCase()}`

// Se puede acceder a un substring
var str = nombre.charAt(1)+nombre.charAt(2)
var srt = nombre.substr(1,4)

// Reto la ultima letra de su nombre es 
// Opcion1
var ultimaLetraDelNombre = `${nombre.charAt(nombre.length-1)}`
// Opcion2
var ultimaLetraDelNombre = `${nombre.substr(-1)}`


console.log(ultimaLetraDelNombre)

