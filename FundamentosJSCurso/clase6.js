/* Objeto
    Un objeto reune caracteristicas o atributos propiedades de algo en especifico
*/ 
var alberto = {
    //Clave: Lo que esta a la izquierda 
    //Valor es lo que esta a la derecha
    nombre: `Alberto`,
    apellido:`Bueno`,
    edad: 28
}

var dario = {
    //Clave: Lo que esta a la izquierda 
    //Valor es lo que esta a la derecha
    nombre: `Dario`,
    apellido:`Gutierrez`,
    edad: 42
}

function imprimirNombreEnMayuscula({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(alberto)
imprimirNombreEnMayuscula(dario)
imprimirNombreEnMayuscula({ nombre:'Pepito'})
