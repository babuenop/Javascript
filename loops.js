/* Loops 
    Manera rapida que se repita una tarea especifica. 
    Mientras una condicion sea verdad el lopp se va a repetir. 
*/

//Array
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

//Funcion 
function saludarEstudiantes(estudiante){ 
    console.log(`Hola, ${estudiante}`);
}

/* Opcion 1 - For i*/
for(var i = 0; i < estudiantes.length ; i++){
    saludarEstudiantes(estudiantes[i])
}

/* Opcion 2 - For of*/
for(var estudiante of estudiantes){
    saludarEstudiantes (estudiantes);
}

/* Opcion 3 - While */
while(estudiantes.length > 0){

    console.log(estudiantes);
    
    //Cada vez que se cumpla la condicion va a sacar un elemento del array
    var estudiante = estudiantes.shift(); 

    saludarEstudiantes(estudiante);
}
