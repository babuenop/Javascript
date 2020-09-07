/* Funciones */ 
var nombre = 'Alberto', edad = 37 

function imprimirEdad (){
    console.log(`${nombre} tiene ${edad} años`)
}

// Las funciones nos sirven para reutilizar codigo. 
function imprimirEdad (n, e){
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Eric', 23)
imprimirEdad('David', 24)
