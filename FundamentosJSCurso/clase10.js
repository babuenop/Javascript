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