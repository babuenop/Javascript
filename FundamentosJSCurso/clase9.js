/* Comparaciones */

// Con el == comparamos el valor de dos variables sin importar el tipo de dato de la variable. 
// Con el === comparamos dos cosas que son iguales y que tienen el mismo tipo de dato. 

var x = 4 , y = '4'

// Comparacion de objetos 
// Cuando se comparan objetos en JS lo que hace es preguntar a la referencia de la variable que estamos utilizando
var sacha = {
    nombre:'Sacha'
}

var otraPersona ={
    nombre: 'Sacha'
}

sacha == otraPersona
// false 

sacha === otraPersona
// false 

var otraPersona = sacha
// Si comparamos este caso Al comparar 