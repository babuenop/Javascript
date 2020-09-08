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

// Desestructurando objetos 
function imprimirNombreEnMayusculaOpcion2 (){
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

// imprimirNombreEnMayusculaOpcion2(alberto)
// imprimirNombreEnMayusculaOpcion2(dario)
// imprimirNombreEnMayusculaOpcion2({ nombre:'Pepito'})

function cumpleaños (persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

cumpleaños (alberto)