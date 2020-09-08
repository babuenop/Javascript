/* Condicionales */
var sacha = {
    nombre : 'Sacha',
    apellido : 'Lifszyc',
    edad: 28,
    ingeniero: false, 
    cocinero: false, 
    cantante: true,
    dj: false, 
    guitarrista: false,
    drone: true  
}

var juan = {
    nombre : 'Juan',
    apellido : 'Perez',
    edad: 15,
    ingeniero: false, 
    cocinero: false, 
    cantante: true,
    dj: false, 
    guitarrista: false,
    drone: true  
}
function imprimirProfesiones (persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero===true){
        console.log('Ingeniero')
    } else{
        console.log("No es ingeniero")
    }
    if (persona.cocinero===true){
        console.log('Cocinero')
    }
    if (persona.cantante===true){
        console.log('Cantante')
    }
    if (persona.dj===true){
        console.log('Dj')
    }
    if (persona.guitarrista===true){
        console.log('Guitarrista')
    }
    if (persona.drone===true){
        console.log('Piloto de Drone')
    }
}

imprimirProfesiones(sacha)

const MAYORIA_DE_EDAD = 18 

function esMayorDeEdad(persona){
    return persona.edad >=MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad (persona){ 
    // Sacha es mayor de edad o 
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}