// Variables : Numeros
var edad = 27 

// Incrementar el valor de uuna variable

edad = edad + 1 // ó 
edad += 1

var peso = 75 
peso = peso - 2
peso -= 2

var sandwich = 1

peso = peso + sandwich

var jugarAlFutbol = 3
peso = peso - jugarAlFutbol

var precioDeVino = 200.3
var total = precioDeVino * 3 

console.log(precioDeVino)
console.log(total)

/* Resultado 
Javascript no es tan preciso en el uso de los decimales. 
200.3
clase3.js:24 600.9000000000001
*/
// La siguiente linea funciona para ajustar los decimales. 
var total = precioDeVino * 100 * 3 / 100
// o podemos usar el modulo Math
var total = Math.round(total)
var totalStr = total.toFixed(2)
console.log(total)

var total2 = parseFloat(totalStr)

var pizza = 8
var persona = 2 
var cantidadPorcionesPersona = pizza/persona

console.log(cantidadPorcionesPersona)